### ✍ Projeto

Criação e utilização de Microfrontends VueJs utilizando Single-Spa

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Single-Spa](https://single-spa.js.org/)
- [Vue 2](https://v2.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/)

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

**vue-main (home - conteúdo central)**
```bash
# Instalar as dependências
npm i

# Executar o projeto na porta definida no single-spa. Ex.: 9003
npm run serve -- --port 9003
```

**vue-single (exemplo de uma aplicação básica qualquer)**
```bash
# Instalar as dependências
npm i

# Executar o projeto na porta definida no single-spa. Ex.: 9004
npm run serve -- --port 9004
```

**Para registrar um novo microfrontend**
```bash
# Ex. de import do bundle (single-spa/src/index.ejs)
{
  "imports": {
    "@kr/vue-header": "//localhost:9001/js/kr-vue-header.js"
  }
}
```

**Config webpack necessária em cada microfrontend**
```bash
# Adicionar no arquivo: vue.config.js
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: 'js/kr-vue-single.js'
    },
  },
})
```