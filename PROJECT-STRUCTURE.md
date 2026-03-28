# 📁 Estrutura Completa do Projeto

```
berkshire-redesign/
│
├── 📄 index.html                     # HTML principal, meta tags, import das fontes
├── 📄 vite.config.js                 # Configuração do Vite (plugin React)
├── 📄 package.json                   # Dependências, scripts e metadados
├── 📄 eslint.config.js               # Regras do ESLint (React + Hooks)
├── 📄 .gitignore                     # Arquivos ignorados pelo Git
│
├── 📚 Documentação (raiz do repo)
│   ├── README.md                     # Visão geral completa
│   ├── QUICKSTART.md                 # Guia rápido (3 passos)
│   ├── CUSTOMIZATION.md              # Como customizar cores, fontes e conteúdo
│   ├── DEPLOYMENT.md                 # Deploy para produção
│   └── PROJECT-STRUCTURE.md          # Este arquivo
│
└── src/
    ├── main.jsx                      # Entry point — monta o React no DOM
    ├── App.jsx                       # Componente raiz — orquestra todas as seções
    ├── index.css                     # Estilos globais: variáveis, reset, animações
    │
    └── components/
        │
        ├── Navbar/
        │   ├── Navbar.jsx            # Menu responsivo com logo e toggle mobile
        │   └── Navbar.css            # Estilos do Navbar + blur no scroll
        │
        ├── Hero/
        │   ├── Hero.jsx              # Seção principal: título, gráfico, stats, CTAs
        │   └── Hero.css              # Estilos do Hero + scroll indicator
        │
        ├── About/
        │   ├── About.jsx             # Texto da empresa + 4 feature cards
        │   └── About.css             # Estilos do About + hover effects
        │
        ├── Investments/
        │   ├── Investments.jsx       # Portfolio: gráfico em pizza + barras de progresso
        │   └── Investments.css       # Estilos + animação shimmer
        │
        ├── Shareholders/
        │   └── Shareholders.jsx      # Lista de parcerias com links interativos
        │
        ├── Reports/
        │   └── Reports.jsx           # Grid das Annual Letters (2024-2019)
        │
        ├── Footer/
        │   ├── Footer.jsx            # Rodapé: 4 colunas, socials, copyright
        │   └── Footer.css            # Estilos do Footer
        │
        └── Example/                  # ← Template de referência para novos componentes
            ├── Example.jsx
            └── Example.css
```

> **node_modules/** é criado automaticamente após `npm install` — não editar.

---

## 📊 Estatísticas do Projeto

| Aspecto | Detalhes |
|---------|----------|
| **Componentes** | 7 principais + 1 template (Example) |
| **Linhas de Código** | ~1.500+ (JSX + CSS) |
| **Animações CSS** | 7 `@keyframes` principais |
| **Animações Framer Motion** | Transições declarativas nos componentes |
| **Responsividade** | Mobile-first (320px → 1920px) |
| **Dependências principais** | React 19, Vite 8, Framer Motion, Lenis |
| **Ícones** | Lucide React (26+ ícones) |
| **Meta Lighthouse** | Performance > 90 |
| **Acessibilidade** | WAI-ARIA attributes nos interativos |
| **SEO** | Meta tags, Open Graph, `lang="pt-BR"` |

---

## 🎯 Guia de Arquivos por Tarefa

| Tarefa | Arquivo(s) |
|--------|-----------|
| Mudar cores | `src/index.css` → seção `:root` |
| Mudar tipografia | `index.html` (link Google Fonts) + `src/index.css` (variáveis) |
| Editar navbar | `src/components/Navbar/Navbar.jsx` |
| Editar hero | `src/components/Hero/Hero.jsx` |
| Editar about | `src/components/About/About.jsx` |
| Editar investments | `src/components/Investments/Investments.jsx` |
| Editar shareholders | `src/components/Shareholders/Shareholders.jsx` |
| Editar reports | `src/components/Reports/Reports.jsx` |
| Editar footer | `src/components/Footer/Footer.jsx` |
| Mudar animações CSS | `src/index.css` → seção `@keyframes` |
| Mudar animações Framer | Arquivo JSX do componente correspondente |
| Mudar espaçamentos | CSS do componente correspondente |
| Mudar breakpoints | CSS do componente correspondente |
| Adicionar nova seção | Copie `Example/`, renomeie, importe em `App.jsx` |
| Deploy | Leia `DEPLOYMENT.md` |

---

## 🔄 Fluxo de Componentes

```
main.jsx
  └── App.jsx (Root)
        ├── <Navbar />
        ├── <Hero />
        ├── <About />
        ├── <Investments />
        ├── <Shareholders />
        ├── <Reports />
        └── <Footer />
```

Cada componente é **autônomo**: tem seu próprio JSX + CSS e pode ser modificado ou removido sem impactar os demais.

---

## 📝 Convenções de Código

### Nomenclatura

| Elemento | Padrão | Exemplo |
|----------|--------|---------|
| Componentes React | PascalCase | `Navbar.jsx` |
| Arquivos CSS | PascalCase (mesmo do componente) | `Navbar.css` |
| Classes CSS | lowercase + dashes | `.navbar-logo` |
| Variáveis JS | camelCase | `navItems`, `isOpen` |
| IDs de seção HTML | lowercase | `id="about"` |
| Props | camelCase | `isScrolled`, `onClose` |

### Organização CSS (por arquivo de componente)

```css
/* 1. Layout       */ display / grid / flex / position
/* 2. Dimensões    */ width / height / padding / margin
/* 3. Cores        */ background / color / border
/* 4. Tipografia   */ font / text-align / line-height
/* 5. Efeitos      */ box-shadow / opacity / transform / animation
/* 6. Media Queries*/ @media (max-width: ...) — sempre por último
```

---

## 🎨 Sistema de Design

### Paleta Completa

| Variável | Hex | Uso |
|----------|-----|-----|
| `--bg-color` | `#e5e5e5` | Background principal |
| `--panel-color` | `#ffffff` | Backgrounds de cards / seções |
| `--text-color` | `#000000` | Texto principal / Títulos |
| `--muted-text` | `#555555` | Texto de apoio / Subtítulos |
| `--border-color` | `#7a7a7a` | Bordas e divisores |
| `--accent-color` | `#000000` | Acentos e ícones |

