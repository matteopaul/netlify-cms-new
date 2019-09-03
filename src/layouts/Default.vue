<template>
    <div class="layout">
        <Header></Header>
        <main>
            <Stage headline="Headline" buttonText="Button" buttonLink="#" text="Text" theme="dark" backgroundImage="/assets/img/asset-teaser-tprojects-luckybike.jpg" textPosition="topleft"></Stage>
            <Stage headline="Headline" buttonText="Button" buttonLink="#" text="Text" theme="dark" backgroundImage="/assets/img/asset-teaser-tprojects-luckybike.jpg" textPosition="middleleft"></Stage>
            <Stage headline="Headline" buttonText="Button" buttonLink="#" text="Text" theme="light" backgroundImage="/assets/img/asset-teaser-tprojects-luckybike.jpg" textPosition="bottomleft"></Stage>
            <Categorybanner headline="Headline" text="Text" imageType="background" image="/assets/img/asset-teaser-tprojects-luckybike.jpg"></Categorybanner>
            <Categorybanner headline="Headline" text="Text" imageType="inline" image="/assets/img/asset-teaser-tprojects-luckybike.jpg"></Categorybanner>
            <Categorybanner headline="Headline" text="Text" imageType="inline"></Categorybanner>
            <slot id="main-content"/>
        </main>
        <Footer></Footer>
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
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';
import Categorybanner from '~/components/Categorybanner.vue';
import Stage from '~/components/Stage.vue';

export default {
  components: {
    Header,
    Footer,
    Stage,
    Categorybanner
  },
  mounted () {
  }
};
</script>

<style lang="scss">
    @import '~/assets/sass/normalize.scss';
    @import '~/assets/sass/base.scss';

    body {
        --white: #ffffff;
        --light-gray: #f5f5f5;
        --midnight: #2D374B;
        --copper: #B08770;
        --dark: #4C4E56;
        --gray: #A4A6A8;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }

    /*################################################*/
    /*###############------------#####################*/
    /*###############----FORMS----####################*/
    /*###############------------#####################*/
    /*################################################*/
    /*################################################*/

    button {
        width: 192px;
        height: 48px;
        grid-row: span 3;
        grid-column: span 2;
        background: var(--copper);
        color: var(--white);
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 14px;
    }

    button:focus {
        outline: none;
    }


    /*################################################*/
    /*###############------------#####################*/
    /*###############----MAIN----#####################*/
    /*###############------------#####################*/
    /*################################################*/
    /*################################################*/

    .layout > main {
        /*
        display: grid;
        grid-auto-rows: minmax(8px, auto);
        grid-column-gap: 32px;
        grid-row-gap: 8px;
        padding: 0;

        &:first-child::before {
            content: '';
            height: 96px;
            grid-column: 1 / 13;
            grid-row: span 6;
        }
         */
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
            /*
            width: 328px;
            margin: 0 auto;
            grid-template-columns: repeat(2, 88px);
             */
        }
    }

    /*############---------MOBILE AND TABLET VIEW----------#################*/
    @media only screen and (max-width: 1024px) {
    }

    /*################-------------iPAD VIEW------------##############*/
    @media only screen and (min-width: 768px) {
        .layout {
            /*
            width: 720px;
            margin: 0 auto;
             */
        }
    }

    /*###############-----------DESKTOP VIEW-----------###############*/
    @media only screen and (min-width: 1024px) {
        .layout {
            /*
            width: 1408px;
            margin: 0 auto;
            grid-template-columns: repeat(12, 88px);
             */
        }
    }

</style>
