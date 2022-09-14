### ✍ Projeto

Testando a criação e utilização de Microfrontends VueJs utilizando a single-spa

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Single-Spa](https://single-spa.js.org/)
- [Vue 2](https://v2.vuejs.org/)

### 🎮 Single-Spa (orquestrador)

**Para rodar o projeto**
```bash
# Instalar as dependências
npm i

# Executar o projeto
npm start
```

**Para registrar um novo microfrontend**
```bash
# Ex. de import do bundle (single-spa/src/index.ejs)
{
  "imports": {
    "@kr/vue-single": "//localhost:9001/js/app.js"
  }
}

# Ex. de registro de uma nova aplicação (single-spa/src/kr-root-config.js)
registerApplication({
  name: "@kr/vue-single",
  app: () => System.import("@kr/vue-single"),
  activeWhen: (location) => location.pathname === '/vue-single',
});
```

**Config webpack necessária em cada microfrontend**
```bash
# Inserir no arquivo: vue.config.js
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
})
```