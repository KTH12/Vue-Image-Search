<template>
  <div>
    <div class="wrap">
      <transition-group name="fade" tag="ul" class="img-wrap clearfix">
        <li v-for="item in items" v-bind:key="item">
          <img :src="item" :key="item" />
        </li>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import Constant from '../Constant';

export default {

  data() {
    return {
      id: 0,
      backURL: 'https://picsum.photos/200/300?image=0',
      items: [],
    };
  },
  created() {
    this.$store.dispatch(Constant.GET_IMG_LIST);
    setInterval(() => {
      this.setCurrenturl();
    }, 3000);
  },
  computed: {
    ...mapState([
      'imgList',
      'currentUrl',
    ]),
  },
  methods: {
    ...mapActions({
      asyncGetImgList: Constant.GET_IMG_LIST,
    }),
    ...mapMutations({
      setCurrenturl: Constant.SET_CURRENTURL,
    }),
    addItem(newUrl) {
      this.items.push(newUrl);
    },
    imgOnload(fn, url) {
      const img = new Image();
      const src = url;
      img.src = src;
      img.onload = function onload() {
        fn(url);
      };
    },
  },
  components: {
  },
  watch: {
    currentUrl(newUrl, oldUrl) {
      this.imgOnload(this.addItem, newUrl);
    },
  },
};
</script>
<style lang="scss">
.main-section {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
  }
}
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.img-wrap {
  position: relative;
  width: 500px;
  height: 500px;
  box-shadow: 0 20px 32px 0 rgba(0,0,0,0.3),0 12px 40px 0 rgba(0,0,0,0.29) !important;
  border-radius: 10px;
  overflow: hidden;
  &>li {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
