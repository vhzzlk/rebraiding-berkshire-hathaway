# 🎨 Guia de Customização

## 🌈 Mudar Cores

Abra `src/index.css` e edite as variáveis no `:root`:

```css
:root {
  --black: #0a0e27;           /* Mude para seu preto */
  --dark: #1a1f3a;            /* Backgrounds secundários */
  --gold: #d4af37;            /* Cor primária */
  --gold-light: #e8c547;      /* Variação clara */
  --white: #ffffff;           /* Texto branco */
  --accent: #00d9ff;          /* Cyan - acentos */
}
```

### Exemplo: Mudar para tema roxo

```css
--gold: #9d4edd;
--gold-light: #c77dff;
--accent: #7209b7;
```

---

## ✍️ Mudar Tipografia

Em `index.html`, procure por:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Outras opções de fontes:

**Display (Títulos):**
- `Merriweather` - Clássico
- `Lora` - Elegante
- `Crimson Text` - Premium
- `Abril Fatface` - Ousado

**Body (Texto):**
- `Roboto` - Moderno
- `Poppins` - Friendly
- `Montserrat` - Bold
- `Source Sans Pro` - Clean

Exemplo:
```html
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

Depois atualize em `index.css`:
```css
--font-display: 'Merriweather', serif;
--font-body: 'Roboto', sans-serif;
```

---

## 📝 Editar Conteúdo

### Navbar - `src/components/Navbar.jsx`

```javascript
// Mude o logo
<div className="logo-text">Seu Logo</div>

// Edite os itens de menu
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Products', id: 'products' },
  // ...
];
```

### Hero - `src/components/Hero.jsx`

```javascript
// Título principal
<h1 className="hero-title">
  Seu Título Aqui <span className="highlight">Destaque</span>
</h1>

// Subtítulo
<p className="hero-subtitle">
  Seu texto descritivo aqui
</p>

// Estatísticas
<span className="stat-value">$999B</span>
<span className="stat-label">Seu Label</span>
```

### About - `src/components/About.jsx`

```javascript
const features = [
  {
    title: 'Seu Título',
    description: 'Sua descrição aqui',
  },
  // ...
];
```

### Investments - `src/components/Investments.jsx`

```javascript
const investments = [
  {
    name: 'Categoria',
    percentage: '25%',
    description: 'Descrição',
    color: '#d4af37',
  },
  // ...
];
```

### Reports - `src/components/Reports.jsx`

```javascript
const reports = {
  2024: [
    {
      title: 'Nome do Relatório',
      type: 'PDF',
      size: '12.4 MB',
      date: 'Mês Ano',
    },
    // ...
  ],
};
```

---

## 🖼️ Adicionar Imagens

### No Hero

```javascript
// Crie uma pasta /public/images
// Coloque suas imagens lá

<img src="/images/seu-arquivo.png" alt="Descrição" />
```

### Como Background

```css
.section {
  background-image: url('/images/seu-arquivo.png');
  background-size: cover;
  background-position: center;
}
```

---

## ⚙️ Mudar Espaçamento

Em cada arquivo CSS, altere:

```css
/* Seções */
padding: 100px 2rem;  /* Mude para 60px ou 150px */

/* Gaps entre elementos */
gap: 2rem;  /* Mude para 1rem ou 3rem */

/* Margens */
margin-bottom: 2rem;  /* Ajuste conforme necessário */
```

---

## 🎬 Editar Animações

Em `src/index.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);  /* Mude o valor */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Aplicar animation

```css
.elemento {
  animation: fadeInUp 0.8s ease-out;  /* duration e easing */
}
```

---

## 📱 Mudar Breakpoints

Em cada CSS, procure por:

```css
@media (max-width: 768px) {
  /* Mude 768px para seu breakpoint */
}
```

---

## 🔗 Adicionar Links Reais

### Em Botões

```javascript
<a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
  Seu Link
</a>
```

### Em Footer

```javascript
<a href="https://twitter.com/seuuser" aria-label="Twitter">
  <Twitter size={20} />
</a>
```

---

## 💾 Dicas de Desenvolvimento

1. **Use DevTools** para debugar CSS
2. **Ctrl+Shift+C** para inspecionar elementos
3. **Hot reload** funciona automaticamente (F5 para refresh manual)
4. **Teste no mobile** frequentemente (F12 → Mobile)

---

## 🚀 Mais Mudanças Avançadas

### Adicionar nova seção

1. Crie `src/components/MinhaSecao.jsx`
2. Importe em `App.jsx`
3. Adicione no JSX do App
4. Crie `MinhaSecao.css`
5. Estilize conforme desejado

### Usar bibliotecas externas

```bash
npm install sua-biblioteca
```

Depois importe:
```javascript
import { Componente } from 'sua-biblioteca'
```

---

## 📚 Recursos

- [React Docs](https://react.dev)
- [CSS Tricks](https://css-tricks.com)
- [Google Fonts](https://fonts.google.com)
- [Hex Color Picker](https://www.color-hex.com)

---

Divirta-se customizando! 🎨✨
