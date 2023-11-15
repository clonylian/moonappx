<template>
  <view class="yforget">
    <div class="yforgettop">
      <div class="ychangeusertopyti flex">
        <svg
          @click="goForward()"
          style="width: 25px; height: 25px"
          class="clone"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          ></path>
        </svg>
        <h2>{{ $store.state.txt.changepasstit }}</h2>
      </div>
      <div class="yforgetinp">
        <input
          v-model="passwordy"
          type="text"
          :placeholder="$store.state.txt.enterpassword"
        />
      </div>
      <div class="yforgetinp">
        <input
          @input="enterpassword()"
          v-model="passwordt"
          type="text"
          :placeholder="$store.state.txt.enterpassword"
        />
      </div>
    </div>
    <div class="yforgetbot">
      <button
        @click="setpass()"
        ref="settingpass"
        :class="enter == '1' ? 'yforgetl' : ''"
      >
        {{ $store.state.txt.setpass }}
      </button>
    </div>
  </view>
</template>

<script>
import api from "../common/api";
export default {
  data() {
    return {
      passwordy: "",
      passwordt: "",
      enter: "0",
      userid: "",
    };
  },
  methods: {
    enterpassword() {
      if (this.passwordy != "" && this.passwordt != "") {
        this.enter = "1";
      }
    },
    setpass() {
      if (this.passwordy != "" && this.passwordt != "") {
        api
          .changepassword({
            userId: this.userid,
            oldPassword: this.passwordy,
            newPassword: this.passwordt,
          })
          .then((res) => {
            console.log(res.data.status);
            if (res.data.status == "success") {
              this.$router.push("/setting");
            }
          });
      }
    },
    goForward() {
      this.$router.go(-1);
    },
  },
  mounted() {
    // let useroken = localStorage.getItem("userData");
    // this.userid = useroken.userid;
    // this.userid = "123456";
  },
};
</script>

<style scoped>
.ychangeusertopyti {
  align-items: center;
  margin-bottom: 1rem;
}
.ychangeusertopyti svg {
  cursor: pointer;
}
.ychangeusertopyti h2 {
  font-weight: 400;
  width: 100%;
  text-align: center;
}
.butnone > button:nth-child(1) {
  display: none !important;
}
.none {
  display: none !important;
}
.yforget {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.yforgetjs {
  display: block;
  font-size: 0.9rem;
  font-weight: 400;
  word-wrap: break-word;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.yforgetinp {
  width: 90%;
  padding: 0.5rem;
  margin: 1.5rem auto 0;
  box-sizing: border-box;
  border-radius: 1.15rem;
  border: 2px solid black;
}
.yforgetinp > input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
}
.yforgetbot {
  width: 85%;
  margin: 0 auto;
}

.yforgetbot > button {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: rgb(177, 177, 177);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  margin: 0.75rem 0;
}
.yforgetbot > a {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: rgb(177, 177, 177);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  margin: 0.75rem 0;
}

.yforgetbot > button:nth-child(2) {
  background: white;
}
.yforgetl {
  background: rgb(154, 221, 111) !important;
  cursor: pointer;
}
</style>
