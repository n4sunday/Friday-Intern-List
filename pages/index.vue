<template>
  <div class="container-fluid" :class="b4center">
    <div class="home" >Intern List</div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  },
  data: function(){
    return {
      b4center:"d-flex justify-content-center align-items-center"
    }
  }
};
</script>

<style scoped>
.container-fluid{
  height: 100vh;
}
.home{
  font-size: 80px;
}
</style>
