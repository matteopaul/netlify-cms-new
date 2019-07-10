<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
@font-face {
  font-family: "Gotham";
  src: url("../assets/Gotham-Bold.otf");
  font-weight: bold;
}

@font-face {
  font-family: "Gotham";
  src: url("../assets/Gotham-BoldItalic.otf");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "Sentinel-Book";
  src: url("../assets/Sentinel-Book.otf");
}

@font-face {
  font-family: "Sentinel-Book";
  src: url("../assets/Sentinel-BookItalic.otf");
  font-style: italic;
}

@font-face {
  font-family: "Sentinel-Book";
  src: url("../assets/Sentinel-BoldItalic.otf");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "Sentinel-Book";
  src: url("../assets/Sentinel-Bold.otf");
  font-weight: bold;
}

h1, h2 {
  font-family: "Gotham";
  font-weight: bold;
}

h3, p {
  font-family: "Sentiel-Book";
}
</style>
