# 🔥 Berkshire Hathaway — Redesign 2025

Um rebranding premium e moderno do site da Berkshire Hathaway, com design corporativo inovador e interface intuitiva.

---

## ✨ Features

- **Design Premium** — Paleta corporativa minimalista (Cinza + Branco + Preto)
- **Navbar Moderna** — Menu responsivo com efeito de scroll e blur
- **Hero Section Impactante** — Animações suaves com Framer Motion e gráficos interativos
- **Scroll Suave** — Integrado com Lenis para experiência fluida
- **Seções Otimizadas**:
  - **About** — Nossa Filosofia com texto expansivo
- **Strategic Portfolio** — Grid de 3 cards interativos (Wholly-Owned, Equities, Capital)
- **Shareholders** — Links interativos com animações de hover
- **Annual Letters** — Arquivo de cartas aos acionistas (2024-2019)
- **Footer Corporativo** — Design em preto total com links utilitários
- **100% Responsivo** — Mobile-first design
- **Animações Suaves** — Transições e micro-interações (Framer Motion + CSS)
- **Performance Otimizada** — Vite 8 + React 19 para máxima velocidade

---

## 🎨 Design System

### Paleta de Cores

```css
--bg-color:     #e5e5e5;   /* Background principal         */
--panel-color:  #ffffff;   /* Backgrounds de cards/seções  */
--text-color:   #000000;   /* Texto principal              */
--muted-text:   #555555;   /* Texto secundário             */
--border-color: #7a7a7a;   /* Bordas e divisores           */
--accent-color: #000000;   /* Cor de destaque              */
```

### Tipografia

| Uso | Família | Pesos |
|-----|---------|-------|
| Títulos (Display) | Playfair Display (serif) | 400 · 600 · 700 |
| Corpo (Body) | Inter (sans-serif) | 400 · 500 · 600 · 700 |

---

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
# 1. Entre na pasta do projeto
cd berkshire-redesign

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto abrirá em `http://localhost:5173`

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Servidor local com hot-reload (porta 5173) |
| `npm run build` | Build otimizado para produção → `/dist` |
| `npm run preview` | Preview local do build de produção |
| `npm run lint` | Analisa o código com ESLint |

---

## 📁 Estrutura do Projeto

```
berkshire-redesign/
├── index.html
├── vite.config.js
├── package.json
├── eslint.config.js
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar/
        │   ├── Navbar.jsx
        │   └── Navbar.css
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.css
        ├── About/
        │   ├── About.jsx
        │   └── About.css
        ├── Investments/
        │   ├── Investments.jsx
        │   └── Investments.css
        ├── Shareholders/
        │   ├── Shareholders.jsx
        │   └── Shareholders.css
        ├── Reports/
        │   ├── Reports.jsx
        │   └── Reports.css
        ├── Footer/
        │   ├── Footer.jsx
        │   └── Footer.css
        └── Example/          ← template de referência
            ├── Example.jsx
            └── Example.css
```

---

## 🎯 Componentes

### Navbar
- Logo minimalista
- Menu responsivo com toggle mobile
- Efeito de blur ao fazer scroll
- Botão CTA destacado

### Hero
- Título com efeito parallax (Enduring Value)
- Imagens de edifícios em escala de cinza
- Dual CTA buttons
- Scroll indicator animado e efeito de escala

### About
- Título "Our Philosophy" com sticky behavior
- Texto focado em visão de longo prazo e integridade
- Layout em grid com destaque de tipografia

### Strategic Portfolio (Investments)
- Grid de 3 cards principais
- Efeito de hover: elevação e mudança de background
- Foco em negócios 100% controlados e equidades

### For Our Partners (Shareholders)
- Comunicação direta com parceiros
- Lista de links interativos com setas indicadoras
- Efeito de hover com padding dinâmico e background sutil

### Annual Letters (Reports)
- Grid de cards de 2024 a 2019
- Foco em "Letters to Shareholders"
- Efeito de escala e elevação ao passar o mouse

### Footer
- 4 colunas de navegação
- Links de redes sociais
- Informações de copyright

---

## 🎬 Animações

| Nome | Efeito |
|------|--------|
| `fadeInUp` | Entrada suave de baixo para cima |
| `slideInLeft` | Entrada da esquerda |
| `float` | Flutuação dos elementos de background |
| `glow` | Brilho nos cards em hover |
| `shimmer` | Efeito shine nas barras de progresso |
| `bounce` | Animação do scroll indicator |
| Framer Motion | Transições de página e micro-interações |

---

## 📱 Responsividade

| Breakpoint | Largura |
|------------|---------|
| Mobile | < 768px |
| Tablet | 768px – 1199px |
| Desktop | 1200px+ |

---

## 🔧 Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | ^19 | Framework UI |
| Vite | ^8 | Build tool |
| Framer Motion | ^12 | Animações declarativas |
| Lenis | ^1 | Smooth scroll |
| Lucide React | ^1.7 | Ícones modernos |
| Styled Components | ^6 | CSS-in-JS (componentes isolados) |
| Google Fonts | — | Playfair Display + Inter |

---

## 🛠️ Customização

### Mudar Cores
Edite as variáveis CSS em `src/index.css`:
```css
:root {
  --bg-color: #novaCorHex;
  /* ... outras variáveis */
}
```

### Adicionar Seções
1. Copie a pasta `src/components/Example/`
2. Renomeie e edite `Example.jsx` e `Example.css`
3. Importe em `App.jsx`
4. Insira o componente no JSX do App

### Modificar Fontes
1. Atualize o link `<link>` em `index.html`
2. Atualize as variáveis `--font-sans` e `--font-serif` em `src/index.css`

> Para mais detalhes, leia [`CUSTOMIZATION.md`](./CUSTOMIZATION.md)

---

## 📈 Performance

- Lazy loading de imagens
- CSS otimizado e minificado pelo Vite
- Animações com GPU acceleration (`transform`, `opacity`)
- Bundle size otimizado com tree-shaking do Vite
- Fontes com `preconnect` e `display=swap`

---

## 🎓 O Que Este Projeto Demonstra

- Componentes React 19 funcionais com Hooks
- Animações com Framer Motion
- Smooth scroll com Lenis
- CSS organizado por componente (co-location)
- Animações CSS avançadas com `@keyframes`
- Design responsivo mobile-first
- Boas práticas de SEO (meta tags, Open Graph)
- Estrutura de projeto escalável

---

## 📝 Licença

Este é um projeto de demonstração / portfólio. Não afiliado à Berkshire Hathaway Inc.

---

**Criado com ❤️ para portfólio — Design Premium & Modern Dev**
