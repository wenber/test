<template>
  <div class="test" :style="renderStyle"></div>
</template>

<script>
export default {
  props: {
    v: {
      type: String,
      default: "",
    },
  },
  computed: {
    renderStyle() {
      const { v } = this;
      return {
        "--bg": `url('${v}')`,
      };
    },
  },
};
</script>

<style>
@keyframes leftmove {
  0% {
    opacity: 0;
    /* left: 0; */
  }
  52% {
    opacity: 1;
    /* left: 50%; */
  }
  100% {
    opacity: 0;
    /* left: 0; */
  }
}
.test {
  width: 200px;
  height: 200px;
  position: relative;
  background: orange;
}
.test::before {
  position: absolute;
  content: " ";
  display: block;
  width: 100px;
  height: 100px;
  background-image: var(--bg);
  /* background-image: url(''); */
  animation: leftmove 3s infinite ease-in-out;
}
</style>
