import Axios from "axios";
import Apis from "./apiUrl.js";

export default {
  /**
   * 接口请求数据
   */
  getData(url, param, callback, errcallback) {
    Axios.get(url, {
      params: param
    })
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        errcallback(error)
      })
  },
  /**
   *  获取藏头诗
   */
  ctsConstruct(param, callback, errCallback) {
    this.getData(Apis['cts'], param, callback, errCallback);
  },
  lzConstruct(param, callback, errCallback) {
    this.getData(Apis['lz'], param, callback, errCallback);
  }
}
