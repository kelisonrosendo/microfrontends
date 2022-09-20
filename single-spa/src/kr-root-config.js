import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

window.addEventListener("vue-menu/showMenu", ({ detail }) => {
  let elem = document.getElementsByClassName("grid")[0];

  if (detail.value) {
    elem.style.gridTemplateAreas = '"nav nav" "aside main"';
  } else {
    elem.style.gridTemplateAreas = '"nav nav" "main main"';
  }
});

const data = {
  loaders: {
    customLoader: '<h2>Carregando...</h2>',
  },
  errors: {
    customError: '<h2>Ops... Algo deu errado!</h2>',
  },
}

const routes = constructRoutes(microfrontendLayout, data);

const applications = constructApplications({
  routes,
  loadApp: async ({ name }) => await System.import(name),
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

start();