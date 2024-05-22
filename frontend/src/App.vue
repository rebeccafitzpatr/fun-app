<template>
  <div id="app">
    <nav>
      <div id="nav">
        <router-link to="/">Home </router-link>|
        <router-link to="/about">About</router-link> |
        <div v-if="!$auth.loading">
          |
          <button @click="login" v-if="!$auth.isAuthenticated">'Login'</button>
          |
          <button @click="loginPopup" v-if="!$auth.isAuthenticated">
            Login Popup
          </button>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-spa-js";

export default {
  setup() {
    const { loginWithRedirect } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 5px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
