# Projeto 1.4.1 — Vercel + VS Code

Versão definitiva do monitor temporal. O contador começa no momento do build/deploy da Vercel. Um novo deploy gera um novo timestamp.

## Testar no VS Code

Opção 1 — Live Server: abra `public/index.html` com o Live Server. A logo e o contador funcionam localmente; em localhost o contador começa no momento em que a página é aberta. O primeiro CMD aparece após cerca de 3 segundos.

Opção 2 — terminal: execute `npm run dev`. Isso regenera o timestamp e inicia um servidor local para a pasta `public`.

Também existe um `index.html` na raiz que redireciona para `public/index.html` se você iniciar o Live Server pela raiz do projeto.

## Vercel

Importe este projeto diretamente na Vercel. O `vercel.json` usa `npm run build` e publica `public/`. O script `scripts/generate-start-time.js` grava o timestamp durante cada build.

Não há botão público de iniciar/pausar. O timer é somente leitura.

## CMD / glitch

O CMD é puramente visual. O primeiro aparece após aproximadamente 3 segundos; os seguintes aparecem em intervalos aleatórios de aproximadamente 5–15 segundos. Os comandos são animados, com tremedeira, entrada/saída glitch e codinomes do Projeto 1.4.1.

## Estrutura

- `public/index.html` — interface completa
- `public/logo.png` — logo
- `public/start-time.js` — timestamp gerado automaticamente
- `scripts/generate-start-time.js` — gera o timestamp no build
- `vercel.json` — configuração da Vercel
- `package.json` — scripts do projeto
