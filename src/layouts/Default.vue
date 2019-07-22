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
  --midnight: #2D374B;
  --copper: #B08770;
  --dark: #4C4E56;
  --gray: #A4A6A8;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  display: grid;
  grid-template-columns: repeat(12, 88px);
  grid-template-rows: repeat(150, auto);
  grid-column-gap: 32px;
  grid-row-gap: 8px;
  padding: 0;
}

.header {
  grid-column: 3 / 11;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  height: 80px;
  width: 100%;
}

.nav__link {
  margin-left: 20px;
}
@font-face {
  font-family: "Gotham-Medium";
  src: url("../assets/Gotham-Medium.ttf");
}

@font-face {
  font-family: "Gotham-Medium-Italic";
  src: url("../assets/Gotham-MediumItalic.ttf");
}

@font-face {
  font-family: "Sentinel-Book";
  src: url("../assets/Sentinel-Book.otf");
  font-weight: normal;
}

/*############---------MOBILE VIEW----------#################*/
@media only screen and (max-width: 768px) {
  .layout {
    width: 328px;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 1024px;) {
  h1 {
    font-size: 44px;
    color: #2D374B;
    line-height: 48px;
  }

  h2 {
    font-size: 32px;
    line-height: 40px;
  }

  h3 {
    font-size: 24px;
    line-height: 32px;
  }

  p.size--lg {
    font-size: 19px;
    line-height: 26px;
  }

  p.size--md {
    font-size: 17px;
    line-height: 24px;
  }

  p.size--sm {
    font-size: 14px;
    line-height: 24px;
    text-align: right;
  }

  p.label {
    font-size: 14px;
    color: #A4A6A8;
    letter-spacing: 1px;
  }
}


/*################-------------iPAD VIEW------------##############*/
@media only screen and (min-width: 768px) {
  .layout {
    width: 720px;
    margin: 0 auto;
  }
}

/*###############-----------DESKTOP VIEW-----------###############*/
@media only screen and (min-width: 1024px) {

  .layout {
    width: 1408px;
    margin: 0 auto;
  }

  h1 {
    font-size: 56px;
    color: #2D374B;
    line-height: 64px;
  }

  h2 {
    font-size: 36px;
    line-height: 48px;
  }

  h3 {
    font-size: 28px;
    line-height: 40px;
  }


  p.size--lg {
    font-size: 24px;
    line-height: 32px;
  }

  p.size--md {
    font-size: 22px;
    line-height: 32px;
  }

  p.size--sm {
    font-size: 18px;
    line-height: 24px;
  }

  p.label {
    font-size: 14px;
    color: #A4A6A8;
    letter-spacing: 1px;
  }
}



h1, h2, h3 {
  color: var(--midnight);
}

h1, h2, p.label, button {
  font-family: "Gotham-Medium";
}

h3, p {
  font-family: "Sentinel-Book", sans-serif;
}

p {
  color: var(--dark);
}

a {
  color: var(--copper);
}
</style>
