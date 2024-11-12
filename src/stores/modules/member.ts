import { defineStore } from "pinia";
import { ref } from "vue";

// 定义 Store
export const useMemberStore = defineStore(
  "member",
  () => {
    // 信息
    const profile = ref<any>();

    const setProfile = (val: any) => {
      profile.value = val;
    };

    const clearProfile = () => {
      profile.value = undefined;
    };

    return {
      profile,
      setProfile,
      clearProfile,
    };
  },
  {
    // persist options should be replaced within miniprogram
    persist: {
      storage: {
        getItem(key: string) {
          return uni.getStorageSync(key);
        },
        setItem(key: string, value: string) {
          uni.setStorageSync(key, value);
        },
      },
    },
  }
);
