# AGE - Protótipo de Alta Fidelidade (Assets + Frontend preview)

Este repositório contém:
- **fig-assets/**: imagens geradas do protótipo (login, dashboard, overview)
- **frontend/**: um preview simples em HTML para visualizar as telas localmente

---

## 1) Baixar e executar o preview localmente

Requisitos: Node.js + npm

```bash
cd frontend
npm install
npm run start
```

O comando abre uma página local com as imagens organizadas.

---

## 2) Como transformar essas imagens em um arquivo .fig (Figma) editável

Infelizmente não é possível gerar um arquivo .fig diretamente com esta ferramenta, mas você pode **reconstruir o design no Figma** em poucos minutos seguindo estes passos:

### Passo a passo para criar o .fig no Figma

1. Acesse https://www.figma.com e faça login (ou crie uma conta).
2. Clique em **New file** → abre o editor.
3. No seu computador, abra a pasta `fig-assets/` e selecione as imagens (login.png, dashboard.png, overview.png).
4. Arraste as imagens para a área do Figma. Cada imagem será colocada dentro de um *Frame* automaticamente.
5. Para transformar cada tela em artboards:
   - Selecione uma imagem e pressione `Shift + A` para transformar em *Frame* (ou use o ícone Frame).
   - Ajuste o tamanho do frame para a resolução desejada (ex: 1920x1080).
6. Para transformar elementos em camadas editáveis:
   - Use a ferramenta **Rectangle** para cobrir áreas que serão botões/cards e alinhe por cima.
   - Se quiser re-criar texto, use a ferramenta **Text** e copie os textos visíveis.
   - Ícones: você pode buscar ícones em recursos (Feather, Material Icons) e substituir.
7. Crie components:
   - Selecione um botão ou card, clique com o botão direito → **Create component**. Assim você poderá reaplicar e editar globalmente.
8. Estabeleça a paleta:
   - No painel de propriedades, crie **Color Styles** usando as cores sugeridas:
     - Azul profundo: `#0B2E63`
     - Cinza escuro: `#333333`
     - Cinza médio: `#676767`
     - Cinza claro: `#E6E6E6`
     - Branco: `#FFFFFF`
9. Salve o arquivo no Figma — ele automaticamente fica disponível como `.fig` na sua conta (não é um arquivo baixável .figx facilmente, mas você pode compartilhar o link do projeto).
10. (Opcional) Exportar assets:
    - Selecione imagens/vetores → **Export** → escolha PNG/SVG/PDF.

Dicas rápidas:
- Para facilitar a edição, importe também fontes parecidas (Inter / Montserrat / Lato).
- Use **Auto Layout** para criar cards responsivos.
- Se quiser que eu gere um guia com posicionamento (tamanhos e espaçamentos) eu posso fornecer.

---

## 3) Se quiser, eu posso:
- Gerar versões separadas com **áreas transparentes** (botões/cards isolados) para facilitar o re-tracing no Figma.
- Fornecer um **guia de estilo** (paleta, tipografia, padding, bordas) pronto para colar no Figma.

---

### Download do ZIP
Dentro desta pasta há um arquivo `age-reservas-design.zip` com tudo pronto para baixar.