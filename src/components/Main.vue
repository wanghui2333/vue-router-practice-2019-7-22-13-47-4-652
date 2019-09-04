<template>
  <div>
    返回：
    <button @click="toReturn">🔙</button>
    欢迎：{{ $store.state.name }}
    <br/>
    <button @click="toMy">我的</button>
    <button @click="toTodoList">列表信息</button>
    <router-view />
  </div>
</template>

<script>


export default {
  name: "main",
  methods: {
    toReturn: function() {
      this.$router.push({
        path: "/"
      });
    },
    toMy: function() {
      this.$router.push({
        path: "/main/my"
      });
    },
    toTodoList: function() {
      this.$router.push({
        path: "/main/todoList"
      });
    }
  }
};
</script>
<style>
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
