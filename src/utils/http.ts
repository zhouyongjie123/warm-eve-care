import { useMemberStore } from "@/stores";

const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";
const SOURCE_CLIENT = "mini-program";
interface ResponseResult<T> {
  code: string;
  message: string;
  data: T;
}
// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    options.timeout = 10000;
    options.header = {
      ...options.header,
      "source-client": SOURCE_CLIENT,
    };
    const menberStore = useMemberStore();
    const token = menberStore.profile?.token;
    if (token) {
      options.header.Authorization = token;
    }
  },
};
uni.addInterceptor("request", httpInterceptor);

uni.addInterceptor("uploadFile", httpInterceptor);
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<ResponseResult<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as ResponseResult<T>);
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore();
          memberStore.clearProfile();
          uni.navigateTo({ url: "/pages/login/login" });
          reject(res);
        } else {
          uni.showToast({
            icon: "none",
            title: (res.data as ResponseResult<T>).message || "Request Error",
          });
          reject(res);
        }
      },
      fail(err) {
        uni.showToast({
          icon: "none",
          title: "Network Error,please try again!",
        });
        reject(err);
      },
    });
  });
};
