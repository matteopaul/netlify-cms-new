<template>
    <footer class="kmt-footer">
        <div class="kmt-footer__inner kmt-footer__inner--top">
            <div class="kmt-footer__group">
                <h2>Sie haben ein Projekt?</h2>
                <p>...</p>
            </div>
            <div class="kmt-footer__group">
                <h3>Office</h3>
                <p>Kosmonaut GmbH & Co. KG<br/>Nickelstraße Nr. 1a<br/>33378 Rheda-Wiedenbrück</p>
            </div>
            <div class="kmt-footer__group">
                <h3>Sitemap</h3>
                <ul>
                    <li>
                        <g-link to="/">Leistungen</g-link>
                    </li>
                    <li>
                        <g-link to="/">Cases</g-link>
                    </li>
                    <li>
                        <g-link to="/">Kontakt</g-link>
                    </li>
                    <li>
                        <g-link to="/">AGB</g-link>
                    </li>
                </ul>
            </div>
            <div class="kmt-footer__group">
                <h3>Kosmonaut im Netz</h3>
                <ul class="kmt-socialaccountlist">
                    <li class="kmt-socialaccountlist__item--snapchat">
                        <g-link to="/"></g-link>
                    </li>
                    <li class="kmt-socialaccountlist__item--facebook">
                        <g-link to="/"></g-link>
                    </li>
                    <li class="kmt-socialaccountlist__item--instagram">
                        <g-link to="/"></g-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="kmt-footer__inner kmt-footer__inner--bottom">
            <g-link to="/" class="kmt-header__logo">
                <g-image src="~/assets/svg/Kosmonaut-Logo-Light.svg"/>
            </g-link>

            <ul>
                <li>
                    <g-link to="/">Impressum</g-link>
                </li>
                <li>
                    <g-link to="/">Datenschutz</g-link>
                </li>
                <li>
                    <g-link to="/">AGB</g-link>
                </li>
                <li>
                    <g-link to="/">DSGVO</g-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
import RQ_090 from '~/components/RQ-090.vue';

export default {
  name: 'Footer',
  components: {
    RQ_090
  }
};
</script>

<style lang="scss">
    .kmt-footer {
        background: $color--midnight;
        @extend %padding;

        ul {
            list-style: none;

            a {
                text-decoration: none;
            }
        }

        &__inner {
            @include center-inner();
            display: flex;

            &--top {
                padding-top: 40px;
                padding-bottom: 40px;
            }

            &--bottom {
                justify-content: space-between;
                align-items: center;
                padding-top: 20px;
                padding-bottom: 20px;

                ul {
                    display: flex;

                    li {
                        flex: 0 0 auto;
                        // TODO: make responsive
                        margin-right: 20px;

                        &:last-child {
                            margin-right: 0;
                        }
                    }

                    a {
                        @extend %typo-p--small;
                        color: $color--white;
                    }
                }
            }
        }

        &__group {
            width: -width(2, 20px);
            margin-right: 20px;

            &:first-child {
                width: -width(4, 20px);
            }

            &:nth-child(2) {
                width: -width(3, 20px);
            }

            &:last-child {
                margin-right: 0;
                width: -width(3, 20px);
            }

            > h2 {
                @extend %typo-h3;
                color: $color--white;
            }

            > h3 {
                @extend %typo-label;
                color: $color--white;

                + * {
                    margin-top: 20px;
                }
            }

            p {
                @extend %typo-p--small;
                color: $color--white;
            }

            ul {
                li {
                    a {
                        @extend %typo-p--small;
                        color: $color--white;
                    }
                }
            }
        }

        .kmt-socialaccountlist {
            display: flex;

            li {
                flex: 0 0 auto;
                margin-right: 20px;

                &:last-child {
                    margin-right: 0;
                }

                a {
                    display: block;

                    &:before {
                        width: 30px;
                        height: 30px;
                        display: block;
                        background-size: contain;
                        content: '';
                    }
                }
            }

            &__item {
                &--snapchat a:before {
                    background: url(~@/assets/svg/snapchat.svg);
                }
                &--facebook a:before {
                    background: url(~@/assets/svg/facebook.svg);
                }
                &--instagram a:before {
                    background: url(~@/assets/svg/instagram.svg);
                }
            }
        }
    }
</style>
