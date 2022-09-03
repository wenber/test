<template>
    <div id="app">
        <div class="tab">
			<div>点击下方tab1，会加载100张图片，点击下方tab2，会加载另外100张图片。为了模拟慢网络，请把chrome网络切换到3g模式
			</div>

          <input type="radio" @click="getTab1Data" name="tab" :value="1" v-model="checkedTab" />tab1  
          <input type="radio"  @click="getTab2Data" name="tab" :value="2" v-model="checkedTab" />tab2
        </div>
        <div class="tab-content">
            <div class="tab-content1" v-if="checkedTab === 1">
              	<div v-for="(item, index) in tab1Data" :key="index">
                  	<img :src="item" />
					<!-- <iframe :src="item"></iframe> -->
              	</div>
            </div>
            <div class="tab-content2"  v-if="checkedTab === 2">
              	<div v-for="(item, index) in tab2Data" :key="index">
                  	<img :src="item" />
					<!-- <iframe :src="item"></iframe> -->
					<!-- <link rel="stylesheet" :href="item"/> -->
              	</div>
            </div>
        </div>
		<div>期望解决的问题：当我切换tab时，前一个tab下的图片资源立即停止加载，否则，新tab下的图片加载会被阻塞。
			因为同域名下并发的请求为6（不同浏览器不同，但都有限制）
			</div>
    </div>
</template>

<script>
import {tab1, tab2} from './data';
// 1，通过移除img dom节点可以cancel图片请求, 缺点：涉及到大量dom操作
// 2, 在切换函数的首行，就调用window.stop();能cancel先前图片请求,且不影响后续新图片请求，缺点：暂未发现
// 3, 将先前img元素的src赋值为非图片地址，比如'#'，可以cancel图片请求，缺点：暂未
// 4, 用iframe标签替换img标签，绕开并行加载数量限制，缺点：新增了大量iframe标签，且每个iframe还包含了html基本的标签（html, body,img）
// 5, 用xhr去请求图片资源，用数组收集xhr集合，切换tab时，循环调用xhr.abort(). 缺点：img全是base64资源，因为实例化很多XMLHttpRequest，消耗了内存资源
// const collections = [];
export default {
	data() {
		return {
			tab1Data: [],
			tab2Data: [],
			checkedTab: 0
		}
	},
	mounted() {
	},
	methods: {
		getTab1Data() {
			this.tab1Data = tab1;
			// tab1.map((item, index) => {
			// 	this.getImage(index, item);
			// });
		},
		getTab2Data() {
			// window.stop();
			// Array.from(document.getElementsByClassName('img1')).forEach(function(item) {
			// 	item.src = '#';
			// });
			// // console.log(a);
			// collections.map(item => item.abort());
			this.tab2Data = tab2;
			
		},
		// getImage(ref, url) {
		// 	const me = this;
		// 	const xhr = new XMLHttpRequest();
        //     xhr.open("GET", url, true);
            
 
        //     xhr.responseType = "blob";
        //     xhr.onload = function()
        //     {
        //         if (this.readyState != 4)
        //             return;
 
        //         var reader = new FileReader();
        //         reader.onload = function() {
        //             // $(imgObj).attr("src",this.result);
		// 			// console.log(this.result);

		// 			me.$refs[ref][0].src = this.result;
                    
        //         };
        //         reader.readAsDataURL(this.response);
        //     }
        //     xhr.send();
		// 	collections.push(xhr);
		// }
	}
};
</script>

<style lang="less">
@import url('./a.css');
	#app {
		.tab {
			button {
				margin: 30px;
				width: 100px;
			}
		}
	}
</style>
