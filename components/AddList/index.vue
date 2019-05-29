<template>
  <div class="addlist-components">
    <div class="row">
      <div class="col-12 addlist">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <select class="select-Day"  v-model.number="selectWeek">
            <option value="1">Week 1</option>
            <option value="2">Week 2</option>
            <option value="3">Week 3</option>
            <option value="4">Week 4</option>
          </select>
          <select class="select-Day" v-model.number="selectDay">
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
            <option value="7">Sunday</option>
          </select>
          <input class="inputList" v-model.number="inputList">
          <div class="bt-Addlist d-flex align-items-center justify-content-center" @click='addData'>Add List</div>
        </div>
        <div class="col-12 mt-2 select-line d-flex justify-content-center">
          <div class="bt-line HW" :class="statusBt[0].v" @click="selectSkillfunc(0)" >{{skillName[0]}}</div>
          <div class="bt-line SW" :class="statusBt[1].v" @click="selectSkillfunc(1)" >{{skillName[1]}}</div>
          <div class="bt-line NW" :class="statusBt[2].v" @click="selectSkillfunc(2)" >{{skillName[2]}}</div>
          <div class="bt-line DB" :class="statusBt[3].v" @click="selectSkillfunc(3)" >{{skillName[3]}}</div>
          <div class="bt-line FE" @click="selectSkillfunc(4)" :class="statusBt[4].v">{{skillName[4]}}</div>
          <div class="bt-line BE" @click="selectSkillfunc(5)" :class="statusBt[5].v">{{skillName[5]}}</div>       
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  data: function(){
    return {
      skillName:['Hardware','Software','Network','Database','Frontend','Backend'],
      selectWeek:'1',
      selectDay:'1',
      inputList:'',
      skillInput:[],
      selectSkill:[false,false,false,false,false,false],
      statusBt:[{v:''},{v:''},{v:''},{v:''},{v:''},{v:''}],
      dataInput:[]
    }
  },
  methods:{
    addData: function(){
        this.dataInput=[]
        for(var i=0; i<6; i++){
          if(this.selectSkill[i]===true){
             this.skillInput.push(
                this.skillName[i]
             )
             this.selectSkillfunc(i)
          }
        }
        this.dataInput.push(this.selectDay ,this.inputList,this.skillInput)
        this.Input(this.dataInput)
        this.inputList=''
        console.log("SS:",this.selectSkill);
    },
    selectSkillfunc: function(x){
       this.selectSkill[x] = !this.selectSkill[x]
       if(this.selectSkill[x]===true)
         this.statusBt[x].v = 'Active'
       else
         this.statusBt[x].v = ''
       console.log("Select : ",this.selectSkill[x]);

    },
    Input:function(event){
      this.$store.commit('setDataInput',event)
    }
  }
};
</script>
><style>
.addlist-components {
  
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: 'Nunito', sans-serif;
}
.addlist {
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  color:#242633;
  font-size: 13px;
  margin: 0 2px 0 2px;
  width: 90px;
  height: 30px;
  text-align: center;
  align-items: center;
   transition: 400ms linear;  
}
.bt-line:hover{
  transition: 400ms linear;  
}
.HW {
  border: 2px solid #FF463B;
}
.HW:hover {
  background: #FF463B;
  color:#fff;
}
.HW.Active {
  background: #FF8585;
  color:#fff;
}
.SW {
  border: 2px solid #27a4dd;
}
.SW:hover {
  background: #27a4dd;
  color:#242633;
}
.SW.Active {
  background: #6EC0FF;
  color:#242633;
}
.NW {
  border: 2px solid #56a76f;
}
.NW:hover {
  background: #56a76f;
  color:#242633;
}
.NW.Active {
  background: #57BD94;
  color:#242633;
}
.DB {
  border: 2px solid #fac174;
}
.DB:hover {
  background: #fac174;
  color:#242633;
}
.DB.Active {
  background: #FBE1BF;
}
.FE {
  border: 2px solid #f39cc3;
}
.FE:hover {
  background: #f39cc3;
  color:#242633;
}
.FE.Active {
  background: #FACEEF;
}
.BE {
  border: 2px solid #B5B5E6;
}
.BE:hover {
  background: #B5B5E6;
  color:#242633;
}
.BE.Active {
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


