// Code to initialize the Auth0 SDK and Vue app
import { createApp } from "vue";
import App from "./App.vue";
//import router from "./router";
import { createAuth0 } from "@auth0/auth0-spa-js";

createApp(App)
  .use(
    createAuth0({
      domain: "dev-7tv7wp8kdujo6pmq.us.auth0.com",
      clientId: "klbX6xuvUxHqkWNhQbIqyIrQArC4eWBj",
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    })
  )
  .mount("#app");
