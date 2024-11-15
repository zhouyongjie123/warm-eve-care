<template>
  <view
    class="custom-navbar"
    :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
  >
    <!-- logo and literal text -->
    <view class="logo-zone">
      <image
        class="logo-image"
        mode="widthFix"
        src="@/static/logo.png"
        alt=""
      ></image>
      <text class="literal-text">养老政策·消息推送·新闻咨询</text>
    </view>
    <!-- search bar -->
    <view class="search">
      <input
        v-model="searchText"
        placeholder="请输入要搜索的内容"
        placeholder-class="input-placeholder"
        class="search-input"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
// getting the safe area size of the device
const { safeAreaInsets } = uni.getSystemInfoSync();

const searchText = ref<string>("");
</script>

<style lang="scss">
.custom-navbar {
  background-color: #73b3cf;
  padding: 0 50rpx;
  padding-bottom: 20rpx;
  padding-right: 50rpx;

  .logo-zone {
    margin-top: 17rpx;
    .iteral-text {
      font-size: 20rpx;
    }
    .logo-image {
      width: 70rpx;
      padding-right: 20rpx;
      margin-right: 20rpx;
      border-right: 1px solid black;
    }
  }

  .search {
    margin-top: 7rpx;
    text-align: center;
    .search-input {
      margin: 0 auto;
      width: 100%;
      height: 60rpx;
      border-radius: 40rpx;
      background-color: #d0eff9;
    }
  }
}
</style>
