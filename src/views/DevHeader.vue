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
    <Page />
  </div>
</template>

<script>

export default {
  name: "DevHeader"
};
</script>