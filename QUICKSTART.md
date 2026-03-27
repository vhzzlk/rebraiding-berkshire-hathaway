# ⚡ QUICKSTART — Berkshire Redesign

## 1️⃣ Instalação Rápida (3 passos)

```bash
# Passo 1: Entre na pasta do projeto
cd berkshire-redesign

# Passo 2: Instale as dependências
npm install

# Passo 3: Inicie o projeto
npm run dev
```

✅ Pronto! O site estará em → **http://localhost:5173**

---

## 🗺️ Seções do Site

| Seção | Descrição |
|-------|-----------|
| **Navbar** | Menu responsivo com blur no scroll |
| **Hero** | Seção principal com gráfico e estatísticas |
| **About** | Sobre a empresa (4 feature cards) |
| **Investments** | Portfolio com gráfico em pizza animado |
| **Shareholders** | Recursos para acionistas (4 cards + CTA) |
| **Reports** | Relatórios financeiros com filtro por ano |
| **Footer** | Rodapé com links e redes sociais |

---

## 🏗️ Build para Produção

```bash
npm run build
```

Arquivos otimizados em `/dist` — prontos para deploy.

---

## 🔍 Verificar Qualidade do Código

```bash
npm run lint
```

---

## 📱 Testar Responsividade

1. Abra DevTools no navegador → **F12**
2. Clique no ícone de dispositivo móvel (ou **Ctrl + Shift + M**)
3. Teste nos breakpoints: 375px (mobile), 768px (tablet), 1200px+ (desktop)

---

## 🎯 Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | HTML principal + importação das fontes |
| `src/App.jsx` | Componente raiz — orquestra todas as seções |
| `src/index.css` | Estilos globais: variáveis, reset, animações |
| `src/components/` | Um diretório por componente (JSX + CSS) |

---

## 🚨 Se Não Funcionar

```powershell
# Windows — Limpe o cache e reinstale
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
npm run dev
```

```bash
# Mac / Linux
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 💡 Dicas Rápidas

- Cores → edite as variáveis CSS em `src/index.css` (seção `:root`)
- Conteúdo → edite diretamente nos arquivos `.jsx` de cada componente
- Animações → edite `@keyframes` em `src/index.css` ou use Framer Motion
- Debug → use DevTools (F12) para inspecionar e testar ao vivo

---

**Pré-requisitos**: Node.js 18+ · npm 9+

Divirta-se criando! 🚀
