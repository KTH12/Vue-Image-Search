import Constant from '../Constant';
import AxiosAPI from '../api/AxiosAPI';

export default {
  // about Axios
  [Constant.GET_IMG_LIST]: (store, payload) => {
    AxiosAPI.imgList()
      .then((response) => {
        store.commit(Constant.SET_IMG_LIST, response.data);
        store.commit(Constant.SET_CURRENTURL, response.data);
      })
      .catch((ex) => {
        console.log(ex);
      });
  },

};
