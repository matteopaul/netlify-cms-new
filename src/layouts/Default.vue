<template>
    <div class="layout">
        <Header></Header>
        <main>
            <Stage headline="Headline" buttonText="Button" buttonLink="#" text="Text" theme="dark"
                   backgroundImage="/mockdata/stage.jpg" textPosition="topleft"></Stage>
            <Stage headline="Headline" buttonText="Button" buttonLink="#" text="Text" theme="dark"
                   backgroundImage="/mockdata/stage.jpg" textPosition="middleleft"></Stage>
            <Stage headline="Headline" buttonText="Button" buttonLink="#" text="Text" theme="light"
                   backgroundImage="/mockdata/stage.jpg" textPosition="bottomleft"></Stage>
            <Categorybanner headline="Headline" text="Text" imageType="background"
                            image="/mockdata/stage.jpg"></Categorybanner>
            <Categorybanner headline="Headline" text="Text" imageType="inline"
                            image="/mockdata/stage.jpg"></Categorybanner>
            <Categorybanner headline="Headline" text="Text" imageType="inline"></Categorybanner>
            <Quote text="Text" image="/mockdata/stage.jpg" name="Name" position="Position"></Quote>

            <TextandiconList columns="4" align="center">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
            </TextandiconList>
            <TextandiconList columns="4">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
            </TextandiconList>
            <TextandiconList columns="4">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
                <Textandicon image="/mockdata/stage-vertical.png" layout="vertical"></Textandicon>
            </TextandiconList>
            <TextandiconList columns="4">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
                <Textandicon image="/mockdata/stage-vertical.png" layout="vertical"></Textandicon>
                <Textandicon image="/mockdata/stage-vertical.png" layout="vertical"></Textandicon>
            </TextandiconList>

            <TextandiconList columns="3">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
            </TextandiconList>
            <TextandiconList columns="3">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
                <Textandicon image="/mockdata/stage-vertical.png" layout="vertical"></Textandicon>
            </TextandiconList>
            <TextandiconList columns="3">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
                <Textandicon image="/mockdata/stage-vertical.png" layout="vertical"></Textandicon>
                <Textandicon image="/mockdata/stage-vertical.png" layout="vertical"></Textandicon>
            </TextandiconList>

            <TextandiconList columns="2">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
            </TextandiconList>
            <TextandiconList columns="2">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
                <Textandicon image="/mockdata/stage-vertical.png" layout="vertical"></Textandicon>
            </TextandiconList>
            <TextandiconList columns="2">
                <Textandicon image="/mockdata/stage.jpg" layout="vertical"></Textandicon>
                <Textandicon image="/mockdata/stage-vertical.png" layout="vertical"></Textandicon>
                <Textandicon image="/mockdata/stage-vertical.png" layout="vertical"></Textandicon>
            </TextandiconList>
            <Imagegallery>
                <Imagegalleryitem image="/mockdata/stage-vertical.png"></Imagegalleryitem>
            </Imagegallery>
            <Imagegallery>
                <Imagegalleryitem image="/mockdata/stage-vertical.png"></Imagegalleryitem>
                <Imagegalleryitem image="/mockdata/stage-vertical.png"></Imagegalleryitem>
            </Imagegallery>
            <Contentteaserlist>
                <Contentteaser image="/mockdata/stage-vertical.png" imageformat="landscape"></Contentteaser>
                <Contentteaser image="/mockdata/stage-vertical.png" imageformat="portrait"></Contentteaser>
                <Contentteaser image="/mockdata/stage-vertical.png" imageformat="square"></Contentteaser>
            </Contentteaserlist>

            <TextandimageList layout="vertical">
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
            </TextandimageList>

            <TextandimageList layout="horizontal">
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
            </TextandimageList>

            <TextandimageList layout="vertical">
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
            </TextandimageList>

            <TextandimageList layout="horizontal">
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
            </TextandimageList>

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
import Quote from '~/components/Quote.vue';
import TextandiconList from '~/components/TextandiconList.vue';
import Textandicon from '~/components/Textandicon.vue';
import Imagegallery from '~/components/Imagegallery.vue';
import Imagegalleryitem from '~/components/Imagegalleryitem.vue';
import Contentteaserlist from '~/components/Contentteaserlist.vue';
import Contentteaser from '~/components/Contentteaser.vue';
import TextandimageList from '~/components/TextandimageList.vue';
import Textandimage from '~/components/Textandimage.vue';
import RQ_090 from '~/components/RQ-090.vue';

window.onscroll = function (e) {
  updateViewport();
};

function updateViewport () {
  const elements = document.querySelectorAll('[data-srcset]');
  // console.log(elements);
  for (let i in elements) {
    // let bounding = elements[i].getBoundingClientRect();
    // console.log(bounding);
    // console.log();
    // console.log(window.scrollY + document.documentElement.clientHeight);
    // if (bounding.y >= window.scrollY && bounding.y < (window.scrollY + document.documentElement.clientHeight)) {
    //   console.log('inside');
    // } else {
    //   console.log('not inside');
    // }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var lazyImages = document.querySelectorAll('[data-src]');
});

export default {
  components: {
    Header,
    Footer,
    Stage,
    Quote,
    Categorybanner,
    TextandiconList,
    Textandicon,
    Imagegallery,
    Imagegalleryitem,
    Contentteaserlist,
    Contentteaser,
    TextandimageList,
    Textandimage,
    RQ_090
  },
  mounted () {

    document.getElementsByClassName('menu-nav-close')[0].addEventListener('click', function () {
      document.getElementsByClassName('menu')[0].style.width = '0px';
    });
    document.getElementsByClassName('header-nav')[0].addEventListener('click', () => {
      document.getElementsByClassName('menu')[0].style.width = '680px';

    });
    for (let i = 0; i < document.getElementsByClassName('menu-li').length; i++) {
      document.getElementsByClassName('menu-li')[i].addEventListener('click', () => {
        document.getElementsByClassName('menu')[0].style.width = '0px';
        updateViewport();
      });
    }
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
        > * + * {
            margin-top: 100px;
        }
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
