import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
    activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@kr/vue-single",
  app: () => System.import("@kr/vue-single"),
  activeWhen: (location) => location.pathname === '/vue-single',
});

registerApplication({
  name: "@kr/vue-header",
  app: () => System.import("@kr/vue-header"),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
