<template>
  <div class="addlist-components">
    <div class="row">
      <div class="col-12 addlist">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <select class="select-Day">
            <option>Week 1</option>
            <option>Week 2</option>
            <option>Week 3</option>
            <option>Week 4</option>
          </select>
          <select class="select-Day">
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
          <input class="inputList">
          <div class="bt-Addlist d-flex align-items-center justify-content-center">Add List</div>
        </div>
        <div class="col-12 mt-2 select-line d-flex justify-content-center">
          <div class="bt-line HW" :class="b4center">Hardware</div>
          <div class="bt-line SW" :class="b4center">Software</div>
          <div class="bt-line NW" :class="b4center">Network</div>
          <div class="bt-line DB" :class="b4center">Database</div>
          <div class="bt-line FE" :class="b4center">Frontend</div>
          <div class="bt-line BE" :class="b4center">Backend</div>       
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  data: function(){
    return {
      b4center:'d-flex align-items-center justify-content-center',
    }
  }
};
</script>
><style>
.addlist-components {

  font-family: 'Nunito', sans-serif;
}
.addlist {
  padding: 10px 0 10px 0;
  width: 100%;
  -webkit-box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.2);
}
.select-Day {
  outline: none;
  width: 110px;
  height: 35px;
  margin: 0 10px 0 10px;
}
.select-line {
  user-select: none;
  cursor: pointer;
  color: #fff;
}
.bt-line {
  font-size: 13px;
  margin: 0 2px 0 2px;
  width: 90px;
  height: 30px;
  text-align: center;
  align-items: center;
  
}
.HW {
  background: #FF463B;
}
.HW:hover {
  background: #FF8585;
}
.SW {
  
  background: #27a4dd;
}
.SW:hover {
  background: #6EC0FF;
}
.NW {
  background: #9dd5c0;
}
.NW:hover {
  background: #6EFF8D;
}
.DB {
  background: #fac174;
}
.DB:hover {
  background: #FBE1BF;
}
.FE {
  background: #f39cc3;
}
.FE:hover {
  background: #FACEEF;
}
.BE {
  background: #B5B5E6;
}
.BE:hover {
  background: #BBCCFC;
}
.inputList {
  border-width: 1px;
  border-style: solid;
  border-color: #c4c4c4;
  outline: none;
  background: #fff;
  width: 250px;
  height: 35px;
  border-radius: 20px;
  padding: 10px 10px 10px 10px;
}
.bt-Addlist {
  user-select: none;
  cursor: pointer;
  color: #fff;
  width: 100px;
  height: 35px;
  background: #3091ff;
  border-radius: 20px;
  margin: 0 10px 0 10px;
}
.bt-Addlist:hover {
  background: #2265b3;
}
</style>


