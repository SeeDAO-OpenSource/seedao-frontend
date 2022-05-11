<!--
@description: 基于element的dialog轮子
@author: fc
@createtime: 2021年11月30日 17:02:59
-->
<template>
  <div class="fl-dialog-wrap" v-show="isShowDialog > 0">
    <div class="fl-dialog">
      <i class="el-icon-close" @click="closeDialog" v-show="!isShowHeader"></i>
      <div class="fl-dialog-header" v-show="isShowHeader">
        <h2 style="text-align: center">
          {{ dialogHeader }}
        </h2>
        <i
          class="el-icon-close"
          @click="closeDialog"
          v-show="!isShowHeader"
        ></i>
      </div>
      <div
        class="fl-slot-container"
        :style="{ height: isShowHeader ? 'calc(100% - 112px)' : '100%' }"
        v-loading="infoLoading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(255, 250, 233, 0.7)"
      >
        <slot name="currentDao"></slot>
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShowDialog: Number, //是否显示弹窗
    isShowHeader: Boolean, //是否显示弹窗标题
    dialogHeader: String, //弹窗标题
  },
  data() {
    return {
      loading: false,
      infoLoading: false,
    };
  },
  mounted() {
    if (this.isShowEditEventDialog) {
      this.editRuleInfo();
    } else if (this.isShowReadOnlyEventDialog) {
      this.readOnlyRuleInfo();
    }
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/var.scss";
.fl-dialog-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 999;
  background: #00000080;
  .fl-dialog {
    position: relative;
    width: 50%;
    height: 60%;
    min-height: 500px;
    margin-left: 25%;
    margin-top: 12rem;
    padding: 4rem;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
    background-color: $color-bg;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    .fl-dialog-header {
      width: calc(100% - 40px);
      position: relative;
      padding: 20px;
      text-align: center;
    }
    .fl-slot-container {
      width: 100%;
      margin-top: 20px;
      overflow: auto;
    }
    .el-icon-close {
      position: absolute;
      right: 20px;
      top: 20px;
      border-radius: 1.5rem;
      font-size: 3rem;
    }
  }
}
</style>
