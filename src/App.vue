<template>
  <div id="nav">
    <router-link :to="{ path: '/' }">/</router-link>
    <router-view class="view" name="pages"></router-view>
  </div>
</template>

<script>
import DevHeader from './views/DevHeader.vue'

export default {
  name
}
</script>

<style>
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
