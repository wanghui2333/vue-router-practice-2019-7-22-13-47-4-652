<template>
  <div>
    返回：
    <a-button @click="toReturn">🔙</a-button>
    欢迎：{{ $store.state.name }}
    <br/>
    <a-button @click="toMy">我的</a-button>
    <a-button @click="toTodoList">列表信息</a-button>
    <TitleComponent />
    <router-view />
  </div>
</template>

<script>
import TitleComponent from "./TitleComponent";

export default {
  name: "main",
  components: {
    TitleComponent
  },
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

</style>
