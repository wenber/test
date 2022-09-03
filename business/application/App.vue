<template>
  <div>
    <a
      href="https://wiki.corp.kuaishou.com/pages/viewpage.action?pageId=925145739"
      target="_blank"
    >
      <el-alert title="PLC排查工具使用文档"></el-alert
    ></a>
    <el-form ref="form" :model="sizeForm" label-width="200px" size="mini">
      <el-form-item label="客态用户id" required>
        <el-input v-model="sizeForm.visitorId"></el-input>
      </el-form-item>
      <el-form-item label="视频id" required>
        <el-input v-model="sizeForm.photoId"></el-input>
      </el-form-item>
      <el-form-item label="产品" required>
        <el-select v-model="sizeForm.productType" placeholder="请选择	产品">
          <el-option label="快手" :value="1"></el-option>
          <el-option label="快手极速版" :value="17"></el-option>
          <!-- <el-option label="快手极速版小包" :value="23"></el-option> -->
        </el-select>
      </el-form-item>
      <el-form-item label="平台" required>
        <el-select v-model="sizeForm.platformType" placeholder="请选择平台">
          <el-option label="安卓" :value="1"></el-option>
          <el-option label="Iphone" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="app版本号" required>
        <el-input v-model="sizeForm.appVer"></el-input>
      </el-form-item>
      <!-- <el-form-item label="视频详情页样式">
        <el-select v-model="sizeForm.displayType" placeholder="请选择视频详情页样式">
          <el-option label="主版本双列默认样式" :value="1"></el-option>
          <el-option label="设置版样式" :value="2"></el-option>
          <el-option label="精选样式" :value="3"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="全局浏览模式">
        <el-select v-model="sizeForm.clientBrowseType" placeholder="请选择全局浏览模式">
          <el-option label="主版本默认样式（双列）" :value="1"></el-option>
          <!-- <el-option label="主版本上下滑" :value="2"></el-option> -->
          <el-option label="设置版" :value="3"></el-option>
          <el-option label="底导模式" :value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="photoPage" required>
        <el-select v-model="sizeForm.photoPage" placeholder="请选择视频详情页样式">
          <el-option label="发现页" value="h"></el-option>
          <el-option label="关注页" value="f"></el-option>
          <el-option label="同城页" value="n"></el-option>
          <el-option label="个人主页" value="p"></el-option>
          <el-option label="热门频道页" value="hc"></el-option>
          <el-option label="标签页" value="t"></el-option>
          <el-option label="喜欢页" value="l"></el-option>
          <el-option label="分享渠道" value="sp"></el-option>
          <el-option label="精选" value="bs"></el-option>
          <el-option label="新搜索结果页" value="scn"></el-option>
          <el-option label="作品搜索" value="sff"></el-option>

        </el-select>
      </el-form-item>
      <el-form-item label="设备id	">
        <el-input v-model="sizeForm.deviceId"></el-input>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="bizType" label="业务方" width="180"> </el-table-column>
      <el-table-column prop="proxyBizType" label="代理业务方" width="180">
      </el-table-column>
      <el-table-column prop="plcFeatureEntry" label="plcFeatureEntry">
        <template slot-scope="scope">
          <div>
            {{ scope.row.plcFeatureEntry }}
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-card class="box-card" :style="{ margin: '100px 0' }">
      <div v-for="item in Object.keys(finalDataSource)" :key="item" class="text item">
        {{ `${item}：${finalDataSource[item]}` }}
      </div>
    </el-card>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "@vue/composition-api";
import axios from "axios";

export default defineComponent({
  setup() {
    const sizeForm = reactive({
      visitorId: null, // number,
      photoId: "", // number,
      productType: null, //产品：1-快手 17-快手极速版 23-快手极速版小包
      platformType: null, // number
      appVer: "", // string
      clientBrowseType: "", // number
    //   displayType: null, // number
      photoPage: "",
      deviceId: "",
    });
    const tableData = ref([]); //
    const finalDataSource = ref({});

    return {
      sizeForm,
      tableData,
      finalDataSource,
      onSubmit: async function () {
        const checkKeyList = [
          {
            name: "visitorId",
            label: "客态用户id",
          },
          {
            name: "photoId",
            label: "视频id",
          },
          {
            name: "productType",
            label: "产品",
          },
          {
            name: "platformType",
            label: "平台",
          },
          {
            name: "appVer",
            label: "app版本号",
          },
          {
            name: "photoPage",
            label: "photoPage",
          },
        ];
        let validate = true;
        checkKeyList.forEach((item) => {
          if (!sizeForm[item.name] && validate) {
            // validate = false;
            return this.$message.error(`请输入${item.label}`);
          }
        });
        if (validate) {
          const res = await axios.post("/rest/n/plc/issue/identify", sizeForm);
          console.log({
            res,
          });
          if (res.data.result === 1) {
            this.$message.success("请求成功");
            tableData.value = res.data.data.bizPlcData;
            const finalBizPlcData = res.data.data.finalBizPlcData;
            finalDataSource.value = {
              新手期用户不开启plc: res.data.data.disablePlcForNewUser? "是" : "否",
              bizType: finalBizPlcData.bizType,
              plcFeatureEntryInfo: JSON.stringify(finalBizPlcData.plcFeatureEntryInfo),
            };
          }
          console.log("submit!", this.$refs.form);
        }
      },
    };
  },
});
</script>
<style lang="less">
.el-input {
  width: 700px !important;
}
html {
  padding: 30px;
}
</style>
