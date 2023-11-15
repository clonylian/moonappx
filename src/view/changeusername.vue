<template>
  <div class="ychangenametit flex">
    <router-link to="/connectwellet">
      <svg
        data-v-3e02de3f=""
        class="clone"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style="width: 25px; height: 25px"
      >
        <path
          data-v-3e02de3f=""
          d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
        ></path>
      </svg>
    </router-link>
    <h2>{{ $store.state.txt.walletname }}</h2>
  </div>
  <div class="ychangenamebox flex jus">
    <input
      type="text"
      v-model="inputvalue"
      @input="inpplace()"
      :placeholder="$store.state.txt.walletplace"
    />
    <button @click="changename()" :class="huanse == '1' ? 'yhuanse' : ''">
      {{ $store.state.txt.walletcbutcon }}
    </button>
  </div>
</template>

<script>
import api from "@/common/api";
export default {
  data() {
    return {
      inputvalue: "",
      usertoken: "",
      userid: "",
      token: "",
      huanse: "0",
    };
  },
  methods: {
    inpplace() {
      if (this.inputvalue != "") {
        this.huanse = "1";
      } else {
        this.huanse = "0";
      }
    },
    changename() {
      api
        .name({
          userId: this.userid,
          token: this.token,
          // userId: "123456",
          // token: "abcdef123456",
          walletAddress: localStorage.getItem("walletAddress"),
          name: this.inputvalue,
        })
        .then((res) => {
          console.log(res.data.status);
          if (res.data.status == "success") {
            this.$router.push("/connectwellet");
          } else {
            alert("Nickname modification failed");
          }
        });
    },
  },
  mounted() {
    let useroken = localStorage.getItem("userData");
    this.userid = useroken.userid;
    this.token = useroken.token;
  },
};
</script>

<style scoped>
.ychangenametit svg {
  width: 1.5625rem;
  height: 1.5625rem;
}
.ychangenametit h2 {
  font-weight: 400;
  width: 100%;
  text-align: center;
}
.ychangenamebox {
  height: 90%;
  flex-direction: column;
  align-items: center;
}
.ychangenamebox input {
  width: 90%;
  display: flex;
  border: 0.0625rem solid black;
  padding: 0.65rem;
  box-sizing: border-box;
  border-radius: 1rem;
  margin: 1rem auto;
}
.ychangenamebox button {
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
  margin-bottom: 0.75rem;
}
.yhuanse {
  background: rgb(153, 220, 113) !important;
  cursor: pointer;
}
</style>
