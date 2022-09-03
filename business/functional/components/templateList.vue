<template functional>
      <div>
            <p v-for="(item,index) in props.items" :key="index"  @click="props.itemClick(item)">{{item}}</p>
      </div>
</template>


// 组件需要的一切都是通过上下文传递,函数化组件只是一个函数，所以渲染开销也低很多

// props: 提供props 的对象
// children: VNode 子节点的数组
// slots: slots 对象
// data: 传递给组件的 data 对象
// parent: 对父组件的引用
// this.$slots.default 更新为 context.children，之后this.level 更新为 context.props.level。s