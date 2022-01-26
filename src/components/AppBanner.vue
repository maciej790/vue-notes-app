<template>
  <section class="banner">
    <h1>Your notes app</h1>
  </section>
</template>
<script>
export default {
  name: 'AppBanner',
};
</script>
<style lang="scss" scoped>
@import "../utils/_variables.scss";
.banner {
  width: 100%;
  height: 400px;
  background: $MainBlue;
  color: $White;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
}
</style>
