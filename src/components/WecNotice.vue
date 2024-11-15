<script setup lang="ts">
defineProps<{
    text: string;
}>();
</script>

<template>
  <view class="container">
    <image
      class="image"
      src="@/static/images/notice/horn.png"
      mode="widthFix"
    />
    <text class="text">{{ text }}</text>
  </view>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  .image {
    width: 100rpx;
  }
}
</style>
