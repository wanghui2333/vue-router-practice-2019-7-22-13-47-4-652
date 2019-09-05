<template>
  <div>
    Welcome Todo List!
    <div>
      请输入头像：
      <a-input type="text" v-model="head" style="width: 20%"/>
      <br/>
      请输入姓名：
      <a-input type="text" v-model="name" style="width: 20%"/>
      <br/>
      请输入电话：
      <a-input type="text" v-model="tel" style="width: 20%"/>
      <br/>
      <a-button @click="toStart">开始</a-button>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      head: null,
      name: null,
      tel: null
    };
  },
  methods: {
    toStart: function() {
      this.$store.state.head = this.head;
      this.$store.state.name = this.name;
      this.$store.state.tel = this.tel;
      this.$router.push({ path: "/main/todoList" });
    }
  }
};
</script>
