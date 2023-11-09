<template>
  <div :class="yearnact == '0' ? 'yearn' : 'yearnbg'">
    <div class="yearny">
      <div class="yearntop flex jus">
        <h2>赚</h2>
        <div></div>
        <span>setting</span>
      </div>
      <div class="yearntwo flex jus">
        <div
          @click="clickearn('0')"
          :class="yearnact == '0' ? 'yearnactive' : ''"
        >
          推荐人
        </div>
        <div
          @click="clickearn('1')"
          :class="yearnact == '1' ? 'yearnactive' : ''"
        >
          MOON Drop
        </div>
      </div>
      <div :class="yearnact == '0' ? 'yearnshow' : 'yearnnone'">
        <div class="yearnbox">
          <span>可领取的奖励</span>
          <h2><span>0</span> ETH</h2>
          <div>0 ETH - Lifetime</div>
          <div class="yearnlq flex">领取</div>
        </div>
        <div class="yearncon flex jus">
          <div class="yearncony">
            <h2>20%</h2>
            <span>佣金 (质押以提高返佣比例)</span>
          </div>
          <div class="yearncont">
            <h2>质押</h2>
            <span>(即将推出)</span>
          </div>
          <div class="yearncony">
            <h2>0.5 ETH</h2>
            <span>每 1 佣金的预计收入</span>
          </div>
        </div>
        <img
          class="yearnymoon"
          src="../assets/Moon-removebg-preview.png"
          alt=""
        />
        <div class="yearnfri">
          <button>邀请朋友</button>
          <div class="yearnfribox">
            <div class="yearnfriboxtop">奖励</div>
            <div class="flex jus yearnfrisbox">
              <div>邀请朋友： <span>0</span></div>
              <button>邀请</button>
            </div>
          </div>
        </div>
      </div>
      <div :class="yearnact == '1' ? 'yearnshow' : 'yearnnone'">
        <div class="yearnmdboxy flex jus">
          <div class="yearnmdboxyleft">
            <span>您的积分</span>
            <div>0</div>
          </div>
          <div class="yearnmdboxyright">
            <h2>#25206</h2>
            <span>你在排行榜上</span>
          </div>
        </div>
        <div class="yearnmdboxt flex jus">
          <div class="yearnmdbcon flex jus">
            <div>获取提升</div>
            <img src="../assets/moonx5.png" alt="" />
          </div>
          <a href="https://www.moonapp.io/" target="_blank" class="yearnmdcont">
            <div>☆</div>
            <span>代币赋能</span>
          </a>
        </div>
        <div class="yearnmdboxs flex">
          <span>完成今天的每日任务</span>
          <div>交易</div>
        </div>
        <div class="yearnmdboxf">
          <div class="yearnmdboxfy">
            <div class="yearnmdboxfycon flex">
              <span>每日提升激活：</span>
              <span>不活跃</span>
            </div>
            <div class="yearnmdboxfycon flex">
              <span>任务提升已激活：</span>
              <span>不活跃</span>
            </div>
            <div class="yearnmdboxfycon flex">
              <span>总提升：</span>
              <span>x1</span>
            </div>
          </div>
          <div class="yearnmdboxft">
            <div class="yearnmdboxfty">积累积分</div>
            <div class="yearnmdboxftt flex jus">
              <span>Trade:</span>
              <span>5 pts</span>
            </div>
            <div class="yearnmdboxftt flex jus">
              <span>Refer a friend:</span>
              <span>10 pts</span>
            </div>
            <div class="yearnmdboxftt flex jus">
              <span>Limit order:</span>
              <span>10 pts</span>
            </div>
            <div class="yearnmdboxftt flex jus">
              <span>Sandwich:</span>
              <span>20 pts</span>
            </div>
            <div class="yearnmdboxftt flex jus">
              <span>Snipe presale:</span>
              <span>10 pts</span>
            </div>
            <div class="yearnmdboxftt flex jus">
              <span>Snipe liquidity:</span>
              <span>20 pts</span>
            </div>
            <div class="yearnmdboxftt flex jus">
              <span>Follow Twitter:</span>
              <span>10 pts</span>
            </div>
            <div class="yearnmdboxftt flex jus">
              <span>Jion Telegram:</span>
              <span>10 pts</span>
            </div>
            <div class="yearnmdboxfty" style="margin-top: 1rem">
              所有收到的积分
            </div>
          </div>
        </div>
        <div class="yearnmdboxwu">
          <h3>排行榜</h3>
          <div class="yearnmdboxwcon">
            你是 <span>#25206</span> <span>(0)</span>
          </div>
          <div class="yearnphb">
            <div class="yearnphby flex jus">
              <div class="yearnphbleft">
                <span>#</span>
                <span style="margin-left: 1.5rem">用户名</span>
              </div>
              <div class="yearnphbright">积分</div>
            </div>
            <div
              class="yearnphbt flex jus"
              v-for="item in yearnphb"
              :key="item.id"
            >
              <div class="yearnphbtleft">
                <span>{{ item.id }}</span>
                <span style="margin-left: 1.5rem">{{ item.username }}</span>
              </div>
              <div class="yearnphbtright">{{ item.integral }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Foot from "../components/foot.vue";
let yearnact = ref("0");
let yearnphb = ref([
  { id: "1", username: "Akash", integral: "251,600" },
  { id: "2", username: "mnrfqh", integral: "242,580" },
  { id: "3", username: "w3bD4nny", integral: "223,830" },
  { id: "4", username: "setya", integral: "32,300" },
  { id: "5", username: "fitamoly", integral: "23,300" },
  { id: "6", username: "avoi3ce", integral: "21,100" },
  { id: "7", username: "yuechuzi", integral: "17,490" },
  { id: "8", username: "nixon123", integral: "8,420" },
  { id: "9", username: "foxhounz", integral: "7,870" },
  { id: "10", username: "wwdsj", integral: "6,220" },
]);
let clickearn = (str) => {
  yearnact.value = str;
};
</script>

<style scoped>
.yearnshow {
  display: block;
}
.yearnnone {
  display: none;
}
.yearn {
  width: 100%;
  height: 100%;
  position: relative;
  background: rgb(130, 137, 232);
  box-sizing: border-box;
}
.yearnbg {
  width: 100%;
  height: 100%;
  position: relative;
  background: rgb(2, 2, 2);
  box-sizing: border-box;
}
.yearny {
  height: 100%;
  padding: 3rem 1rem 10rem;
  box-sizing: border-box;
  width: 100%;
  overflow-y: scroll;
}
.yearny::-webkit-scrollbar {
  width: 0.625rem;
  height: 0.625rem;
}
.yearny::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}
.yearny::-webkit-scrollbar-thumb {
  background: rgba(117, 123, 208, 0.2);
  border-radius: 10px;
}
.yearny::-webkit-scrollbar-corner {
  background: transparent;
}
.yearny::-webkit-scrollbar-thumb:hover {
  background: rgb(65, 68, 116);
}
.yearntop {
  align-items: center;
  column-gap: 0.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
}
.yearntop h2 {
  font-size: 1.5rem;
  color: white;
  font-weight: 550;
}
.yearntop div {
  width: 60%;
  height: 0.125rem;
  background: white;
}
.yearntop span {
  font-size: 1.25rem;
  color: white;
  font-weight: 550;
  cursor: pointer;
}
.yearntwo {
  width: 100%;
  margin: 1rem 0;
  background: rgb(21, 22, 26);
  padding: 0.5rem;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: white;
  border: 0.125rem solid rgb(21, 22, 26);
}
.yearnbg .yearntwo {
  border-color: white;
}
.yearntwo div {
  width: 48.5%;
  padding: 0.75rem;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.yearntwo .yearnactive {
  background: white;
  color: rgb(21, 22, 26);
  border-radius: 1rem;
}
.yearnshow {
  padding: 5rem 1rem 0;
  width: 100%;
  box-sizing: border-box;
}
.yearnbox {
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 0.0625rem solid black;
  background: rgb(154, 221, 111);
  text-align: center;
  position: relative;
}
.yearnbox > span {
  font-size: 0.85rem;
  font-weight: 400;
}
.yearnbox h2 {
  font-size: 2rem;
  font-weight: 550;
}
.yearnbox > div {
  font-size: 0.75rem;
  font-weight: 450;
}
.yearnlq {
  position: absolute;
  width: 4rem;
  height: 4rem;
  background: rgb(177, 177, 177);
  font-size: 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.125rem solid black;
  top: 45%;
  transform: translateY(-50%);
  right: -0.5rem;
  cursor: pointer;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 1);
}
.yearnlq:hover {
  background: rgb(170, 170, 170);
}
.yearncon {
  align-items: center;
  column-gap: 3.3%;
  margin-top: 0.75rem;
  position: relative;
  z-index: 10;
}
.yearncon div {
  width: 30%;
  height: 4.5rem;
  text-align: center;
  padding: 0.5rem 0;
  border: 0.125rem solid black;
  box-sizing: border-box;
  background: white;
  border-radius: 1rem;
}
.yearncon h2 {
  font-size: 1.15rem;
  font-weight: 550;
  margin-bottom: 0.25rem;
}
.yearncon span {
  display: block;
  font-size: 0.6rem;
  line-height: 1.3;
  color: black;
}
.yearncon .yearncont {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 1);
  background: rgb(177, 177, 177);
}
.yearnymoon {
  width: 70%;
  margin-top: -2rem;
  transform: translateX(10%);
}
.yearnfri {
  width: 100%;
}
.yearnfri > button {
  width: 100%;
  display: block;
  padding: 1.15rem;
  box-sizing: border-box;
  border-radius: 1rem;
  font-size: 1.25rem;
  background: rgb(255, 229, 0);
  box-shadow: 4px 4px 8px white;
}
.yearnfribox {
  width: 100%;
  height: 11.25rem;
  padding: 0.75rem 1rem;
  border: 0.125rem solid white;
  border-radius: 1rem;
  margin-top: 1.5rem;
  background: rgb(21, 22, 26);
  box-shadow: 2px 2px 4px white, -2px -2px 4px white, 2px -2px 4px white,
    -2px 2px 4px white;
  box-sizing: border-box;
}
.yearnfrisbox {
  box-sizing: border-box;
}
.yearnfriboxtop {
  text-align: center;
  font-size: 1.25rem;
  color: white;
  margin-bottom: 0.5rem;
}
.yearnfrisbox div {
  color: rgb(154, 221, 111);
}
.yearnfrisbox {
  align-items: center;
}
.yearnfrisbox div span {
  color: white;
}
.yearnfrisbox button {
  padding: 0.25rem 0.5rem;
  border: 0.0625rem solid rgb(154, 221, 111);
  background: transparent;
  color: rgb(154, 221, 111);
  border-radius: 1rem;
}
.yearnmdboxy {
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgb(154, 221, 111);
  border: 0.125rem solid black;
  box-sizing: border-box;
  align-items: center;
  border-radius: 1.5rem;
}
.yearnmdboxyleft span {
  font-size: 0.9rem;
}
.yearnmdboxyleft div {
  font-size: 2.5rem;
  font-weight: 600;
}
.yearnmdboxyright {
  padding: 0.5rem 1rem;
  border: 0.125rem solid black;
  background: rgb(255, 229, 0);
  box-sizing: border-box;
  border-radius: 1rem;
}
.yearnmdboxyright h2 {
  font-size: 1.5rem;
}
.yearnmdboxyright span {
  display: block;
  text-align: center;
  font-size: 0.75rem;
}
.yearnmdboxt {
  margin-top: 0.75rem;
  column-gap: 5%;
  margin-bottom: 8rem;
}
.yearnmdbcon {
  width: 65%;
  border: 0.125rem solid rgb(255, 229, 0);
  padding: 0.5rem 1.75rem;
  box-sizing: border-box;
  background: rgb(21, 22, 26);
  border-radius: 1rem;
  box-shadow: 4px 4px 8px rgb(255, 229, 0);
  align-items: center;
}
.yearnmdbcon img {
  width: 2.25rem;
}
.yearnmdbcon div {
  color: white;
}
.yearnmdcont {
  width: 30%;
  border: 0.125rem solid rgb(130, 137, 232);
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  color: rgb(130, 137, 232);
  border-radius: 1rem;
}
.yearnmdcont div {
  width: 2.25rem;
  height: 2.25rem;
  box-sizing: border-box;
  line-height: 0.8;
  font-size: 1.25rem;
  border-radius: 50%;
  padding: 0.5rem;
  text-align: center;
  border: 0.125rem solid rgb(130, 137, 232);
  margin: 0 auto;
}
.yearnmdcont span {
  display: block;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}
