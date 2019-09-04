<template>
  <div>
    Welcome Todo List!
    <div>
      请输入姓名：<input type="text" v-model="message" />
      <button @click="toStart">开始</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    toStart: function() {
      this.$router.push({ path: "/main" });
    }
  }
};
</script>