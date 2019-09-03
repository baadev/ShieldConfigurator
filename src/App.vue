<template>
  <div id="nav">
    <DevHeader></DevHeader>
    <a href="/dev">Dev</a>
    <router-view name="page-content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'PageContent'
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
