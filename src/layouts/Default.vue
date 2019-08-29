<template>
    <div class="layout">
        <Header></Header>
        <main>
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

export default {
  components: {
    Header,
    Footer
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
        color: none;
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
            grid-template-columns: repeat(2, 88px);
        }
    }

    /*############---------MOBILE AND TABLET VIEW----------#################*/
    @media only screen and (max-width: 1024px) {
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
            grid-template-columns: repeat(12, 88px);
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
