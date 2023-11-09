<template>
  <div>
    <div class="head">
      <svg
        @click="gologin"
        class="clone"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
        ></path>
      </svg>
      <p class="head_one">{{ reg }}</p>
      <p class="head_two">&nbsp &nbsp &nbsp &nbsp</p>
    </div>
    <p class="head_two">{{ regs }}</p>
    <div class="reginput">
      <div class="regtwo">
        <div class="regp">
          <input
            type="text"
            v-model="inputValue"
            @input="checkInput"
            placeholder="输入用户名"
          />
        </div>
        <p class="regpone">{{ moon }}<b></b></p>
      </div>
      <div
        :style="{ backgroundColor: buttonColor }"
        @click="gopass"
        :disabled="disableButton"
        class="regthree"
      >
        {{ jixu }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reg: "创建用户名",
      regs: "用户名将用作您推荐朋友的代码？",
      moon: "户名应介于4至22个字符之间，仅由英文字母和数字组成",
      jixu: "继续",
      showPassword: false,
      inputValue: "",
      buttonColor: "#b1b1b1",
      disableButton: true,
    };
  },
  methods: {
    gopass() {
      if (this.inputValue == "") {
      } else {
        this.$router.push("/recommend");
      }
    },
    gologin() {
      this.$router.push("/password");
    },
    checkInput() {
      const expectedValue = /^[a-zA-Z0-9_]{4,16}$/;
      if (expectedValue.test(this.inputValue)) {
        this.buttonColor = "#9ad36f";
        this.disableButton = false;
      } else {
        this.buttonColor = "#b1b1b1";
        this.disableButton = true;
      }
    },
  },
};
</script>

<style scoped>
.clone {
  width: 25px;
  height: 25px;
  margin: 0rem 0 0 1rem;
}

.head {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.head_one {
  width: 11rem;
  font-size: 24px;
}

.head_two {
  text-align: center;
  font-size: 18px;
  padding: 0.5rem 0 2rem 0;
}

.reginput {
  width: 100%;
  display: flex;
  height: 75vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.regp {
  display: flex;
  width: 100%;
  border: 0.0625rem solid black;
  padding: 0.65rem;
  box-sizing: border-box;
  border-radius: 1rem;
}

.regp > input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
}

.regpone {
  margin-top: 1rem;
  font-size: 14px;
  width: 80%;
  line-height: 25px;
  text-align: center;
}

.regtwo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.regthree {
  display: block;
  text-align: center;
  width: 90%;
  padding: 1.25rem;
  background: #b1b1b1;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
