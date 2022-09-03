<template>
    <div id="app">
        组件A:<tags-input v-model="tags"></tags-input>
        <br>
        组件B:<tags-button v-model="buttons"></tags-button>

        <br>
        两个组件逻辑一致，只有UI上的差异，非常适合renderless component（逻辑 + 渲染分开）
  </div>
</template>
<script>
import TagsInput from './tags-input';
import TagsButton from './tags-button';
export default {
    components: {
        TagsInput,
        TagsButton
    },
    data() {
        return {
            tags: ['组件A'],
            buttons: ['组件B']
        };
    }
}
</script>