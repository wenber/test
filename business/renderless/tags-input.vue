
<template>
    <renderless-input :value="tags" @input="(tags) => { $emit('input', tags) }">
        <div class="tags-input" slot-scope="{ tag, removeTag, inputAttrs, inputEvents }">
            <span class="tags-input-tag" v-for="tag in tags" :key="tag">
                <span>{{ tag }}</span>
                <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
            </span>

            <input class="tags-input-text" placeholder="Add tag..."
                v-bind="inputAttrs"
                v-on="inputEvents"
            >
        </div>
    </renderless-input>
</template>

<script>
import RenderlessInput from './components/renderlessInput';
    export default {
        components: {
            RenderlessInput
        },
        props: ['tags'],
        model: {
            prop: 'tags',
            event: 'input'
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