### Tipografia

| Papel | Família | Pesos |
|-------|---------|-------|
| Display (H1–H3) | Playfair Display, serif | 400 · 600 · 700 |
| Body (p, span…) | Inter, sans-serif | 400 · 500 · 600 · 700 |

### Espaçamento Base

| Token | Valor | Uso |
|-------|-------|-----|
| XS | `0.25rem` | Gaps mínimos |
| SM | `0.5rem` | Espaços internos pequenos |
| MD | `1rem` | Padrão |
| LG | `2rem` | Seções internas |
| XL | `3rem` | Separação entre seções |
| XXL | `6rem` | Padding de seções principais |

### Breakpoints

| Viewport | Largura |
|----------|---------|
| Mobile | < 768px |
| Tablet | 768px – 1199px |
| Desktop | 1200px+ |

---

## 🚀 Scripts Disponíveis

```bash
npm run dev      # Servidor local com hot-reload (http://localhost:5173)
npm run build    # Build otimizado para produção → /dist
npm run preview  # Preview local do build de produção
npm run lint     # Análise estática com ESLint
```

---

## 📦 Dependências

### Principais

| Pacote | Versão | Descrição |
|--------|--------|-----------|
| `react` | ^19 | Framework UI |
| `react-dom` | ^19 | Binding React → DOM |
| `framer-motion` | ^12 | Animações declarativas |
| `lenis` | ^1 | Smooth scroll suave |
| `lucide-react` | ^1.7 | Biblioteca de ícones |
| `styled-components` | ^6 | CSS-in-JS para componentes isolados |

### Dev (Build & Qualidade)

| Pacote | Descrição |
|--------|-----------|
| `vite` ^8 | Build tool ultra-rápido |
| `@vitejs/plugin-react` | Suporte React no Vite |
| `eslint` | Linter de código |
| `eslint-plugin-react-hooks` | Regras para Hooks |
| `eslint-plugin-react-refresh` | Hot reload seguro |

### Ícones Utilizados (Lucide React)

| Componente | Ícones (Lucide) |
|-----------|-----------------|
| Footer    | `Terms` (text), `Privacy` (text), `Contact` (text) |

---

## ✅ Funcionalidades Implementadas

- [x] Navbar responsivo com toggle mobile e blur no scroll
- [x] Hero section com parallax em imagens P&B e título expansivo
- [x] About com título sticky e foco em tipografia editorial
- [x] Strategic Portfolio com 3 cards interativos (Wholly-Owned, Equities, Capital)
- [x] Shareholders com links interativos e animações de hover lateral
- [x] Annual Letters com grid de arquivos de 2024 a 2019
- [x] Footer corporativo com fundo preto total (#000000)
- [x] Scroll suave integrado com Lenis
- [x] Animações declarativas com Framer Motion
- [x] Design responsivo mobile-first
- [x] Design minimalista corporativo
- [x] Paleta preto / branco / cinza
- [x] Tipografia premium (Playfair Display + Inter)
- [x] Hover states em todos os elementos interativos
- [x] SEO básico: meta description, Open Graph, `lang="pt-BR"`

---

## 🔮 Potenciais Extensões

```
Componentes:
+ Modal / Drawer
+ Carrossel / Slider (Embla Carousel)
+ Formulário de contato (com validação)
+ Team members gallery
+ Testimonials carousel
+ Blog / News section
+ Video section / reel corporativo
+ Comparison tables

Funcionalidades:
+ Light / Dark mode toggle
+ Internacionalização (i18n — PT / EN)
+ Newsletter signup (integração Mailchimp)
+ Chat bot (integração Intercom / Crisp)
+ Advanced analytics (PostHog / Mixpanel)
+ A/B testing
+ PWA (Progressive Web App)
```

---

## 📚 Ordem de Leitura da Documentação

| # | Arquivo | Quando ler |
|---|---------|-----------|
| 1 | `QUICKSTART.md` | Primeiro — para rodar em 3 passos |
| 2 | `README.md` | Visão geral completa do projeto |
| 3 | `CUSTOMIZATION.md` | Quando quiser personalizar |
| 4 | `DEPLOYMENT.md` | Quando quiser colocar online |
| 5 | `PROJECT-STRUCTURE.md` | Para entender a arquitetura |

---

## 🎓 O Que Você Aprendeu

✅ Estrutura de projeto React + Vite escalável  
✅ Componentes funcionais com Hooks (useState, useEffect, useRef)  
✅ Animações com Framer Motion  
✅ Smooth scroll com Lenis  
✅ CSS organizado por componente (co-location)  
✅ Animações CSS avançadas com `@keyframes`  
✅ Design responsivo mobile-first  
✅ SEO e meta tags  
✅ Deploy e CI/CD com GitHub Actions  
✅ Boas práticas React  
✅ Git / GitHub workflow  

---

**Criado para elevar seu portfólio** ✨

Perfeito para:
- Portfolio pessoal
- Apresentação de empresa
- Landing page premium
- Projeto de aprendizado
- Referência de código de qualidade

**Sucesso!** 🚀
