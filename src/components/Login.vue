<template>
  <div>
    Welcome Todo List!
    <div>
      请输入头像：<input type="text" v-model="head" /><br/>
      请输入姓名：<input type="text" v-model="name" /><br/>
      请输入电话：<input type="text" v-model="tel" /><br/>
      <button @click="toStart">开始</button>
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
      this.$router.push({ path: "/main/todoList"});
    }
  }
};
</script>