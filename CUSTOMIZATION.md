# 🎨 Guia de Customização

## 🌈 Mudar Cores

Abra `src/index.css` e edite as variáveis no `:root`:

```css
:root {
  --black:      #0a0e27;   /* Background principal        */
  --dark:       #1a1f3a;   /* Backgrounds secundários      */
  --gold:       #d4af37;   /* Cor primária — luxo          */
  --gold-light: #e8c547;   /* Variação clara do ouro       */
  --white:      #ffffff;   /* Texto principal              */
  --gray-light: #f5f5f5;   /* Backgrounds leves            */
  --gray-dark:  #2a2f4a;   /* Borders e elementos          */
  --accent:     #00d9ff;   /* Cyan — acentos secundários   */
}
```

### Exemplos de Temas Alternativos

**Tema Roxo:**
```css
--gold:       #9d4edd;
--gold-light: #c77dff;
--accent:     #7209b7;
```

**Tema Azul Corporativo:**
```css
--gold:       #2563eb;
--gold-light: #60a5fa;
--accent:     #06b6d4;
```

**Tema Verde Natureza:**
```css
--gold:       #16a34a;
--gold-light: #4ade80;
--accent:     #84cc16;
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
  --font-display: 'Playfair Display', serif;
  --font-body:    'Inter', sans-serif;
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

### Investments — `src/components/Investments/Investments.jsx`

```javascript
const investments = [
  {
    name:        'Categoria',
    percentage:  '25%',
    description: 'Descrição do ativo.',
    color:       '#d4af37',
  },
  // Adicione quantos quiser
];
```

### Reports — `src/components/Reports/Reports.jsx`

```javascript
const reports = {
  2025: [
    {
      title: 'Nome do Relatório',
      type:  'PDF',
      size:  '12.4 MB',
      date:  'Janeiro 2025',
    },
    // Adicione mais relatórios
  ],
};
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
