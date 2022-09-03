<template>
    <div class="absolute" id="app">
        <div class="one"></div>
        <!-- <div class="two"></div> -->
    </div>
</template>
<script>

export default {
   
};
</script>

<style lang="less">
.absolute {
    background: olive;
    
    .one {
        height: 10px;
        width: 10px;
        background: blue;
        // will-change: transform;
        opacity: 0.1;
        transform: translateZ(0);
        
    }

    .two {
        height: 200px;
        background:red;
        // opacity: 0.1;
        display: absolute;
        will-change: transform;
        top: 0;

    }
}

</style>