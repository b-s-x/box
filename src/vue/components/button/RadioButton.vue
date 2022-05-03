<template>
  <div class="tabs">
    <input type="radio" id="radio-1" name="tabs" checked />
    <label class="tab" for="radio-1">
      Upcoming
      <span class="notification"> {{ income }} </span>
    </label>

    <input type="radio" id="radio-2" name="tabs" />
    <label class="tab" for="radio-2">Development</label>
    <input type="radio" id="radio-3" name="tabs" />
    <label class="tab" for="radio-3">Completed</label>

    <span class="glider"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      income: 3,
    };
  },
};
</script>

<style scoped lang="scss">
$primary: #185ee0;
$secondary: #e6eef9;
$shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);

@mixin flex($justify-content: center, $align-items: center) {
  display: flex;
  justify-content: $justify-content;
  align-items: $align-items;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

.tabs {
  display: flex;
  position: relative;
  box-shadow: $shadow;
  padding: 12px;
  border-radius: 99px;
}

input[type="radio"] {
  display: none;
}

.tab {
  @include flex();
  height: 54px;
  width: clamp(300px, 50%, 600px);
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.notification {
  @include flex();
  width: 30px;
  height: 30px;
  margin-left: 2px;
  border-radius: 50%;
  background-color: $secondary;
  transition: 0.15s ease-in;
}

input[type="radio"]:checked + label {
  color: $primary;
}

input[type="radio"]:checked + label > .notification {
  background-color: $primary;
  color: #fff;
}

input[id="radio-1"]:checked ~ .glider {
  transform: translateX(0);
}

input[id="radio-2"]:checked ~ .glider {
  transform: translateX(100%);
}

input[id="radio-3"]:checked ~ .glider {
  transform: translateX(200%);
}

.glider {
  position: absolute;
  height: 54px;
  background-color: $primary;
  width: 31.5%;
  opacity: 0.1;
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}
</style>