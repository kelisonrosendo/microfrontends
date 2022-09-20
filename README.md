### ✍ Projeto

Criação de um workspace para utilização de microfrontends utilizando single-spa.

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Single-Spa](https://single-spa.js.org/)
- [Vue 2.6.14](https://v2.vuejs.org/) e [Vuetify](https://vuetifyjs.com/)
- [React 17.0.2](https://pt-br.reactjs.org/)
- [Angular 14.2.0](https://angular.io/)

### 🎮 Rodar o projeto

**single-spa (orquestrador)**
```bash
# Instalar as dependências
npm i

# Executar o projeto
npm start
```

**vue-header (header compartilhado entre as aplicações)**
```bash
# Instalar as dependências
npm i

# Executar o projeto na porta definida no single-spa. Ex.: 9001
npm run serve -- --port 9001
```

**vue-menu (menu compartilhado entre as aplicações)**
```bash
# Instalar as dependências
npm i

# Executar o projeto na porta definida no single-spa. Ex.: 9002
npm run serve -- --port 9002
```

**vue-main (exemplo de uma aplicação utilizando Vue)**
```bash
# Instalar as dependências
npm i

# Executar o projeto na porta definida no single-spa. Ex.: 9003
npm run serve -- --port 9003
```

**react-main (exemplo de uma aplicação utilizando React)**
```bash
# Instalar as dependências
npm i

# Executar o projeto na porta definida no single-spa. Ex.: 9004
npm start -- --port 9004
```

**angular-main (exemplo de uma aplicação utilizando Angular)**
```bash
# Instalar as dependências
npm i

# Executar o projeto na porta definida no single-spa. Ex.: 9005
npm run serve:single-spa:angular-main -- --port 9005
```

### 🎓 Imports e configs

**Para registrar um novo microfrontend**
```bash
# Ex. de import do bundle (single-spa/src/index.ejs)
{
  "imports": {
    "@kr/root-config": "//localhost:9000/kr-root-config.js",
    "@kr/vue-header": "//localhost:9001/js/kr-vue-header.js",
    "@kr/vue-menu": "//localhost:9002/js/kr-vue-menu.js",
    "@kr/vue-main": "//localhost:9003/js/kr-vue-main.js",
    "@kr/react-main": "//localhost:9004/kr-react-main.js",
    "@kr/angular-main": "//localhost:9005/main.js"
  }
}
```

**Import necessário para microfrontends Angular**
```bash
# Adicionar no arquivo: index.ejs
<script src="https://cdn.jsdelivr.net/npm/zone.js@0.10.3/dist/zone.min.js"></script>
```

**Config webpack necessária para microfrontends Vue**
```bash
# Adicionar no arquivo: vue.config.js
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: 'js/kr-vue-main.js'
    },
  },
})
```