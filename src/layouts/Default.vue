<template>
  <div class="layout">
    <header class="header">
        <g-link to="/"><g-image src="~/assets/img/Kosmonaut-Logo-Color@2x.png" class="header-logo" /></g-link>
      <nav class="nav">
        <div class="header-nav">
          <div class="header-nav-span"/>
        </div>
      </nav>
    </header>
      <div class="menu">
        <div class="menu-nav">
          <g-image src="/uploads/svg/arrow-button_link-white.svg" class="menu-nav-close" />
        </div>
        <div class="menu-list">
          <li class="menu-li">Expertise</li>
          <li class="menu-li">Expertise</li>
          <li class="menu-li">Expertise</li>
          <li class="menu-li">Expertise</li>
          <li class="menu-li">Expertise</li>
          <li class="menu-li">Expertise</li>
          <li class="menu-li">Expertise</li>
        </div>
        <div class="menu-footer">
          <p class="size--sm">
            <g-link href="/impressum">Impressum</g-link>
            <g-link href="/impressum">Datenschutz</g-link>
            <g-link href="/impressum">AGB</g-link>
          </p>
        </div>
    </div>

    <slot/>
    <div class="footer">
      <h3>Sie haben ein Projekt dollar sans de Sola connar?</h3>
      <p class="label">Kontaktieren</p>
      <BulletList title="office" v-bind:options="['Kosmonaut GmbH Co. KG', 'Nickelstraße Nr. 1a', '33378 Rheda-Wiedenbrück']" />
      <BulletList title="sitemap" v-bind:options="['Leistungen', 'Cases', 'Kontakt', 'AGB', 'Datenschutz']" />
      <p class="label">Kosmonaut im Netz</p>
    </div>
  </div>

</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script type="text/javascript">
import BulletList from '~/components/BulletList.vue'
    setTimeout(() => {
      document.getElementsByClassName('menu-nav-close')[0].addEventListener('click', function() {
        document.getElementsByClassName('menu')[0].style.width = "0px";
      });
      document.getElementsByClassName('header-nav')[0].addEventListener('click', () => {
        document.getElementsByClassName('menu')[0].style.width = "680px";
      })
  }, 200);
  export default {
    components: {
      BulletList
    }
  }
</script>

<style>
body {
  --white: #ffffff;
  --light-gray: #f5f5f5;
  --midnight: #2D374B;
  --copper: #B08770;
  --dark: #4C4E56;
  --gray: #A4A6A8;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}


/*################################################*/
/*###############------------#####################*/
/*###############----MAIN----#####################*/
/*###############------------#####################*/
/*################################################*/
/*################################################*/

.layout {
  display: grid;
  grid-template-columns: repeat(12, 88px);
  grid-template-rows: 104px repeat(150, auto);
  grid-column-gap: 32px;
  grid-row-gap: 8px;
  padding: 0;
}

.layout:first-child::before {
  content: '';
  grid-row: 1;
}

/*################################################*/
/*###############------------#####################*/
/*###############---FOOTER---#####################*/
/*###############------------#####################*/
/*################################################*/
/*################################################*/

.footer {
  grid-column: 1 / 13;
  
}


/*################################################*/
/*###############------------#####################*/
/*###############---HEADER---#####################*/
/*###############------------#####################*/
/*################################################*/
/*################################################*/

.header-nav {
  width: 26px;
  height: 26px;
  margin-right: 96px;
}

.header-nav-span::after {
  bottom: -10px;
  right: 0;
  width: 80%;
}

.header {
  display: flex;
  left: 0;
  top: 0;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  z-index: 5;
  width: 100%;
  background: var(--white);
  height: 104px;
}

.header a {
  margin-left: 96px;
}

.header-nav-span {
  width: 26px;
  height: 5px;
  background: var(--dark);
  margin-top: 15px;
  position: relative;
}

.header-nav-span::before, .header-nav-span::after {
  position: absolute;
  background: var(--dark);
  content: '';
  display: block;
  width: 100%;
  height: 5px;
}

.header-nav-span::before {
  top: -10px;
  left: 0;
}

/*################################################*/
/*###############------------#####################*/
/*###############----MENU----#####################*/
/*###############------------#####################*/
/*################################################*/
/*################################################*/

.menu-nav {
  height: 104px;
}

.menu-nav-close {
  float: right;
  margin: 43px 83px 0 0;
  cursor: pointer;
}

.menu-li {
  color: var(--white);
  margin-bottom: 8px;
  cursor: pointer;
  transition-duration: 0.2s;
}

.menu-li:hover {
  color: var(--copper);
}

.menu-footer {
  position: absolute;
  bottom: 0;
  padding: 24px;
}

.menu-footer a {
  margin-right: 25px;
  color: var(--white);
  opacity: 0.75;
}

.menu-list {
  list-style-type: none;
  padding-left: 96px;
  padding-top: 65px;
}

.menu {
  width: 680px;
  height: 100%;
  position: fixed;
  right: 0;
  z-index: 100;
  background: var(--midnight);
  transition-duration: 0.5s;
  overflow: hidden;
}

/*################################################*/
/*###############------------#####################*/
/*###############----TYPO----#####################*/
/*###############------------#####################*/
/*################################################*/
/*################################################*/


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
    color: var(--dark);
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
    color: var(--gray);
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

  h1, li.menu-li {
    font-size: 56px;
    line-height: 64px;
  }

  h1 {
    color: var(--midnight);
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
    color: var(--gray);
    letter-spacing: 1px;
  }
}

.label {
  text-transform: uppercase;
}

h1, h2, h3 {
  color: var(--midnight);
}

h1, h2, p.label, button, a, li.menu-li {
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
  text-decoration: none;
}

li {
  color: var(--dark);
  font-size: 24px;
  line-height: 32px;
}
</style>