.yearnmdboxs {
  width: 100%;
  padding: 1.25rem 1rem;
  background: rgb(255, 229, 0);
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 4px 4px 8px white;
}
.yearnmdboxs:hover {
  background: rgb(245, 220, 0);
}
.yearnmdboxs span {
  width: 50%;
  font-size: 0.8rem;
  padding: 0 0.5rem;
  border-right: 0.125rem solid black;
  text-align: right;
  box-sizing: border-box;
}
.yearnmdboxs div {
  width: 50%;
  text-align: center;
  font-size: 2rem;
}
.yearnmdboxf {
  margin: 1rem 0 3rem;
  width: 100%;
  height: auto;
}
.yearnmdboxfy {
  width: 100%;
  padding: 1rem 0 1.25rem;
  box-sizing: border-box;
  background: rgb(154, 221, 111);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}
.yearnmdboxfycon {
  justify-content: center;
  font-size: 0.9rem;
  padding: 0.05rem 0;
}
.yearnmdboxfycon span:nth-child(2) {
  color: rgb(130, 137, 232);
}
.yearnmdboxft {
  width: 100%;
  padding: 2.25rem 1rem;
  border: 0.125rem solid white;
  border-top: 0;
  box-sizing: border-box;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.yearnmdboxfty {
  font-size: 1.25rem;
  color: white;
  text-align: center;
}
.yearnmdboxftt span {
  font-size: 0.9rem;
  padding: 0.5rem 0;
  color: white;
  font-weight: 550;
}
.yearnmdboxftt span:nth-child(1) {
  color: rgb(154, 221, 111);
  text-decoration: underline;
}
.yearnmdboxwu {
  width: 100%;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
  border: 0.125rem solid white;
  border-radius: 1.5rem;
}
.yearnmdboxwu h3 {
  font-size: 1.25rem;
  color: white;
  font-weight: 400;
  text-align: center;
}
.yearnmdboxwcon {
  font-size: 0.8rem;
  color: white;
  text-align: center;
}
.yearnmdboxwcon span:nth-child(1) {
  color: rgb(130, 137, 232);
}
.yearnmdboxwcon span:nth-child(2) {
  color: rgb(154, 221, 111);
}
.yearnphb {
  width: 100%;
  margin: 0.5rem 0;
}
.yearnphbleft {
  font-size: 0.7rem;
  color: rgb(177, 177, 177);
}
.yearnphbright {
  font-size: 0.7rem;
  color: rgb(177, 177, 177);
}
.yearnphbt {
  width: 100%;
  padding: 0.25rem 0;
  font-weight: 550;
  font-size: 0.9rem;
  color: white;
}
</style>
