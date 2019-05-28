<template>
  <div class=" container-fluid pr-0 pl-0">
    <div class="addList-components row">
      <div class="block-title col-12">
        <h2 class="title">Add List</h2>
      </div>
      <div class="col-12">
        <AddList/>
      </div>
      <div class="col-12">
        <div class="content row ">
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
.addList-components{
}
.block-title {
  text-align: center;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
}
.title {
  height: 50px;
  padding: 5px 0 5px 0;
}
</style>


