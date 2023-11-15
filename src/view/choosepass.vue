<template>
  <div class="ychoosepassbox flex">
    <div class="ychoosebuts">
      <button @click="thremailpass()">
        {{ $store.state.txt.tgemailpass }}
      </button>
      <button @click="thrpass()">{{ $store.state.txt.tgepasschange }}</button>
      <button @click="chooseret()">{{ $store.state.txt.setfh }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    thrpass() {
      this.$router.push("/changepasspass");
    },
    thremailpass() {
      this.$router.push("/Changepassword");
    },
    chooseret() {
      this.$router.go("-1");
    },
  },
};
</script>

<style scoped>
.ychoosepassbox {
  width: 100%;
  height: 100%;
  align-items: center;
}
.ychoosebuts {
  width: 100%;
}
.ychoosebuts button {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: rgb(154, 221, 111) !important;
  cursor: pointer;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  margin: 0.75rem 0;
}
</style>
