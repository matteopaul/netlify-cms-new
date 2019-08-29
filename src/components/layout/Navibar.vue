<template>
    <nav class="kmt-navibar" :class="openedCSSClass">
        <svg ref="openhandler" width="26px" height="19px" viewBox="0 0 26 19" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#000" stroke-width="2">
                <path d="M0,1.5 L26,1.5 L0,1.5 Z" id="navibar-handler-1"></path>
                <path d="M5,17.5 L26,17.5 L5,17.5 Z" id="navibar-handler-2"></path>
                <path d="M0,9.5 L26,9.5 L0,9.5 Z" id="navibar-handler-3"></path>
            </g>
        </svg>
        <div class="kmt-navibar__offcanvas">
            <svg ref="closehandler" height="10" viewBox="0 0 22 10" width="22" xmlns="http://www.w3.org/2000/svg">
                <path d="m2.99712648 5.25h18.30287352v1.5h-18.30287364l3.36963838 3.206697-1.03406277 1.086606-5.29956834-5.043303 5.29956834-5.043303 1.03406277 1.0866066z"
                      fill="#ffffff" transform="matrix(-1 0 0 -1 21.333134 11)"/>
            </svg>
            <div class="kmt-navibar__offcanvas__scroll" ref="offcanvas_scroll">
                <ul>
                    <li>
                        <g-link to="/expertise">Expertise</g-link>
                    </li>
                    <li>
                        <g-link to="/mission">Mission</g-link>
                    </li>
                    <li>
                        <g-link to="/leistungen">Leistungen</g-link>
                    </li>
                    <li>
                        <g-link to="/solutions">Solutions</g-link>
                    </li>
                    <li>
                        <g-link to="/insights">Insights</g-link>
                    </li>
                    <li>
                        <g-link to="/agentur">Agentur</g-link>
                    </li>
                    <li>
                        <g-link to="/projekte">Projekte</g-link>
                    </li>
                    <li>
                        <g-link to="/partner">Partner</g-link>
                    </li>
                    <li>
                        <g-link to="/kontakt">Kontakt</g-link>
                    </li>
                </ul>
            </div>
            <div class="kmt-navibar__offcanvas__linklist">
                <ul>
                    <li>
                        <g-link to="/impressum">Impressum</g-link>
                    </li>
                    <li>
                        <g-link to="/datenschutz">Datenschutz</g-link>
                    </li>
                    <li>
                        <g-link to="/agb">AGB</g-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { bind } from '~/utils/MultipleEventListener.js';
const bodyScrollLock = require('body-scroll-lock');

export default {
  name: 'Navibar',
  components: {},
  data () {
    return {
      isopened: false
    };
  },
  computed: {
    openedCSSClass () {
      if (this.isopened) {
        return 'kmt-navibar--opened';
      }
    }
  },
  methods: {
    /**
     * lock body scroll when flyout is opened
     */
    lockScroll () {
      this.$refs.offcanvas_scroll.classList.remove('smooth');

      bodyScrollLock.disableBodyScroll(this.$refs.offcanvas_scroll);

      window.setTimeout(() => {
        this.$refs.offcanvas_scroll.classList.add('smooth');
      }, 0);
    },
    /**
     * unlock body scroll when flyout is closed
     */
    unlockScroll () {
      bodyScrollLock.enableBodyScroll(this.$refs.offcanvas_scroll);
      bodyScrollLock.clearAllBodyScrollLocks();
    },
    checkHeight (preventPolling) {
      const doc = document.documentElement;

      // only access innerHeight when is opened (avoid layout / reflow)
      if (this.isopened === true) {
        // inject height to css as custom property (used only when browser supports css properties)
        doc.style.setProperty('--app-height', `${window.innerHeight}px`);
      }

      // only poll when not prevented (e.g. on resize) and when is opened
      if (preventPolling !== true) {
        window.setTimeout(() => {
          this.checkHeight();
        }, 1000);
      }
    },
    open () {
      this.isopened = true;
      this.checkHeight(true);
    },
    close () {
      this.isopened = false;
    }
  },
  watch: {
    '$route' () {
      this.isopened = false;
    },
    isopened (val) {
      if (val === true) {
        this.lockScroll();
      } else {
        this.unlockScroll();
      }

      window.clearTimeout(this.timeout);
    }
  },
  mounted () {
    this.$refs.openhandler.addEventListener('click', () => {
      this.open();
    });

    this.$refs.closehandler.addEventListener('click', () => {
      this.close();
    });

    bind(document.getElementsByTagName('body')[0], ['click', 'touchstart'], (event) => {
      if (this.isopened === true) {
        // check for state mode instead of using MQ (MQ is only used to "resolve" state mode)
        if (event.target && event.target.closest('.kmt-navibar') === null) {
          this.isopened = false;
        }
      }
    });
  }
};
</script>

