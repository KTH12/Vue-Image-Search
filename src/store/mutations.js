import Constant from '../Constant';
import CONF from '../ConfigUrl';

export default {
  [Constant.SET_IMG_LIST]: (state, payload) => {
    state.imgList = payload;
  },
  [Constant.SET_CURRENTURL]: (state, payload) => {
    if (state.imgList.length === 0) {
      return false;
    }
    const ran = Math.floor(Math.random() * state.imgList.length);
    state.currentUrl = `${CONF.BASE_URL}/500/500?image=${state.imgList[ran].id}`;
    return true;
  },
};

