<template>
  <div class="wrapper">
    <ModalForm v-show="isSlide" @handleButtonClose="changeSlideState" />
    <AppHeader @handleButtonOpen="changeSlideState" />
    <AppBanner />
    <CurrencyRatings />
  </div>
</template>

<script>
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppBanner from './components/AppBanner.vue';
import CurrencyRatings from './components/CurrencyRatings.vue';
import ModalForm from './components/ModalForm.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppBanner,
    CurrencyRatings,
    ModalForm,
  },

  setup() {
    const isSlide = ref(false);

    const changeSlideState = () => {
      isSlide.value = !isSlide.value;
    };

    return {
      isSlide,
      changeSlideState,
    };
  },
};
</script>

<style lang="scss">
@import "utils/_variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: $GrayBcg;
  font-family: "Inconsolata", monospace;
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
