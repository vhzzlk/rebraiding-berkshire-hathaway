# 🚀 Guia de Deployment

## 📦 Build de Produção

```bash
npm run build
```

Isso cria a pasta `/dist` com arquivos otimizados e minificados.

---

## 🌐 Deploy em Diferentes Plataformas

### 1️⃣ **Vercel** (Recomendado - Mais Fácil)

```bash
# Install Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel
```

Ou conecte seu repositório no painel: [vercel.com](https://vercel.com)

### 2️⃣ **Netlify**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy --prod
```

Ou arraste a pasta `/dist` em [app.netlify.com](https://app.netlify.com)

### 3️⃣ **GitHub Pages**

1. Crie um repositório no GitHub
2. Faça commit do código:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/berkshire-redesign.git
git branch -M main
git push -u origin main
```

3. Vá em Settings → Pages
4. Selecione `main` branch e pasta `/docs` (ou mude para `/dist`)
5. Deploy automático!

### 4️⃣ **Heroku** (Para backend também)

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

heroku login
heroku create seu-app-name
git push heroku main
```

### 5️⃣ **Servidor Próprio (VPS/AWS/DigitalOcean)**

```bash
# Build localmente
npm run build

# Transfira /dist via SFTP ou SCP
scp -r dist/ user@seu-server:/var/www/seu-site/

# Configure nginx/apache para servir os arquivos estáticos
```

**Exemplo nginx.conf:**
```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        root /var/www/seu-site/dist;
        try_files $uri $uri/ /index.html;
    }
}
```

---

## ✅ Checklist Pré-Deploy

- [ ] Teste localmente: `npm run dev`
- [ ] Build sem erros: `npm run build`
- [ ] Testar build: `npm run preview`
- [ ] Links funcionando corretamente
- [ ] Responsividade em mobile (F12)
- [ ] Sem erros no console (F12 → Console)
- [ ] Sem imagens quebradas
- [ ] Velocidade aceitável (Lighthouse)
- [ ] Meta tags corretas no `index.html`
- [ ] Favicon definido

---

## 🔍 SEO & Meta Tags

Edite em `index.html`:

```html
<meta name="description" content="Descrição do site para SEO">
<meta name="keywords" content="palavras-chave, separadas, por-virgula">
<meta name="author" content="Seu Nome">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="Título para compartilhamento">
<meta property="og:description" content="Descrição para redes sociais">
<meta property="og:image" content="URL da imagem para compartilhamento">
<meta property="og:url" content="https://seu-site.com">
```

---

## 📊 Análise & Performance

### Google Lighthouse

1. Abra DevTools (F12)
2. Vá em "Lighthouse"
3. Clique "Analyze page load"
4. Veja os scores (100 é perfeito)

### Google PageSpeed Insights

Acesse: https://pagespeed.web.dev/

Cole a URL do seu site e veja sugestões de otimização.

---

## 🔐 Segurança

### HTTPS
- Vercel, Netlify, GitHub Pages: **Automático com SSL**
- Servidor próprio: Use [Let's Encrypt](https://letsencrypt.org/)

### Headers de Segurança

Adicione ao `vite.config.js`:

```javascript
export default {
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },
}
```

---

## 📈 Monitoramento

### Ferramentas Recomendadas

- **Vercel Analytics**: Integrado automaticamente
- **Google Analytics**: Adicione em `index.html`
- **Sentry**: Para rastrear erros
- **UptimeRobot**: Monitore se o site está online

### Adicionar Google Analytics

```html
<!-- Em index.html, antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Troque `GA_MEASUREMENT_ID` pelo seu ID do Google Analytics.

---

## 🔄 CI/CD (Integração Contínua)

### GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v2
        with:
          name: dist
          path: dist
```

---

## 🎯 Domínio Customizado

### Registrar Domínio

1. Escolha registrador: Namecheap, GoDaddy, etc.
2. Registre seu domínio
3. Configure os DNS apontando para sua plataforma:
   - **Vercel**: Apontamento automático
   - **Netlify**: Via dashboard
   - **GitHub Pages**: CNAME file
   - **Servidor próprio**: Aponte para IP do servidor

---

## 🐛 Troubleshooting

### Build falha
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Página branca após deploy
- Verificar console (F12)
- Verificar Network tab para 404s
- Confirmar build foi bem-sucedido

### Links quebrados
- Verificar caminhos relativos vs. absolutos
- Testar em produção antes de publicar

---

## 💾 Backup & Versionamento

```bash
# Crie tags para releases
git tag -a v1.0.0 -m "Versão 1.0 - Deploy inicial"
git push origin v1.0.0

# Crie branches para features
git checkout -b feature/nova-secao
# ... faça mudanças
git push origin feature/nova-secao
```

---

## 📞 Suporte & Recursos

- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Best Practices](https://react.dev/learn)
- [Web Vitals](https://web.dev/vitals/)

---

**Dica**: Deploy está pronto quando:
✅ Sem erros no console
✅ Sem 404s em Network
✅ Todos os links funcionam
✅ Responsivo em mobile
✅ Imagens carregam rápido

Seu site pronto para o mundo! 🌍
