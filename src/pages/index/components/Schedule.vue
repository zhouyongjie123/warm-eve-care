<template>
  <view class="container">
    <view class="title-zone">
      <view class="text">日程提醒</view>
      <image
        class="image"
        src="../../../static/images/index/classification.png"
        mode="widthFix"
      />
    </view>

    <view class="display-zone">
      <view class="item-container" v-for="item in list" :key="item.id">
        <image class="image-item" :src="item.imageUrl" mode="widthFix" />
        <text>{{ item.title }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { ScheduleItem } from "@/types/home";
import { ref } from "vue";
const list = ref<ScheduleItem[]>([]);
const staticDataSet: ScheduleItem[] = [
  {
    id: 1,
    imageUrl: "../../../static/images/index/physical_exercise.png",
    title: "锻炼",
    naviateRoute: "/pages/index/index",
  },
  {
    id: 2,
    imageUrl: "../../../static/images/index/careness.png",
    title: "亲情陪伴",
    naviateRoute: "/pages/index/index",
  },
  {
    id: 3,
    imageUrl: "../../../static/images/index/first_aid.png",
    title: "紧急呼救",
    naviateRoute: "/pages/index/index",
  },
  {
    id: 4,
    imageUrl: "../../../static/images/index/healthy_diet.png",
    title: "饮食健康",
    naviateRoute: "/pages/index/index",
  },
  {
    id: 5,
    imageUrl: "../../../static/images/index/intelligent_voice.png",
    title: "智能语音",
    naviateRoute: "/pages/index/index",
  },
  {
    id: 6,
    imageUrl: "../../../static/images/index/shopping.png",
    title: "购物",
    naviateRoute: "/pages/index/index",
  },
  {
    id: 7,
    imageUrl: "../../../static/images/index/location.png",
    title: "实时定位",
    naviateRoute: "/pages/index/index",
  },
  {
    id: 8,
    imageUrl: "../../../static/images/index/health_recording.png",
    title: "健康档案",
    naviateRoute: "/pages/index/index",
  },
  {
    id: 9,
    imageUrl: "../../../static/images/index/consultation.png",
    title: "快速问诊",
    naviateRoute: "/pages/index/index",
  },
  {
    id: 10,
    imageUrl: "../../../static/images/index/drug.png",
    title: "按时吃药",
    naviateRoute: "/pages/index/index",
  },
];
list.value = staticDataSet;
</script>

<style scoped lang="scss">
.container {
  .text {
    font-size: large;
    font-weight: bold;
    margin-bottom: 20rpx;
    color: #9D9560;
    font-family:Georgia, 'Times New Roman', Times, serif
  }
  .title-zone {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .image {
      width: 50rpx;
    }
  }
  .display-zone {
    font-size: 30rpx;
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    justify-content: space-between;
    .item-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .image-item {
        width: 64rpx;
        border: 1px solid #303030;
        border-radius: 50%;
        padding: 10rpx;
        margin: 5rpx 0;
      }
    }
  }
}
</style>
