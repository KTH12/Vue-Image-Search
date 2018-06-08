import axios from 'axios';
import CONF from '../ConfigUrl';

export default {
  imgList() {
    return axios.get(CONF.IMG_LIST);
  },
};
