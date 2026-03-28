# 🎨 Guia de Customização

## 🌈 Mudar Cores

Abra `src/index.css` e edite as variáveis no `:root`:

```css
:root {
  --bg-color:     #e5e5e5;   /* Background principal         */
  --panel-color:  #ffffff;   /* Backgrounds de cards/seções  */
  --text-color:   #000000;   /* Texto principal              */
  --muted-text:   #555555;   /* Texto secundário             */
  --border-color: #7a7a7a;   /* Bordas e divisores           */
  --accent-color: #000000;   /* Cor de destaque              */
}
```

**Tema Dark (Inverter):**
```css
--bg-color:     #0a0e27;
--panel-color:  #1a1f3a;
--text-color:   #ffffff;
--muted-text:   #aaaaaa;
--border-color: #2a2f4a;
--accent-color: #d4af37;
```

**Tema Azul Profissional:**
```css
--bg-color:     #f0f4f8;
--panel-color:  #ffffff;
--text-color:   #1e293b;
--accent-color: #2563eb;
```

---

## ✍️ Mudar Tipografia

Em `index.html`, atualize o import do Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
>
```

Em `src/index.css`, atualize as variáveis:
```css
:root {
  --font-sans:  'Inter', sans-serif;
  --font-serif: 'Playfair Display', serif;
}
```

### Opções de Fontes

**Display (Títulos):**
| Fonte | Estilo |
|-------|--------|
| `Merriweather` | Clássico e editorial |
| `Lora` | Elegante e refinado |
| `Crimson Text` | Premium e literário |
| `Abril Fatface` | Ousado e impactante |

**Body (Corpo de Texto):**
| Fonte | Estilo |
|-------|--------|
| `Roboto` | Moderno e neutro |
| `Poppins` | Amigável e arredondado |
| `Montserrat` | Bold e geométrico |
| `Source Sans Pro` | Limpo e legível |

**Exemplo com Merriweather + Roboto:**
```html
<link
  href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
  rel="stylesheet"
>
```
```css
--font-display: 'Merriweather', serif;
--font-body:    'Roboto', sans-serif;
```

---

## 📝 Editar Conteúdo dos Componentes

Cada componente fica em `src/components/<Nome>/`.

### Navbar — `src/components/Navbar/Navbar.jsx`

```javascript
// Logo
<div className="logo-text">Seu Logo</div>

// Itens de menu
const navItems = [
  { label: 'Home',     id: 'home'     },
  { label: 'Products', id: 'products' },
  // Adicione quantos quiser
];
```

### Hero — `src/components/Hero/Hero.jsx`

```javascript
// Título principal
<h1 className="hero-title">
  Seu Título <span className="highlight">Destaque</span>
</h1>

// Subtítulo
<p className="hero-subtitle">
  Seu texto descritivo aqui
</p>

// Estatísticas
<span className="stat-value">$999B</span>
<span className="stat-label">Seu Label</span>
```

### About — `src/components/About/About.jsx`

```javascript
const features = [
  {
    icon: <Briefcase />,
    title: 'Seu Título',
    description: 'Sua descrição aqui.',
  },
  // Adicione até 4 cards
];
```

### Strategic Portfolio — `src/components/Investments/Investments.jsx`

```javascript
const portfolio = [
  {
    num: '01',
    title: 'Wholly-Owned',
    desc: 'Operating businesses span insurance, freight rail, energy generation, and manufacturing.',
  },
  // Adicione ou remova cards aqui
];
```

### Partners (Shareholders) — `src/components/Shareholders/Shareholders.jsx`

```javascript
const links = [
  'Annual Meeting Information',
  "Owner's Manual",
  'Proxy Materials',
];
```

### Annual Letters — `src/components/Reports/Reports.jsx`

```javascript
const years = [2024, 2023, 2022, 2021, 2020, 2019];
```

---

## 🖼️ Adicionar Imagens

```bash
# Crie ou use a pasta /public/ na raiz do projeto
berkshire-redesign/public/images/
```

**Em JSX:**
```javascript
<img src="/images/seu-arquivo.png" alt="Descrição da imagem" />
```

**Como background em CSS:**
```css
.section {
  background-image:    url('/images/seu-arquivo.png');
  background-size:     cover;
  background-position: center;
}
```

---

## 🎬 Editar Animações CSS

Em `src/index.css`, edite os `@keyframes`:

```css
@keyframes fadeInUp {
  from {
    opacity:   0;
    transform: translateY(30px); /* ajuste a distância */
  }
  to {
    opacity:   1;
    transform: translateY(0);
  }
}
```

Aplicando em um elemento:
```css
.meu-elemento {
  animation: fadeInUp 0.8s ease-out;
}
```

## 🎬 Editar Animações Framer Motion

Para animar componentes React:
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Conteúdo animado
</motion.div>
```

---

## ⚙️ Mudar Espaçamento

Em cada arquivo CSS componente, altere:

```css
/* Padding das seções */
padding: 100px 2rem;   /* 100px = topo/base | 2rem = laterais */

/* Gap entre cards/itens */
gap: 2rem;

/* Margin entre elementos */
margin-bottom: 2rem;
```

---

## 📱 Mudar Breakpoints

Em cada CSS, os breakpoints seguem o padrão:

```css
/* Tablet */
@media (max-width: 1199px) { ... }

/* Mobile */
@media (max-width: 768px)  { ... }
```

Altere os valores conforme necessário.

---

## 🔗 Adicionar Links Reais

**Em botões:**
```javascript
<a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
  Saiba Mais
</a>
```

**Em redes sociais no Footer:**
```javascript
<a href="https://twitter.com/seuuser" aria-label="Twitter">
  <Twitter size={20} />
</a>
```

---

## ➕ Adicionar Nova Seção

1. Crie a pasta `src/components/MinhaSecao/`
2. Crie `MinhaSecao.jsx` (copie de `Example/`)
3. Crie `MinhaSecao.css` com os estilos
4. Importe em `src/App.jsx`:
   ```javascript
   import MinhaSecao from './components/MinhaSecao/MinhaSecao';
   ```
5. Adicione no JSX do App na posição desejada

---

## 📦 Instalar Bibliotecas Externas

```bash
npm install nome-da-biblioteca
```

Importe no componente:
```javascript
import { Componente } from 'nome-da-biblioteca';
```

---

## 💾 Dicas de Desenvolvimento

| Dica | Como |
|------|------|
| Inspecionar CSS | F12 → Elements |
| Selecionar elemento | Ctrl + Shift + C |
| Testar mobile | F12 → ícone de dispositivo |
| Ver erros | F12 → Console |
| Hot-reload | Automático ao salvar |

---

## 📚 Recursos Úteis

- [React Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lenis Docs](https://lenis.darkroom.engineering/)
- [Lucide Icons](https://lucide.dev/icons/)
- [Google Fonts](https://fonts.google.com)
- [CSS Tricks](https://css-tricks.com)
- [Color Palette Generator](https://www.color-hex.com)

---

Divirta-se customizando! 🎨✨
