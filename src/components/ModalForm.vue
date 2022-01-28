<template>
  <div class="modal">
    <button class="modal__close" @click="$emit('handleButtonClose')">
      <i class="fas fa-times fa-2x"></i>
    </button>
    <form class="modal__form">
      <label for="title">Note title</label>
      <input class="modal__title" type="text" placeholder="e.g. go work" name="title" />
      <label for="description">Note description</label>
      <textarea
        class="modal__description"
        type="text"
        placeholder="e.g. go work"
        name="description"
      />
      <label for="color">Note color</label>
      <select class="modal__color" name="color">
        <option value="green">Green</option>
        <option value="red">Blue</option>
        <option value="blue">Red</option>
      </select>
      <input
        class="modal__create"
        type="submit"
        value="create"
        @click="$emit('handleButtonClose')"
      />
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../utils/_variables.scss";

.modal {
  width: 90%;
  position: absolute;
  z-index: 999;
  top: 150px;
  background: $White;
  border-radius: 10px;
  animation: slide-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  .modal__close {
    position: relative;
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: $MainBlue;
    border-top-right-radius: 10px;
    width: 60px;
    height: 60px;
    color: white;
  }

  .modal__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    justify-content: space-between;
    margin: 100px 0 100px 0;

    .modal__title {
      height: 40px;
      width: 60%;
      text-align: center;
      border: none;
      outline: none;
      border-bottom: 1px solid $Black;
      font-size: 18px;
    }

    .modal__description {
      height: 80px;
      width: 60%;
      text-align: center;
      border: none;
      outline: none;
      border: 1px solid $Black;
      border-radius: 10px;
      font-size: 18px;
    }

    .modal__color {
      width: 60%;
      height: 40px;
      border-radius: 10px;
    }

    .modal__create {
      width: 40%;
      height: 50px;
      border: none;
      outline: none;
      background: $GreenButton;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border-radius: 10px;
    }
  }

  @keyframes slide-bottom {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(50px);
    }
  }
}
</style>
