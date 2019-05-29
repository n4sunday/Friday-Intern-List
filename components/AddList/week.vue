<template>
  <div class="week-component">
    <div class="week-item">
      <strong>WEEK</strong>
    </div>
    <div
      v-for="(week, index) in Weeks"
      :key="week.key"
      :state="week.state"
      class="d-flex align-items-center justify-content-center"
    >
      <div class="bt-main-week ">
          <div @click="WeekSelect(index)" :class="{Active: activeIndex === index}"
          class="bt-week d-flex align-items-center justify-content-center" >Week{{week.id}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      Weeks: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
      ],
      activeIndex: 0,
    };
  },
  methods: {
    WeekSelect(index){
      this.activeIndex = index
      const select = "Week "+this.Weeks[index].id
      this.$store.commit('setWeek',select)
    }
  }
};
</script>
<style scoped>
.week-component {
  font-family: 'Nunito', sans-serif;
  margin: 10px;
  margin-right: 0px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #d7dfe3;
  background-color: #fff;
}
.week-item {
  font-size: 20px;
}
.bt-main-week {
  width: 100%;
  cursor: pointer;
  user-select: none;
  border-radius: 2px;
  text-align: center;
  font-size: 18px;
}
.bt-week {
  height: 35px;
  background-color: #fff;
  border-left: 3px solid #fff;
}
.bt-week.Active {
  background-color: #f0f0f0;
  border-left: 3px solid #009efb;
}
.bt-week:hover {
  background-color: #f0f0f0;
  border-left: 3px solid #009efb;
}
</style>
//border-left: 5px solid red;