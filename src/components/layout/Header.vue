<template>
    <header class="kmt-header">
        <div class="kmt-header__inner">
            <g-link to="/" class="kmt-header__logo">
                <g-image src="~/assets/svg/Kosmonaut-Logo-White.svg"/>
            </g-link>

            <Navibar></Navibar>
        </div>
    </header>
</template>

<script>
import Navibar from '~/components/layout/Navibar.vue';

export default {
  name: 'Header',
  components: {
    Navibar
  }
};
</script>

<style lang="scss">
    .kmt-header {
        position: sticky;
        left: 0;
        top: 0;
        z-index: 5;
        height: $header-height;
        background: $color--white;

        &__inner {
            display: flex;
            align-items: center;
            height: 100%;

            @include center-outer();
        }

        &__logo {
            flex: 0 0 auto;
        }

        .kmt-navibar {
            flex: 0 0 auto;
            margin-left: auto;
        }
    }
</style>
