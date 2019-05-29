<template>
  <div class="container-fluid pl-0 pr-0">
    <div class="addList-components row">
      <div class="block-title col-12 d-flex justify-content-center align-items-center">
        <h2 class="title">Add List</h2>
      </div>
      <div class="addList col-12">
            <AddList/>
      </div>

      <div class="col-12">
        <div class="content row">
          <div class="col-2 pl-0 pr-0">
            <Week/>
          </div>
          <div class="col-10 pl-0 pr-0">
            <MyLists/>
          </div>
          <div class="col-3 pl-0 pr-0">
            <List/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddList from '../components/AddList/index';
import Week from '../components/AddList/week';
import MyLists from '../components/AddList/myListWeek';
import List from '../components/AddList/list';

export default {
  components: {
    AddList,
    Week,
    MyLists,
    List
  }
};
</script>
<style scoped>
.addlist {
  width: 100%;
}
.block-title {
  font-family: 'Nunito', sans-serif;
  background-color: #1c2324;
  color: #fff;
  height: 50px;
  box-shadow: 0 5px 10px rgba(0,0,0,.05);;
}
.addList{
  background-color: #fff;
}
</style>


