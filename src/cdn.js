// Thread Zepplin - CDN Version
(function(window) {
  const workerCode = `
    self.addEventListener('message', function(e) {
      const { scriptType, params } = e.data;
    
      switch(scriptType) {
        case 'gtm':
          loadGTM(params.id);
          break;
        case 'rdstation':
          loadRDStation(params.id);
          break;
        case 'linkedin':
          loadLinkedIn(params.id);
          break;
        case 'leadster':
          loadLeadster(params.id);
          break;
        case 'meta':
          loadMeta(params.id);
          break;
      }
    });
    
    function loadGTM(id) {
      const script = \`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        var f = document.getElementsByTagName('script')[0];
        var j = document.createElement('script');
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + '\${id}';
        f.parentNode.insertBefore(j, f);
      \`;
      self.postMessage({ type: 'inject', script });
    }
    
    function loadRDStation(id) {
      const script = \`
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/\${id}-loader.js';
        document.head.appendChild(script);
      \`;
      self.postMessage({ type: 'inject', script });
    }
    
    function loadLinkedIn(id) {
      const script = \`
        window._linkedin_partner_id = "\${id}";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
        
        if (!window.lintrk) {
          window.lintrk = function(a,b) { window.lintrk.q.push([a,b]) };
          window.lintrk.q = [];
        }
        
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b,s);
      \`;
      self.postMessage({ type: 'inject', script });
    }
    
    function loadLeadster(id) {
      const script = \`
        var script = document.createElement('script');
        script.src = "https://cdn.leadster.com.br/neurolead/neurolead.min.js";
        script.charset = "UTF-8";
        script.defer = true;
        window.neuroleadId = "\${id}";
        document.head.appendChild(script);
      \`;
      self.postMessage({ type: 'inject', script });
    }
  
    function loadMeta(id) {
      const script = \`
        !function(f,b,e,v,n,t,s) {
          if(f.fbq)return;
          n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)
        }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '\${id}');
        fbq('track', 'PageView');
      \`;
      self.postMessage({ type: 'inject', script });
    }
  `;

  class ThreadZepplin {
    constructor() {
      const blob = new Blob([workerCode], { type: 'application/javascript' });
      const workerUrl = URL.createObjectURL(blob);
      this.worker = new Worker(workerUrl);
      
      this.worker.onmessage = (e) => {
        if (e.data.type === 'inject') {
          const script = document.createElement('script');
          script.textContent = e.data.script;
          document.head.appendChild(script);
        }
      };
    }

    load(config) {
      if (typeof config === 'string') {
        this.worker.postMessage({ scriptType: 'gtm', params: { id: config } });
        return;
      }

      const scripts = {
        gtm: config.gtm,
        rdstation: config.rd,
        linkedin: config.linkedin,
        leadster: config.leadster,
        meta: config.meta
      };

      Object.entries(scripts).forEach(([type, id]) => {
        if (id) {
          this.worker.postMessage({ scriptType: type, params: { id } });
        }
      });
    }
  }

  // Expor a classe globalmente
  window.ThreadZepplin = ThreadZepplin;
})(window); 