<template>
  <view class="carousel">
    <swiper autoplay circular :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image mode="aspectFill" class="image" :src="item.imageUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>

    <!-- indicator -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { BannerItem } from "@/types/home";
import { ref } from "vue";

defineProps<{
    list: BannerItem[];
}>();

const activeIndex = ref<number>(0);
const onChange: UniHelper.SwiperOnChange = (ev) => {
    activeIndex.value = ev.detail!.current;
};
</script>

<style lang="scss">
:host {
  display: block;
  height: 280rpx;
}

.carousel {
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;

  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;

    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }

    .active {
      background-color: #fff;
    }
  }

  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
