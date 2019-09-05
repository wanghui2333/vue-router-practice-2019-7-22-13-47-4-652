<template>
  <div>
    Welcome Todo List!
    <div>
      头像：
      <!-- <a-input type="text" v-model="head" /> -->
      <a-input placeholder="请输入头像" v-model="head" class="inputInfo"> 
        <a-icon slot="prefix" type="user" />
        <a-icon v-if="head" slot="suffix" type="close-circle" @click="headEmpty" />
      </a-input>
      <br />姓名：
      <a-input placeholder="请输入姓名" v-model="name" class="inputInfo"> 
        <a-icon slot="prefix" type="user" />
        <a-icon v-if="name" slot="suffix" type="close-circle" @click="nameEmpty" />
      </a-input>
      <br />电话：
      <a-input placeholder="请输入电话" v-model="tel" class="inputInfo"> 
        <a-icon slot="prefix" type="user" />
        <a-icon v-if="tel" slot="suffix" type="close-circle" @click="telEmpty" />
      </a-input>
      <br />
      <a-button @click="toStart" @pressEnter="toStart">开始</a-button>
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
    },
    headEmpty: function() {
      this.head = null;
    },
    nameEmpty: function() {
      this.name = null;
    },
    telEmpty: function() {
      this.tel = null;
    }
  }
};
</script>


<style scoped>
.inputInfo {
  width: 20%;
}
</style>