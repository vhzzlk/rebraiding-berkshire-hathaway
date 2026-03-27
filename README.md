# 🔥 Berkshire Hathaway - Redesign 2025

Um rebranding premium e moderno do site da Berkshire Hathaway com design corporativo inovador e interface intuitiva.

## ✨ Features

- **Design Premium**: Paleta luxuosa (Preto + Branco + Dourado)
- **Navbar Moderna**: Menu responsivo com efeito de scroll
- **Hero Section Impactante**: Animações suaves e gráficos interativos
- **Seções Otimizadas**:
  - About: Sobre a empresa com cards de features
  - Investments: Portfolio com gráfico em pizza animado
  - Shareholders: Recursos para acionistas
  - Reports: Seção de relatórios financeiros filtrados por ano
- **Footer Completo**: Links, redes sociais e informações
- **100% Responsivo**: Mobile-first design
- **Animações Suaves**: Transições e micro-interações elegantes
- **Performance Otimizado**: Vite + React para máxima velocidade

## 🎨 Design System

### Paleta de Cores
```css
--black: #0a0e27          /* Background principal */
--dark: #1a1f3a           /* Backgrounds secundários */
--gold: #d4af37           /* Cor primária - luxo */
--gold-light: #e8c547     /* Variação do ouro */
--white: #ffffff          /* Texto principal */
--gray-light: #f5f5f5     /* Backgrounds leves */
--gray-dark: #2a2f4a      /* Borders e elementos */
--accent: #00d9ff         /* Acentos em cyan */
```

### Tipografia
- **Display**: Playfair Display (serif) - Títulos e destaques
- **Body**: Inter (sans-serif) - Corpo de texto

## 🚀 Como Usar

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

1. **Clone ou extraia o projeto**
```bash
cd berkshire-redesign
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O projeto abrirá automaticamente em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `/dist`

### Preview de Produção

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
berkshire-redesign/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Investments.jsx & Investments.css
│   │   ├── Shareholders.jsx & Shareholders.css
│   │   ├── Reports.jsx & Reports.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## 🎯 Componentes

### Navbar
- Logo com gradiente
- Menu responsivo
- Efeito de blur ao fazer scroll
- Botão CTA destacado

### Hero
- Título com highlight em gradiente
- Gráfico de linha interativo
- Cards de estatísticas
- Dual CTA buttons
- Scroll indicator animado

### About
- Texto descritivo
- 4 Cards de features com ícones
- Efeito hover com barra top
- Design limpo e elegante

### Investments
- Gráfico de pizza animado
- 6 investimentos com barras de progresso
- Animação de shimmer nos bars
- Porcentagens dinâmicas

### Shareholders
- 4 Cards de recursos
- Ícones com gradiente
- Call-to-action destacado
- Links com animação

### Reports
- Filtro por ano
- Lista de relatórios
- Botões View/Download
- Metadados (tipo, tamanho, data)

### Footer
- 4 Seções de navegação
- Links de redes sociais
- Informações de copyright

## 🎬 Animações

- **fadeInUp**: Entrada suave do conteúdo
- **slideInLeft**: Entrada lateral
- **float**: Flutuação dos elementos background
- **glow**: Efeito de brilho dos cards
- **shimmer**: Efeito shine nas barras de progresso
- **bounce**: Animação de bounce do scroll indicator
- **rotate**: Rotação do gráfico de pizza

## 📱 Responsividade

O projeto usa media queries para garantir perfeição em:
- Desktop (1400px+)
- Tablet (768px - 1399px)
- Mobile (< 768px)

## 🛠️ Customização

### Mudar Cores
Edite as variáveis CSS em `src/index.css`:
```css
:root {
  --gold: #novaCorreção;
  /* ... outras cores */
}
```

### Adicionar Seções
1. Crie novo arquivo em `src/components/`
2. Importe em `App.jsx`
3. Adicione à estrutura de seções
4. Crie CSS com mesmo nome do componente

### Modificar Fontes
Atualize o import em `index.html` e as variáveis em `index.css`

## 🔧 Tecnologias

- **React 18**: Framework UI
- **Vite**: Build tool ultra-rápido
- **Lucide React**: Ícones modernos
- **CSS3**: Animações e layout
- **Google Fonts**: Playfair Display + Inter

## 📈 Performance

- Lazy loading de imagens
- CSS otimizado
- Animações com GPU acceleration
- Bundle size otimizado com Vite

## 🎓 Aprendizados

Este projeto demonstra:
- Componentes React funcionais
- CSS Modules e variáveis CSS
- Animações avançadas
- Design responsivo
- UX/UI moderno
- Uso de hooks (useState, useEffect)
- Scroll event listeners
- Grid e Flexbox layout

## 📝 Licença

Este é um projeto de demonstração/portfólio.

## 🤝 Contribuições

Sinta-se livre para forkar, modificar e melhorar!

---

**Criado com ❤️ para portfólio - Design Premium & Modern Dev**
