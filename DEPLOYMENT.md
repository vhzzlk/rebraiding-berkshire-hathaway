# 🚀 Guia de Deployment

## 📦 Build de Produção

```bash
npm run build
```

Gera a pasta `/dist` com arquivos otimizados e minificados, prontos para qualquer servidor estático.

---

## 🌐 Deploy em Diferentes Plataformas

### 1️⃣ Vercel ✅ (Recomendado)

**Via CLI:**

```bash
npm i -g vercel
vercel login
vercel --prod
```

**Via dashboard (mais fácil):**

1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático a cada push em `main`

> Nenhuma configuração extra necessária — Vercel detecta Vite automaticamente.

---

### 2️⃣ Netlify

**Via CLI:**

```bash
npm i -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

**Via drag-and-drop:**

1. Rode `npm run build` localmente
2. Arraste a pasta `/dist` em [app.netlify.com](https://app.netlify.com)

---

### 3️⃣ GitHub Pages

```bash
# 1. Inicialize e envie o repositório
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/berkshire-redesign.git
git branch -M main
git push -u origin main
```

```bash
# 2. Instale o pacote de deploy
npm install --save-dev gh-pages
```

Em `package.json`, adicione:

```json
{
  "homepage": "https://seu-usuario.github.io/berkshire-redesign",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

```bash
# 3. Faça o deploy
npm run deploy
```

> **Atenção:** Adicione `base: '/berkshire-redesign/'` em `vite.config.js` para corrigir os caminhos de assets.

---

### 4️⃣ Servidor Próprio (VPS / AWS / DigitalOcean)

```bash
# Build localmente
npm run build

# Envie /dist via SCP
scp -r dist/ user@seu-servidor:/var/www/berkshire/
```

**Configuração Nginx:**

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    root /var/www/berkshire;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

> O `try_files` com `/index.html` é obrigatório para o roteamento do React funcionar corretamente.

---

## ✅ Checklist Pré-Deploy

- [ ] `npm run lint` — sem erros de código
- [ ] `npm run build` — build sem erros
- [ ] `npm run preview` — testar build localmente
- [ ] Links de navegação funcionando corretamente
- [ ] Responsividade testada em mobile (F12)
- [ ] Console sem erros (F12 → Console)
- [ ] Network sem 404s (F12 → Network)
- [ ] Sem imagens quebradas
- [ ] Lighthouse score aceitável (Performance > 80)
- [ ] Meta tags corretas em `index.html`
- [ ] Favicon definido em `/public/`
- [ ] Open Graph tags configuradas

---

## 🔍 SEO & Meta Tags

Edite em `index.html`:

```html
<!-- SEO Básico -->
<meta name="description" content="Descrição clara do site (150–160 chars)" />
<meta name="keywords" content="palavras-chave, separadas, por-virgula" />
<meta name="author" content="Seu Nome" />

<!-- Open Graph (LinkedIn, Facebook, WhatsApp) -->
<meta property="og:title" content="Título para compartilhamento" />
<meta property="og:description" content="Descrição para redes sociais" />
<meta property="og:image" content="https://seu-site.com/og-image.png" />
<meta property="og:url" content="https://seu-site.com" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Título para Twitter" />
<meta name="twitter:description" content="Descrição para Twitter" />
<meta name="twitter:image" content="https://seu-site.com/og-image.png" />
```

---

## 📊 Análise & Performance

### Google Lighthouse

1. Abra DevTools → **F12**
2. Vá em aba **Lighthouse**
3. Clique **Analyze page load**
4. Analise os scores: Performance, Accessibility, SEO, Best Practices

### Google PageSpeed Insights

Acesse [pagespeed.web.dev](https://pagespeed.web.dev/) e cole a URL do seu site.

---

## 🔐 Segurança

### HTTPS

| Plataforma       | SSL                                           |
| ---------------- | --------------------------------------------- |
| Vercel           | Automático                                    |
| Netlify          | Automático                                    |
| GitHub Pages     | Automático                                    |
| Servidor próprio | Use [Let's Encrypt](https://letsencrypt.org/) |

### Headers de Segurança

Em `vite.config.js`:

```javascript
export default {
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
    },
  },
};
```

---

## 📈 Monitoramento

| Ferramenta       | Uso                                 |
| ---------------- | ----------------------------------- |
| Vercel Analytics | Métricas integradas (Web Vitals)    |
| Google Analytics | Tráfego e comportamento de usuários |
| Sentry           | Rastrear erros em produção          |
| UptimeRobot      | Monitorar disponibilidade do site   |

### Adicionar Google Analytics

```html
<!-- Em index.html, antes de </head> -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

Substitua `G-XXXXXXXXXX` pelo seu Measurement ID.

---

## 🔄 CI/CD com GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - run: npm ci

      - run: npm run lint

      - run: npm run build

      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
```

> Adapte o passo de upload para usar o action de deploy da sua plataforma (Vercel, Netlify, etc.).

---

## 🌍 Domínio Customizado

1. Registre um domínio (Namecheap, GoDaddy, Registro.br…)
2. Configure o DNS:

| Plataforma       | Como apontar                   |
| ---------------- | ------------------------------ |
| Vercel           | Dashboard → Domains → Add      |
| Netlify          | Dashboard → Domain Management  |
| GitHub Pages     | Arquivo `CNAME` + config DNS   |
| Servidor próprio | DNS tipo A apontando para o IP |

---

## 🐛 Troubleshooting

### Build falha

```bash
# Limpe cache e reinstale
# Windows:
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
npm run build

# Mac/Linux:
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Página branca após deploy

- Verifique o console (F12) por erros
- Verifique Network por 404s (assets não encontrados)
- Se usou GitHub Pages, verifique o `base` no `vite.config.js`

### Links internos quebrados

- Confirme que o servidor tem a regra `try_files` para SPAs
- Para Vite + React Router, adicione `"rewrites"` no Vercel/Netlify

---

## 💾 Versionamento com Git

```bash
# Crie tags de release
git tag -a v1.0.0 -m "Release v1.0 — Deploy inicial"
git push origin v1.0.0

# Crie branches para features
git checkout -b feature/nova-secao
# ... faça suas mudanças ...
git push origin feature/nova-secao
# Abra um Pull Request no GitHub
```

---

## 📞 Recursos & Referências

- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [React 19 Docs](https://react.dev)
- [Web Vitals](https://web.dev/vitals/)
- [Let's Encrypt](https://letsencrypt.org/)

---

**Deploy está pronto quando:**
✅ Sem erros no console  
✅ Sem 404s na aba Network  
✅ Todos os links funcionam  
✅ Responsivo em mobile  
✅ Lighthouse score > 80

Seu site está pronto para o mundo! 🌍
