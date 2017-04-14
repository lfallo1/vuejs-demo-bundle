<template>
    <div class="quote-wrapper">
      <h3>Quote Item Wrapper</h3>
      <slot name="content"></slot>
      <slot name="author"></slot>
      <span class="small text-warning">
        <slot name="additionalInfo">Additional info placeholder (optional slot)</slot>
      </span>
    </div>
</template>

<script>

    import AppQuote from './AppQuote.vue';

    export default {
        components: {
          'app-quote' : AppQuote
        }
    }
</script>

<style scoped>
  div.quote-wrapper {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  .app-quote-item{
    font-weight: bold;
    color: blue;
  }
</style>
