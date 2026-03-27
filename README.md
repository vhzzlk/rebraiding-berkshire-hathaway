# 🔥 Berkshire Hathaway — Redesign 2025

Um rebranding premium e moderno do site da Berkshire Hathaway, com design corporativo inovador e interface intuitiva.

---

## ✨ Features

- **Design Premium** — Paleta luxuosa (Preto + Branco + Dourado)
- **Navbar Moderna** — Menu responsivo com efeito de scroll e blur
- **Hero Section Impactante** — Animações suaves com Framer Motion e gráficos interativos
- **Scroll Suave** — Integrado com Lenis para experiência fluida
- **Seções Otimizadas**:
  - **About** — Sobre a empresa com cards de features
  - **Investments** — Portfolio com gráfico em pizza animado
  - **Shareholders** — Recursos para acionistas
  - **Reports** — Relatórios financeiros filtrados por ano
- **Footer Completo** — Links, redes sociais e informações
- **100% Responsivo** — Mobile-first design
- **Animações Suaves** — Transições e micro-interações (Framer Motion + CSS)
- **Performance Otimizada** — Vite 8 + React 19 para máxima velocidade

---

## 🎨 Design System

### Paleta de Cores

```css
--black:      #0a0e27   /* Background principal        */
--dark:       #1a1f3a   /* Backgrounds secundários      */
--gold:       #d4af37   /* Cor primária — luxo          */
--gold-light: #e8c547   /* Variação do ouro             */
--white:      #ffffff   /* Texto principal              */
--gray-light: #f5f5f5   /* Backgrounds leves            */
--gray-dark:  #2a2f4a   /* Borders e elementos          */
--accent:     #00d9ff   /* Acentos em cyan              */
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
- Logo com gradiente dourado
- Menu responsivo com toggle mobile
- Efeito de blur ao fazer scroll
- Botão CTA destacado

### Hero
- Título com highlight em gradiente
- Gráfico de linha interativo
- Cards de estatísticas animados
- Dual CTA buttons
- Scroll indicator animado

### About
- Texto descritivo da empresa
- 4 cards de features com ícones
- Efeito hover com barra top
- Design limpo e elegante

### Investments
- Gráfico de pizza animado (CSS)
- 6 investimentos com barras de progresso
- Animação de shimmer nas barras
- Porcentagens dinâmicas

### Shareholders
- 4 cards de recursos
- Ícones com gradiente
- Call-to-action destacado
- Links com animação hover

### Reports
- Filtro por ano
- Lista de relatórios (PDF)
- Botões View / Download
- Metadados: tipo, tamanho, data

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
| `rotate` | Rotação do gráfico de pizza |
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
  --gold: #novaCorHex;
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
2. Atualize as variáveis `--font-display` e `--font-body` em `src/index.css`

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
