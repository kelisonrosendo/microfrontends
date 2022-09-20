import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const data = {
  loaders: {
    customLoader: `
      <div style="padding: 10px;">
        <h1>Carregando...</h1>
      </div>
    `,
  },
  errors: {
    customError: `
      <div style="padding: 10px;">
        <h1>Ops... Algo deu errado!</h1>
      </div>
    `
  }
}



// const routes = constructRoutes({
//   mode: "history",
//   redirects: { '/': '/vue-main' },
//   routes: [
//     {
//       type: 'route', path: 'vue-main', routes: [
//         { type: 'application', name: '@kr/vue-header' },
//         { type: 'application', name: '@kr/vue-menu' },
//         { type: 'application', name: '@kr/vue-main', loader: customLoader }
//       ]
//     },
//     {
//       type: 'route', path: 'react-main', routes: [
//         { type: 'application', name: '@kr/vue-header' },
//         { type: 'application', name: '@kr/vue-menu' },
//         { type: 'application', name: '@kr/react-main' }
//       ]
//     },
//     {
//       type: 'route', path: 'angular-main', routes: [
//         { type: 'application', name: '@kr/vue-header' },
//         { type: 'application', name: '@kr/vue-menu' },
//         { type: 'application', name: '@kr/angular-main' }
//       ]
//     }
//   ]
// })




const routes = constructRoutes(microfrontendLayout, data);

const applications = constructApplications({
  routes,
  loadApp: async ({ name }) => await System.import(name),
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

start();