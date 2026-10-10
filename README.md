# VG SWAY · Página de vendas

Site estático com a apresentação dos três guias digitais. Não usa build, framework nem dependências locais: basta publicar os arquivos.

## Arquivos

- `index.html`: página de vendas, textos, FAQ e rodapé.
- `termos.html`: termos de uso.
- `privacidade.html`: política de privacidade.
- `styles.css`: cores e layout (variáveis no início do arquivo).
- `app.js`: configuração dos produtos e geração dos cards.
- `capa-video.jpg`, `capa-sites.jpg`, `capa-redes.jpg`: capas dos guias.
- `favicon.svg`: ícone da aba.
- `.nojekyll`: impede o GitHub Pages de processar os arquivos com Jekyll.

Os PDFs dos guias não fazem parte do site. Eles são entregues pela Kiwify após a compra.

## Como configurar os produtos (`app.js`)

Em cada item do array `PRODUTOS`:

- `preco`: texto exibido no card (ex.: `"R$ 24,99"`). Vazio exibe "Preço a definir".
- `checkout`: link do checkout da Kiwify. Vazio deixa o botão desabilitado com "Checkout em breve".

## Pendências antes de divulgar

Nos arquivos `termos.html` e `privacidade.html`, preencha os campos destacados em amarelo: nome completo, CPF ou CNPJ e endereço do responsável pelo site. Esses dados não foram inventados e precisam ser informados por quem opera o site.

Recomenda-se revisar os textos legais com um advogado antes da publicação.

## Publicação no GitHub Pages

1. Crie um repositório público e envie todos os arquivos desta pasta, sem os PDFs.
2. Em Settings > Pages, selecione a branch `main` e a pasta `/ (root)`.
3. O endereço fica em `https://USUARIO.github.io/NOME-DO-REPOSITORIO/`.
