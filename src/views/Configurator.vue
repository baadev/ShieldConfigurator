<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/dev">/dev</router-link></li>
    </ul>
    
    
    <!-- <router-view name="tabs"></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Configurator"
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
