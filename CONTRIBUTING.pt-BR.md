# Contribuindo com o Thread Zepplin

Primeiramente, obrigado por considerar contribuir com o Thread Zepplin! São pessoas como você que tornam o Thread Zepplin uma ferramenta incrível.

## Código de Conduta

Ao participar deste projeto, espera-se que você siga nosso Código de Conduta:

- Use linguagem acolhedora e inclusiva
- Seja respeitoso com diferentes pontos de vista e experiências
- Aceite críticas construtivas de forma graciosa
- Foque no que é melhor para a comunidade
- Demonstre empatia com outros membros da comunidade

## Como Posso Contribuir?

### Reportando Bugs

Esta seção orienta você através do processo de submissão de um relatório de bug para o Thread Zepplin. Seguir estas diretrizes ajuda os mantenedores e a comunidade a entender seu relatório.

Antes de criar relatórios de bugs, verifique as issues existentes, pois você pode descobrir que não precisa criar uma nova.

**Ao criar um relatório de bug, inclua o máximo de detalhes possível:**

* Use um título claro e descritivo
* Descreva os passos exatos que reproduzem o problema
* Forneça exemplos específicos para demonstrar os passos
* Descreva o comportamento observado após seguir os passos
* Explique qual comportamento você esperava ver e por quê
* Inclua capturas de tela se possível

### Sugerindo Melhorias

Esta seção orienta você através do processo de submissão de uma sugestão de melhoria para o Thread Zepplin, incluindo recursos completamente novos e pequenas melhorias na funcionalidade existente.

**Ao criar uma sugestão de melhoria, inclua o máximo de detalhes possível:**

* Use um título claro e descritivo
* Forneça uma descrição passo a passo da melhoria sugerida
* Forneça exemplos específicos para demonstrar os passos
* Descreva o comportamento atual e explique qual comportamento você esperava ver
* Explique por que essa melhoria seria útil para a maioria dos usuários do Thread Zepplin

### Pull Requests

* Preencha o template necessário
* Não inclua números de issues no título do PR
* Inclua capturas de tela e GIFs animados em seu pull request sempre que possível
* Siga o guia de estilo JavaScript
* Inclua testes bem estruturados e bem documentados
* Documente o novo código
* Termine todos os arquivos com uma nova linha

## Processo de Desenvolvimento

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/recurso-incrivel`)
3. Faça commit de suas alterações (`git commit -m 'feat: adiciona algum recurso incrível'`)
4. Faça push para a branch (`git push origin feature/recurso-incrivel`)
5. Abra um Pull Request

### Mensagens de Commit

Seguimos a especificação [Conventional Commits](https://www.conventionalcommits.org/). Isso leva a mensagens mais legíveis que são fáceis de seguir ao olhar o histórico do projeto.

Exemplos:

```
feat: adiciona suporte ao Meta Pixel
fix: resolve problema com inicialização do worker
docs: atualiza README com novos métodos da API
style: formata código de acordo com o guia de estilo
refactor: reestrutura comunicação do worker
test: adiciona testes unitários para método load
chore: atualiza dependências
```

### Guia de Estilo JavaScript

* Use 2 espaços para indentação
* Use ponto e vírgula
* Use aspas simples para strings
* Use template literals para interpolação de strings
* Use nomes de variáveis significativos
* Adicione comentários para lógica complexa
* Siga as melhores práticas do ES6+

### Testes

* Escreva testes unitários para novos recursos
* Garanta que todos os testes passem antes de submeter um PR
* Inclua casos de teste positivos e negativos
* Simule dependências externas apropriadamente

## Estrutura do Projeto

```
thread-zepplin/
├── src/
│   ├── index.js        # Ponto de entrada principal
│   ├── worker.js       # Implementação do Web Worker
│   └── cdn.js          # Versão CDN
├── tests/              # Arquivos de teste
├── README.md           # Documentação em inglês
├── README.pt-BR.md     # Documentação em português
└── package.json        # Metadados e dependências do projeto
```

## Obtendo Ajuda

Se você precisar de ajuda, você pode:

* Abrir uma issue com sua pergunta
* Contatar os mantenedores diretamente
* Participar das discussões da comunidade

## Atribuição

Este Guia de Contribuição é adaptado das diretrizes de contribuição de código aberto do [GitHub](https://github.com/github/docs/blob/main/CONTRIBUTING.md). 