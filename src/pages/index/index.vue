<template>
  <CustomNavBar />
  <scroll-view scroll-y class="scroll-view">
    <WecSwiper :list="bannerList" />
  </scroll-view>
</template>

<script setup lang="ts">
import type { BannerItem } from "@/types/home";
import CustomNavBar from "./components/CustomNavBar.vue";
const bannerList: BannerItem[] = [
  {
    id: 1,
    imageUrl:
      "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_1.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_3.jpg",
  },
];
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scroll-view {
  flex: 1;
}
</style>
