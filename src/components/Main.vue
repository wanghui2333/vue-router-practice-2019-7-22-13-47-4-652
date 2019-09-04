<template>
  <div>
    返回：
    <button @click="toReturn">🔙</button>
    欢迎：{{message}}
    <br/>
    <button @click="toMy">我的</button>
    <router-view />
    <!-- <TodoList /> -->
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
        path: "/my"
      });
    }
  },
  props: {
    message: String
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
