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
      <div style="position: absolute; top: 100px; right: 50px">
        <h1>Carregando...</h1>
      </div>
    `,
  },
  errors: {
    customError: `
      <div style="position: absolute; top: 100px; right: 50px">
        <h1>Ops... Algo deu errado!</h1>
      </div>
    `
  }
}

const routes = constructRoutes(microfrontendLayout, data);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

start();