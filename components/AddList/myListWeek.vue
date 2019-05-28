<template>
  <div class="MyList-Component">
    <strong class="h3">MY DAY LIST</strong>
    <div class="row">
      <div class="col-2 mt-2">
        <div v-for="(week, index) in Week" :key="week.key" :day="week.day">
          <div
            class="day d-flex align-items-center justify-content-center"
            :class="week.day"
          >{{week.day}}</div>
        </div>
      </div>
      <div class="col-10 mt-2">
        <div v-for="(list, index) in Lists" :key="list.key" :list="list.list">
          <div class="day-activity d-flex bd-highlight align-items-center">
            <div class="p-2 w-100 bd-highlight">
              <div class="d-flex align-items-center">
                <div class="day-active d-flex justify-content-start">{{list.list}}</div>
              </div>
            </div>
            <div class="p-2 flex-shrink-1 bd-highlight d-flex justify-content-end align-items-center" >
              <div class="skill">Hardware</div>
              <div class="skill">Software</div>
              <div class="skill">Network</div>
              <div class="skill">Database</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      Week: [
        { id: 1, day: 'Monday' },
        { id: 2, day: 'Tuesday' },
        { id: 3, day: 'Wednesday' },
        { id: 4, day: 'Thursday' },
        { id: 5, day: 'Friday' },
        { id: 6, day: 'Saturday' },
        { id: 7, day: 'Sunday' }
      ],
      Lists: [
        { id: 1, list: 'Run' },
        { id: 2, list: 'Sleep' },
        { id: 3, list: 'Play Game' },
        { id: 4, list: 'Swimming' },
        { id: 5, list: 'Programming' },
        { id: 6, list: 'Driver Car' },
        { id: 7, list: 'Watch TV' }
      ]
    };
  }
};
</script>
<style scoped>
.MyList-Component {
  font-family: 'Nunito', sans-serif;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08);
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}
.day {
  cursor: pointer;
  user-select: none;
  margin: 5px;
  width: 100%;
  height: 40px;
  background: #fff;
  border: 1px solid #e8e8e8;
}
.day:hover {
  color: #575757;
}
.Monday:hover {
  background: #ffffba;
}
.Tuesday:hover {
  background: #faceef;
}
.Wednesday:hover {
  background: #baffc9;
}
.Thursday:hover {
  background: #ffdfba;
}
.Friday:hover {
  background: #bae1ff;
}
.Saturday:hover {
  background: #dfcdff;
}
.Sunday:hover {
  background: #ffb3ba;
}
.day-activity {
  padding: 10px;
  cursor: pointer;
  user-select: none;
  margin: 5px;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  height: 40px;
}
.day-active {
  background: #fff;
}
.skill {
  text-align: center;
  width: 100px;
  font-size: 14px;
  margin-bottom: 3px;
  margin-right: 5px;
  color: #393939;
  margin-top: 3px;
  padding: 1px 10px;
  background-color: #eee;
  border-radius: 4px;
}
</style>
