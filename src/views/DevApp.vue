<template>
  <div>
    <header class="globalheader">
      <div
        id="header-container"
        class="container extendednav"
        style="padding-top: 38px;"
      >
        <h2>
          <a href="/"><img
            id="logo"
            src="https://z-uno.z-wave.me/files/zuno_logo_fin_200.png"
            height="100"
            alt="Z-Uno"
            style="margin-top: -38px;"
          ></a>
        </h2>
        <ul class="pages">
          <li><a href="/technical">Z-Uno</a></li>
          <li class="selected">
            <a href="/shield">Shield</a>
          </li>
          <li><a href="/module">Module</a></li>
          <li><a href="/buy">Where to buy</a></li>
          <li><a href="/getting-started">Getting Started</a></li>
          <li><a href="/reference">Reference</a></li>
          <li><a href="/z-wave">Z-Wave</a></li>
          <li><a href="/examples">Examples</a></li>
          <li><a href="/forum">Forum</a></li>
          <li><a href="/news">News</a></li>
        </ul>
        <div class="clear-both"></div>
      </div>
    </header>
    <main class="maincontent" role="main">
      <div class="container">
        <div class="page">
          <div id="page">
            <article class="page-content" itemtype="http://schema.org/WebPage">
              
              <Configurator></Configurator>
            
            </article>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Configurator from "@/views/Configurator.vue";
// document.getElementsByTagName('body')[0].classList.add('color_scheme_green')

  export default {
    name: "DevApp",
    components: { Configurator }
  }
</script>

<style scoped>
  @import url("https://z-uno.z-wave.me/wa-data/public/site/themes/z-uno/default.css");
</style>
