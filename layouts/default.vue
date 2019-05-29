<template>
  <div class="container-fluid">
    <div class="row">
      <div class="sidebar">
        <div :class="b4center">
          <nuxt-link to="/">
            <img :src="HomeIcon" class="HomeIcon change-my-color">
          </nuxt-link>
        </div>
        <div :class="b4center">
          <nuxt-link to="/addList">
            <img :src="AddList" class="HomeIcon">
          </nuxt-link>
        </div>
      </div>
      <div class="col">
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import {store} from '../store/store'
import HomeIcon from '~/static/icon/home-sketch-w.svg';
import AddList from '~/static/icon/file-sketch-with-text-lines.svg';
export default {
  store,
  data: function() {
    return {
      b4center: 'd-flex align-items-center justify-content-center',
      HomeIcon,
      AddList
    };
  }
};
</script>

<style scoped>
.container-fluid {
  background-color: #ecf3f7;
}
.HomeIcon {
  margin: 8px;
  width: 40px;
  transition: 400ms linear;  
}
.HomeIcon:hover {
  transition: 400ms linear;  
  filter: brightness(0.5);

}
.sidebar {
  background-color: #00254f;
  height: 100vh;
  width: 60px;
}

</style>
