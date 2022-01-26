<template>
  <section class="currency">
    <div class="currency__box" v-for="currency in ratings" :key="currency.code">
      <div class="currency__code">{{ currency.code }}</div>
      <div class="currency__rating">{{ currency.rates[0].mid }}</div>
    </div>
  </section>
</template>
<script>
import useFetch from '../use/useFetch';

export default {
  name: 'CurrencyRatings',

  setup() {
    const { getCurrency, ratings } = useFetch();

    const baseApiUrl = 'http://api.nbp.pl/api/exchangerates/rates/A/';

    getCurrency(baseApiUrl);

    return {
      ratings,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../utils/_variables.scss";
.currency {
  width: 80%;
  position: absolute;
  top: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .currency__box {
    width: 50%;
    background: $White;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 20px 0 20px 0;
    box-shadow: -4px 0px 24px 0px rgba(66, 68, 90, 1);

    .currency__code {
      width: 60%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 2px solid $MainBlue;
      color: $GrayText;
      font-weight: bold;
      font-size: 20px;
    }

    .currency__rating {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
  }
}
</style>
