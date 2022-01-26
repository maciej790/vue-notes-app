<template>
  <header class="header">
    <button class="header__button">Create note</button>
    <h2 class="header__logo">Logo</h2>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
};
</script>
<style lang="scss" scoped>
@import "../utils/_variables.scss";

.header {
  width: 100%;
  height: 70px;
  background: $White;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  .header__button {
    width: 30%;
    height: 50px;
    background: $GreenButton;
    border: none;
    outline: none;
    border-radius: 10px;
    color: $White;
    font-size: 16px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      font-weight: bold;
      transform: scale(1.2);
    }
  }

  .header__logo {
    color: $GrayText;
  }
}
</style>
