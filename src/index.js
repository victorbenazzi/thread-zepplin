export class tz {
  constructor() {
    this.worker = new Worker(new URL('./worker.js', import.meta.url));
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