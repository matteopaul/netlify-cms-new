<template>
    <footer class="kmt-footer">
        <div class="kmt-footer-content">
            <div class="footer-content-headline">
                <h3>Sie haben ein Projekt dollar sans de Sola connar?</h3>
                <g-link to="/kontakt" class="label">Kontaktieren</g-link>
            </div>

            <RQ_090 title="office"
                    v-bind:options="['Kosmonaut GmbH Co. KG', 'Nickelstraße Nr. 1a', '33378 Rheda-Wiedenbrück']"/>
            <RQ_090 title="sitemap" v-bind:options="['Leistungen', 'Cases', 'Kontakt', 'AGB', 'Datenschutz']"/>
            <p class="label">Kosmonaut im Netz</p>
            <g-image src="~/assets/img/Kosmonaut-Logo-White.png"/>
            <div class="footer-nav">

                <g-link to="/impressum">Impressum</g-link>
                <g-link to="/datenschutz">Datenschutz</g-link>
                <g-link to="/agb">AGB</g-link>
            </div>
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
    }
    .footer {
        position: relative;
        grid-column: 1 / 13;
        grid-row: span 34;
        padding-left: 50%;
    }

    .footer-nav {
        grid-column: 3 / 5;
    }

    .footer-nav a {
        margin-left: 20px;
    }

    .footer-content {
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        background: var(--midnight);
        left: -255px;
        position: absolute;
        padding-left: 255px;
        padding-right: 255px;
        padding-top: 100px;
        display: grid;
        grid-template-columns: 327px 200px 200px 200px;
        grid-template-rows: 450px 50px;
        grid-row-gap: 10px;
        justify-content: space-evenly;
    }

    .footer-content-headline h3 {
        color: var(--white);
    }

    .footer-content .rq-090-container {
        grid-column: span 1;
    }

    .footer-content-headline .label {
        color: var(--copper);
    }

    .footer-content-headline img {
        position: absolute;
        bottom: 30px;
    }

    .footer-content .rq-090-container ul {
        list-style-type: none;
        padding: 0;
    }


    .footer-content .rq-090-container ul {

    }

    .footer-content .rq-090-container ul li {
        font-size: 18px;
        line-height: 24px;
    }

    .footer-content .rq-090-container {
        grid-row: span 1;
    }


    .footer-content-headline .label::after {
        content: url('/uploads/arrow-button_link.svg');
        margin-left: 9px;

    }
</style>
