<template>
  <div class="button"
    :type="type"
    :class="classes"
    @click="$emit('click', $event)">

    <div class="button-text">
      <slot> </slot>
    </div>
  </div>
</template>

<script>

const props = {
  type: { type: String, default: ''},
  upper: { type: Boolean, default: false },
  shadowed: { type: Boolean, default: false },
  fill: { type: Boolean, default: false },
  inactive: { type: Boolean, default: false },
  border: { type: Boolean, default: false },
};

const classes = function() {
  return {
    upper: this.upper,
    shadowed: this.shadowed,
    fill: this.fill,
    inactive: this.inactive,
    border: this.border,
  };
};

export default {
  name: 'CustomButton',
  props,
  computed: { classes },
};
</script>

<style lang="scss" scoped>
@import './variables';

.button {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;
  outline: none;

  &:active {
    box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.22),
    0px 0px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  &:hover {
    background-color: $color-strong;

    .button-text {
      color: $color-secondary;
    }
  }
}

.button-text {
  @include font;
  color: $color-strong;
  padding: 0 22px;
  transition: 0.2s;
  user-select: none;
}

.upper {
  .button-text {
    text-transform: uppercase;
  }
}

.shadowed {
  box-shadow: $windowshadow;
}

.fill {
  background-color: $color-primary;

  &:hover {
    background-color: $color-strong;
  }

  .button-text {
    color: $color-secondary;
  }
}

.inactive {
  cursor: default;
  background-color: $color-inactive;

  &:active {
    box-shadow: none;
  }

  &:hover {
    background-color: $color-inactive;
  }

  .button-text {
    color: $color-secondary;
  }
}

.border {
  border: 3px solid $color-strong
}

</style>
