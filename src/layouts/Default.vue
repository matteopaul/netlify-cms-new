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
                <Textandicon image="/mockdata/stage.jpg" layout="vertical" title="t_a_i" text="textandicon" subtitle="description" linkText="hier entlang" link="/"></Textandicon>
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
                <Contentteaser image="/mockdata/stage-vertical.png" imageformat="square"></Contentteaser>
                <Contentteaser image="/mockdata/stage-vertical.png" imageformat="portrait"></Contentteaser>
                <Contentteaser image="/mockdata/stage-vertical.png" imageformat="landscape"></Contentteaser>
            </Contentteaserlist>

            <TextandimageList>
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
            </TextandimageList>

            <TextandimageList>
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
            </TextandimageList>

            <TextandimageList>
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
                <Textandimage image="/mockdata/stage-vertical.png"></Textandimage>
            </TextandimageList>

            <Richtext>
                <h1>Headline H1</h1>
                <h2>Headline H2</h2>
                <h3>Headline H3</h3>
                <p>Paragraph regular: Lorem <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p class="small">Paragraph small: <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p class="large">Paragraph large: <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p class="label">Paragraph label: <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ul>
                <ol>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ol>
            </Richtext>

            <Richtext columns="2" background=true>
                <h1>Headline H1</h1>
                <h2>Headline H2</h2>
                <h3>Headline H3</h3>
                <p>Paragraph regular: Lorem <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p class="small">Paragraph small: <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p class="large">Paragraph large: <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p class="label">Paragraph label: <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ul>
                <ol>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ol>
            </Richtext>

            <Richtext columns="3">
                <h1>Headline H1</h1>
                <h2>Headline H2</h2>
                <h3>Headline H3</h3>
                <p>Paragraph regular: Lorem <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p class="small">Paragraph small: <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p class="large">Paragraph large: <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <p class="label">Paragraph label: <strong>ipsum</strong> <i>dolor</i> <del>sit</del> <u>amet</u>, <a href="#">consectetur</a> <sub>adipiscing</sub> <sup>elit</sup>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ul>
                <ol>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ol>
            </Richtext>

            <Cardlist>
                <Quotecard text="Text" image="/mockdata/stage.jpg" name="Name" position="Position" theme="gray"></Quotecard>
                <Quotecard text="Text" image="/mockdata/stage.jpg" name="Name" position="Position" theme="copper"></Quotecard>
                <Quotecard text="Text" image="/mockdata/stage.jpg" name="Name" position="Position" theme="white"></Quotecard>
            </Cardlist>

            <Cardlist>
                <Avatarcard image="/mockdata/stage.jpg" name="Name" position="Position" phone="123" theme="gray"></Avatarcard>
                <Avatarcard image="/mockdata/stage.jpg" name="Name" position="Position" phone="123" theme="copper"></Avatarcard>
                <Avatarcard image="/mockdata/stage.jpg" name="Name" position="Position" phone="123" theme="white"></Avatarcard>
            </Cardlist>

            <Cardlist>
                <Imagecard image="/mockdata/stage.jpg" headline="Headline" subheadline="Subheadline" linktext="Link" linkurl="#" theme="gray"></Imagecard>
                <Imagecard image="/mockdata/stage.jpg" headline="Headline" subheadline="Subheadline" linktext="Link" linkurl="#" theme="copper"></Imagecard>
                <Imagecard image="/mockdata/stage.jpg" headline="Headline" subheadline="Subheadline" linktext="Link" linkurl="#" theme="white"></Imagecard>
            </Cardlist>

            <Cardlist>
                <Textcard icon="/mockdata/stage.jpg" headline="Headline" subheadline="Subheadline" theme="gray">
                    <p slot="text">1</p>
                    <p slot="text">2</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <dl>
                        <dt>Label</dt>
                        <dd>Description</dd>
                        <dd>Description</dd>
                        <dt>Label</dt>
                        <dd>Description</dd>
                    </dl>
                </Textcard>
                <Textcard icon="/mockdata/stage.jpg" headline="Headline" subheadline="Subheadline" theme="copper">
                    <p slot="text">1</p>
                    <p slot="text">2</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <dl>
                        <dt>Label</dt>
                        <dd>Description</dd>
                        <dd>Description</dd>
                        <dt>Label</dt>
                        <dd>Description</dd>
                    </dl>
                </Textcard>
                <Textcard icon="/mockdata/stage.jpg" headline="Headline" subheadline="Subheadline" theme="white">
                    <p slot="text">1</p>
                    <p slot="text">2</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <dl>
                        <dt>Label</dt>
                        <dd>Description</dd>
                        <dd>Description</dd>
                        <dt>Label</dt>
                        <dd>Description</dd>
                    </dl>
                </Textcard>
            </Cardlist> -->

            <PromotionBanner title="Expertise" src="/mockdata/stage.jpg" background=true overlay=false align="left">
              <div class="kmt-promotionbanner__list">
                <p class="label">Liste 1</p>
                <ul>
                    <li>1asdasdasdadlakjdsalk</li>
                    <li>2</li>
                </ul>
              </div>

              <div class="kmt-promotionbanner__list">
                <p class="label">Liste 2</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
              </div>
              <g-link to="/">Mehr Details</g-link>
            </PromotionBanner>

            <PromotionBanner title="Expertise" src="/mockdata/stage.jpg" background=false overlay=false align="left">
              <div class="kmt-promotionbanner__list">
                <p class="label">Liste 1</p>
                <ul>
                    <li>1asdasdasdadlakjdsalk</li>
                    <li>2</li>
                </ul>
              </div>

              <div class="kmt-promotionbanner__list">
                <p class="label">Liste 2</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
              </div>
              <g-link to="/">Mehr Details</g-link>
            </PromotionBanner>

            <PromotionBanner title="Expertise" src="/mockdata/stage.jpg" background=false overlay=true align="left">
              <div class="kmt-promotionbanner__list">
                <p class="label">Liste 1</p>
                <ul>
                    <li>1asdasdasdadlakjdsalk</li>
                    <li>2</li>
                </ul>
              </div>

              <div class="kmt-promotionbanner__list">
                <p class="label">Liste 2</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
              </div>
              <g-link to="/">Mehr Details</g-link>
            </PromotionBanner>

            <PromotionBanner src="/mockdata/stage.jpg" title="Text mit Icon" background=false overlay=true align="left">
              <Textandicon image="/mockdata/stage.jpg" layout="horizontal" title="text and icon" text="textandicon" subtitle="description" linkText="hier entlang" link="/"></Textandicon>
              <Textandicon image="/mockdata/stage.jpg" layout="horizontal" title="text and icon" text="textandicon" subtitle="description" linkText="hier entlang" link="/"></Textandicon>
            </PromotionBanner>

            <Breadcrumb path="expertise/hallo"/>

            <Attributefilter filterType="agency" />

            <Contactbanner>
              <h2 class="kmt-contactbanner__title">Title</h2>
              <p class="kmt-contactbanner__text">Ich möchte gerne mehr Informationen zu.</p>
              <input type="email" class="kmt-contactbanner__email">
              <select>
                <option value="">Fashion</option>
                <option value="">1</option>
                <option value="">Automotive</option>
              </select>
              <button type="button" name="button" class="kmt-contactbanner__button">Email</button>
            </Contactbanner>

            <Contactbanner>
              <h2 class="kmt-contactbanner__title">Title</h2>
              <p class="kmt-contactbanner__text">Ich möchte gerne mehr Informationen zu.</p>
              <button type="button" class="kmt-contactbanner__phone">+49 5242 588 0124</button>
              <button type="button" name="button" class="kmt-contactbanner__button">Email</button>
            </Contactbanner>

            <Projectlink title="Hallo" src="/mockdata/stage.jpg" blobColor="midnight" blobPosition="right">
              <h2 class="kmt-projectlink__title">Modepark</h2>
              <p>„Lorem ipsum dolor sit ameetur adipiscing elit. Aenean euismod bibendum laoreet.“</p>
            </Projectlink>

            <Projectlink title="Hallo" src="/mockdata/stage.jpg" blobColor="dark" blobPosition="middle">
              <h2 class="kmt-projectlink__title">Modepark</h2>
              <p>„Lorem ipsum dolor sit ameetur adipiscing elit. Aenean euismod bibendum laoreet.“</p>
            </Projectlink>

            <Projectlink title="Hallo" src="/mockdata/stage.jpg" blobColor="copper" blobPosition="left">
              <h2 class="kmt-projectlink__title">Modepark</h2>
              <p>„Lorem ipsum dolor sit ameetur adipiscing elit. Aenean euismod bibendum laoreet.“</p>
            </Projectlink>

            <Contentslider stagecount="3">
              <Contentstage cardTheme="white" src="/mockdata/stage.jpg" headline="Dollar Sans">
                <p slot="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
              </Contentstage>
              <Contentstage cardTheme="white" src="/mockdata/stage.jpg" headline="Dollar Sans" position="bottom">
                <p slot="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
              </Contentstage>
              <Contentstage cardTheme="white" src="/mockdata/stage.jpg" headline="Dollar Sans" position="middle">
                <p slot="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
              </Contentstage>
            </Contentslider>

            <Contentstage cardTheme="white" src="/mockdata/stage.jpg" headline="Dollar Sans" position="top">
              <p slot="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              <ul>
                  <li>1</li>
                  <li>2</li>
              </ul>
            </Contentstage>

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
import Richtext from '~/components/Richtext.vue';
// import Card from '~/components/Card.vue';
import Avatarcard from '~/components/Avatarcard.vue';
import Quotecard from '~/components/Quotecard.vue';
import Imagecard from '~/components/Imagecard.vue';
import Textcard from '~/components/Textcard.vue';
import Cardlist from '~/components/Cardlist.vue';
// import RQ_090 from '~/components/RQ-090.vue';
import Avatar from '../components/Avatar';
import PromotionBanner from '~/components/Promotionbanner.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import Attributefilter from '~/components/Attributefilter.vue';
import Contactbanner from '~/components/Contactbanner.vue';
import Projectlink from '~/components/Projectlink.vue';
import Contentslider from '~/components/Contentslider.vue';
import Contentstage from '~/components/Contentstage.vue';

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
  let lazyImages = document.querySelectorAll("[data-src]");
});

export default {
  components: {
    Avatar,
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
    Richtext,
    Cardlist,
    // Card,
    Quotecard,
    Avatarcard,
    Imagecard,
    Textcard,
    // RQ_090,
    PromotionBanner,
    Breadcrumb,
    Attributefilter,
    Contactbanner,
    Projectlink,
    Contentslider,
    Contentstage
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


    .label {
      @extend %typo-label;
    }

    /*################################################*/
    /*###############------------#####################*/
    /*###############----FORMS----####################*/
    /*###############------------#####################*/
    /*################################################*/
    /*################################################*/


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
