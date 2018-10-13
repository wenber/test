<template>
    <p id="app" class="asdf" @click="click" v-if="root">
        asdfasd
    </p>
    <span v-else>2131231232</span>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data()  {
    return {
        root: '111'
    }
  },
    created() {
       
    },
    methods: {
        click() {
            this.root = '';
        }
    }
}
</script>

