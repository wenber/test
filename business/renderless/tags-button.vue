
<template>
    <renderless-input :value="tags" @input="(tags) => { $emit('input', tags) }">
        <div class="tags-input" slot-scope="{ tag, addTag, removeTag, inputAttrs, inputEvents }">
            <div>
                <input class="tags-input-text" placeholder="Add tag..."
                    v-bind="inputAttrs"
                    @input="inputEvents.input"
                >
                <button @click="addTag">Add</button>
            </div>


            <ul v-for="tag in tags" :key="tag">
                <li class="tags-input-tag" >
                    <span>{{ tag }}</span>
                    <a href="javascript:void(0)" class="tags-input-remove" @click="removeTag(tag)">remove</a>
                </li>
            </ul>
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

