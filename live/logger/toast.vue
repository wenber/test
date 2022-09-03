<template>
  <div
    class="toast"
    v-if="show"
    v-log-show="{action: 'SHOW_ACTION', params: { id }}"
  >
    这是一个toast id: {{id}}
  </div>
</template>

<script>

export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        id: {
            type: Number,
            default: 0,
        }
    }
};
</script>

<style lang="less">
.toast {
  width: 200px;
  height: 200px;
  background-color: yellow;
  position: fixed;

  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