<style lang="scss">
    .kmt-navibar {
        // handler
        > svg {
            display: block;
            width: 20px;
            cursor: pointer;

            g {
                stroke: #000;
            }
        }

        &__offcanvas {
            position: fixed;
            top: 0;
            left: 100%;
            width: 50vw;
            min-width: 300px;
            transition: transform 300ms ease;
            height: 100%; // DO NOT USE VH!
            display: flex;
            flex-direction: column;
            background: $color--midnight;
            padding: 80px 80px 40px;

            @include media-breakpoint-between(xs, s) {
                width: 100vw;
                padding: 40px 40px 20px;
            }

            // e.g. NOT IOS9
            @supports (color: var(--app-height)) {
                height: calc(var(--app-height));
            }

            > svg {
                position: absolute;
                right: 60px;
                top: 50px;
                transform: translateY(-50%);
                cursor: pointer;

                @include media-breakpoint-between(xs, s) {
                    right: 20px;
                    top: 20px;
                }
            }

            &__scroll {
                overflow: scroll;

                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;

                    li {
                        color: $color--white;

                        + li {
                            margin-top: 20px;
                        }

                        a {
                            @extend %typo-h1;
                            color: inherit;
                            column-count: inherit;
                            text-decoration: none;
                            transition: color 250ms ease;

                            &:hover {
                                color: $color--copper;
                            }
                        }
                    }
                }

                &.smooth {
                    // apply touch after body-scroll-lock has been applied and AFTER each height animation has been ended -> otherwise the touch scroll prevents body-scroll-lock ...
                    -webkit-overflow-scrolling: touch;
                }
            }

            &__linklist {
                padding-top: 40px;
                margin-top: auto;

                @include media-breakpoint-between(xs, s) {
                    padding-top: 20px;
                }

                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;

                    li {
                        display: block;
                        flex: 0 0 auto;
                        margin-right: 20px;
                        color: $color--white;

                        &:last-child {
                            margin-right: 0;
                        }

                        a {
                            @extend %typo-p--small;
                            color: inherit;
                            column-count: inherit;
                            text-decoration: none;
                            transition: color 250ms ease;

                            &:hover {
                                color: $color--copper;
                            }
                        }
                    }
                }
            }
        }

        &--opened &__offcanvas {
            transform: translateX(-100%);
        }
    }

    /*
    .kmt-header {
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

    .kmt-header a {
        margin-left: 96px;
    }

    .header-nav {
        width: 26px;
        height: 26px;
        margin-right: 96px;
        cursor: pointer;
        position: relative;
    }

    .header-nav-span {
        width: 26px;
        height: 5px;
        background: var(--dark);

    }

    .header-nav-span::before, .header-nav-span::after {
        position: absolute;
        background: var(--dark);
        content: '';
        display: block;
        width: 100%;
        height: 5px;
        transition-duration: 0.2s;
    }

    .header-nav-span::after {
        bottom: 0px;
        right: 0;
        width: 60%;
    }

    .header-nav:hover .header-nav-span::after {
        width: 100%;
    }

    .header-nav-span::before {
        top: 10px;
        left: 0;
    }

     */
</style>
