<template>
  <div class="progress"></div>
</template>

// necessary add class with custom style
// { height: and background-color: } on parent instance
// https://codesandbox.io/s/progressscroll-epc7f?file=/src/components/ProgressScroll.vue

<script>
export default {
  methods: {
    progressScroll(event) {
      const progress = document.querySelector(".progress");

      let windowScroll = document.documentElement.scrollTop; // прокрутка скролла от 0 -> n
      let clientHeight = document.documentElement.clientHeight; //видимая часть страницы
      let windowHeight = document.documentElement.scrollHeight - clientHeight; // чистая высота

      let percent = (windowScroll / windowHeight) * 100;
      progress.style.width = percent + "%";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.progressScroll);
  },
};
</script>

<style scoped>
.progress {
  position: fixed;
  left: 0;
  top: 0;
  width: 0%;
  /* height: 4px;
  background-color: blue; */
}
</style>
