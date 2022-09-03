<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div class="item" @click="showToast(item.id)">{{item.id}}</div>
    </div>
    <toast :show="toastShow" :id="toastId"></toast>
  </div>
</template>

<script>
import Toast from './toast.vue';
import { sendPV } from '@ks/directive-log';

export default {
	components: {
		Toast,
	},
	data: () => {
		return {
			list: [
				{
					id: 1,
				},
				{
					id: 2,
				},
				{
					id: 3,
				},
				{
					id: 4,
				},
				{
					id: 5,
				}
			],
			toastShow: false,
			toastId: 0,
		}
	},
	methods: {
		showToast(id) {
			this.toastShow = true;
			this.toastId = id;
		}
	},
	mounted() {
		sendPV('pageName', { param1: 'xxx' });
	}
};
</script>

<style lang="less">
.item {
  width: 100%;
  height: 20px;
  background: bisque;
  margin: 5px;
}
</style>
