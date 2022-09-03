<template>
    <div class="main">
        <div class="load">
            <sharp-promise :promise="promise1">
                <template slot="pending">
                    <img src="https://static.yximgs.com/udata/pkg/fe/loading.d77acd8b.svg" width="20"  height="20" alt=""/>
                </template>
                <template slot-scope="scope" slot="resolve">
                    <div style="color:green;">{{scope.msg}}</div>
                </template>
                <template slot-scope="scope" slot="reject">
                    <div style="color:red;">{{scope.err}}<button @click="promise1 = load()">点我重新加载模块1</button></div>
                </template>
            </sharp-promise>
        </div>
        <div class="load">
            <sharp-promise :promise="promise2">
                <template slot="pending">
                    <img src="https://static.yximgs.com/udata/pkg/fe/loading.d77acd8b.svg" width="20"  height="20" alt=""/>
                </template>
                <template slot-scope="scope" slot="resolve">
                    <div style="color:green;">{{scope.msg}}</div>
                </template>
                <template slot-scope="scope" slot="reject">
                    <div style="color:red;">{{scope.err}}<button @click="promise2 =  load()">点我重新加载模块2</button></div>
                </template>
            </sharp-promise>
        </div>
        <div class="load">
            <sharp-promise :promise="promise3">
                <template slot="pending">
                    <img src="https://static.yximgs.com/udata/pkg/fe/loading.d77acd8b.svg" width="20"  height="20" alt=""/>
                </template>
                <template slot-scope="scope" slot="resolve">
                    <div style="color:green;">{{scope.msg}}</div>
                </template>
                <template slot-scope="scope" slot="reject">
                    <div style="color:red;">{{scope.err}}<button @click="promise3 =  load()">点我重新加载模块3</button></div>
                </template>
            </sharp-promise>
        </div>

    </div>
</template>

<script>
export default{
    data(){
        return {
            promise1: this.load(),
            promise2: this.load(),
            promise3: this.load(),
        }
    },
    methods: {
        load() {
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    if(Math.random()>0.5){
                        resolve({msg:"数据加载成功"})
                    }else{
                        reject({err:"数据加载失败"})
                    }

                }, Math.random() * 3000);
            });
        }
    },
}
</script>
<style lang="less">
.main {
    text-align: center;
}
.load {
    height: 50px;
    text-align: center;
    margin-top: 50px;
    border: 1px solid  #CCC;
    line-height: 50px;
}
</style>