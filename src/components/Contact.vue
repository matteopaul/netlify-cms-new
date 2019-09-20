<template>
  <div class="contact-container">
<!--    <RQ_008 size="H3" title="Jetzt Kontaktieren" />-->
    <div class="contact-input">
      <p class="label">name *</p>
      <input type="text" name="" value="">
    </div>
    <div class="contact-input">
      <p class="label">vorname *</p>
      <input type="text" name="" value="">
    </div>
    <div class="contact-input">
      <p class="label">telefon *</p>
      <input type="text" name="" value="">
    </div>
    <div class="contact-input">
      <p class="label">e-mail *</p>
      <input type="text" name="" value="">
    </div>
    <div class="contact-input">
      <p class="label">company *</p>
      <input type="text" name="" value="">
    </div>
    <div class="contact-input">
      <p class="label">job titel *</p>
      <input type="text" name="" value="">
    </div>
    <div class="contact-input">
      <p class="label">deine nachricht an uns *</p>
      <textarea name="name" rows="8" cols="50"></textarea>
    </div>
    <div class="contact-input">
      <button type="button" name="button">Abschicken</button>
    </div>
  </div>
</template>

<script>
// import RQ_092 from '~/components/RQ-092.vue'
// import RQ_008 from '~/components/RQ-008.vue'
export default {
  name: 'contact',
  components: {
    // RQ_092,
    // RQ_008
  }
}
</script>

<style>
  .contact-container {
    border: 1px solid var(--gray);
    grid-column: span 6;
    padding: 24px;
    grid-row: span 45;
  }

  .contact-input {
    display: inline-block;
  }

  .contact-input input, .contact-input textarea {

    outline: none;
    font-family: 'Gotham-Medium';
    font-size: 14px;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 1px;

    margin-right: 24px;
    border: none;
    border: 2px solid var(--gray);
    box-sizing: border-box;

    font-size: 14px;
    padding-left: 16px;
    padding-right: 16px;
    letter-spacing: 1px;

    color: var(--dark);

  }

  .contact-input input {
    width: 240px;
    height: 48px;
    margin-right: 30px;
  }

  .contact-input textarea {
      resize: none;
      padding: 16px;
      width: 510px;
  }

  .contact-input button {
      margin-top: 30px;
  }


</style>
