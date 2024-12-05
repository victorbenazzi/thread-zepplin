# Thread Zepplin

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-BR.md)

Simplified third-party script manager using Web Workers. Optimize the loading of scripts like Google Tag Manager, RD Station, LinkedIn, and others simply and efficiently.

## Installation

### NPM
```bash
npm install thread-zepplin
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/thread-zepplin@1.1.0/src/cdn.js"></script>
```

## Usage

### Via NPM

#### Simple Usage (GTM only)
```javascript
import { tz } from 'thread-zepplin';

const scripts = new tz();
scripts.load('GTM-XXXXXXX');
```

#### Multiple Scripts
```javascript
import { tz } from 'thread-zepplin';

const scripts = new tz();
scripts.load({
  gtm: 'GTM-XXXXXXX',
  rd: 'your-rd-station-id',
  linkedin: 'your-linkedin-id',
  leadster: 'your-leadster-id',
  meta: 'your-pixel-id' // Facebook Pixel
});
```

### Via CDN
```html
<script src="https://cdn.jsdelivr.net/npm/thread-zepplin@1.1.0/src/cdn.js"></script>
<script>
  const threadZepplin = new ThreadZepplin();
  
  // Simple usage (GTM only)
  threadZepplin.load('GTM-XXXXXXX');
  
  // Or multiple scripts
  threadZepplin.load({
    gtm: 'GTM-XXXXXXX',
    rd: 'your-rd-station-id',
    linkedin: 'your-linkedin-id',
    leadster: 'your-leadster-id',
    meta: 'your-pixel-id' // Facebook Pixel
  });
</script>
```

## Benefits

- 🚀 Optimized loading using Web Workers
- 🎯 Simple and intuitive API
- 🔄 Asynchronous loading
- 🛡️ Third-party script isolation
- 📦 No external dependencies
- 🌐 Multiple integration options (NPM or CDN)

## Supported Scripts

- Google Tag Manager (GTM)
- RD Station
- LinkedIn Insight Tag
- Leadster
- Meta (Facebook Pixel)

## Contributing

Feel free to contribute! Check our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.