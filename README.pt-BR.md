# Thread Zepplin

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-BR.md)

Gerenciador simplificado de scripts de terceiros usando Web Workers. Otimize o carregamento de scripts como Google Tag Manager, RD Station, LinkedIn e outros de forma simples e eficiente.

## Instalação

```bash
npm install thread-zepplin
```

## Como Usar

### Forma Simples (apenas GTM)

```javascript
import { tz } from 'thread-zepplin';

const scripts = new tz();
scripts.load('GTM-XXXXXXX');
```

### Múltiplos Scripts

```javascript
import { tz } from 'thread-zepplin';

const scripts = new tz();
scripts.load({
  gtm: 'GTM-XXXXXXX',
  rd: 'seu-id-rd-station',
  linkedin: 'seu-id-linkedin',
  leadster: 'seu-id-leadster',
  meta: 'seu-pixel-id' // Facebook Pixel
});
```

## Benefícios

- 🚀 Carregamento otimizado usando Web Workers
- 🎯 API simples e intuitiva
- 🔄 Carregamento assíncrono
- 🛡️ Isolamento de scripts de terceiros
- 📦 Sem dependências externas

## Scripts Suportados

- Google Tag Manager (GTM)
- RD Station
- LinkedIn Insight Tag
- Leadster
- Meta (Facebook Pixel)

## Como Contribuir

Sinta-se à vontade para contribuir! Confira nosso [Guia de Contribuição](CONTRIBUTING.md) para mais detalhes.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes. 