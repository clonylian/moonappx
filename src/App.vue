<template>
  <div class="ymian flex">
    <div class="ycontent">
      <div v-show="show" class="box_hed">
        <div class="tank">
          <img src="./assets/12.png">
          <div class="tank_one">
            <h1>MOON APPA</h1>
            <p @click="guanb" >DD TO HOME SCREEN</p>
          </div>
        </div>
        <div>
          <svg @click="guanb" t="1699936009143" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4021" width="16" height="16">
            <path
              d="M558.933333 529.066667l285.866667 285.866666-29.866667 29.866667-285.866666-285.866667-285.866667 285.866667-29.866667-29.866667 285.866667-285.866666L213.333333 243.2l29.866667-29.866667 285.866667 285.866667L814.933333 213.333333l29.866667 29.866667-285.866667 285.866667z"
              fill="#2c2c2c" p-id="4022"></path>
          </svg>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(true)
const guanb=()=>{
  show.value=false
}

</script>
<style>
.box_hed {
  width: 80%;
  height: 3rem;
  border: 2px black solid;
  border-radius: 15px;
  background-color: white;
  position: absolute;
  margin: 0 auto;
  z-index: 1;
  padding: 1rem;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
}
.tank{
  display: flex;
  justify-content: center;
    align-items: center;
}
.tank>img{
width: 40px;
height: 40px;
}
.tank_one{
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
}
.tank_one>h1{
    font-size: 24px;
}
.tank_one>p{
  padding: 0.3rem;
  color: white;
  background-color: rgb(153, 220, 113);
}
.ymian {
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.ycontent {
  width: 20%;
  height: 90vh;
  position: relative;
}
@media (max-width: 1250px) {
  .ycontent {
    width: 100%;
    height: 100%;
  }
  .ypolicy {
    overflow-y: scroll;
  }
  .yfoot {
    width: 100% !important;
    bottom: 0 !important;
  }
  .ytradebot {
    width: 95% !important;
  }
  .ytradeboxt {
    width: 100%;
    height: 100%;

    overflow-y: scroll;
  }
  .ytradeboxtt {
    padding-bottom: 10rem;
  }
  .ytradess > input {
    width: 77.5% !important;
  }
  .yset {
    overflow-y: scroll;
  }
  .ychangeyx {
    overflow-y: scroll;
  }
  .ypassword {
    overflow-y: scroll;
  }
  .ytradethree {
    width: 100% !important;
    height: 100%;
    overflow-y: scroll;
  }
  .ytradethree input {
    width: 70% !important;
  }
  .ytradetwo {
    overflow-y: scroll;
    padding-bottom: 10rem;
  }
  .ytradethfour {
    width: 100% !important;
    height: 100% !important;
    overflow-y: scroll;
  }
  .ytradeconbuts {
    padding-bottom: 8rem;
  }
  .ytradefive {
    width: 100% !important;
    height: 100% !important;
    overflow-y: scroll;
  }
  .ytradefivebox {
    height: 55% !important;
  }
  .ytradeboxtytwof input {
    width: 70% !important;
  }
}
</style>
