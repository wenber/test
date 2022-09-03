<template>
  <div>
    <button @click="setStyle()">setNull</button>
    <button
      @click="
        setStyle(
          'http://ali2.a.yximgs.com/uhead/AB/2020/11/25/00/BMjAyMDExMjUwMDE4MTVfMzkxNTg4OTg3XzFfaGQxODBfNjAz_s.jpg'
        )
      "
    >
      setImg
    </button>
    <Test v-bind="p"></Test>
  </div>
</template>

<script>
import Test from "./test.vue";
export default {
  name: "test",
  data() {
    return {
      p: {},
    };
  },
  components: {
    Test,
  },
  methods: {
    setStyle(val) {
      if (val) {
        this.p = {
          v: val,
        };
      } else {
        this.p = {};
      }
      console.log(this.p);
    },
  },
};
</script>

<style></style>
