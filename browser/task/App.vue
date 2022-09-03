<template>
    <div id="app">
        <button  ref="btn">按钮</button>
    </div>
</template>
<script>

export default {
   mounted() {
       this.$refs.btn.addEventListener('click', () => {
           Promise.resolve().then(() => {
                console.log('click1');
                Promise.resolve().then(() => {
                    console.log('click11');
                });
           });
        //    console.log('listen1');
       });
       this.$refs.btn.addEventListener('click', () => {
           Promise.resolve().then(() => {
               console.log('click2');
               Promise.resolve().then(() => {
                    console.log('click22');
                });
           });
        //    console.log('listen2');
       })

       this.$refs.btn.click();
    //    console.log(3333);

   }
};
</script>

<style lang="less">
.absolute {
 
}

</style>