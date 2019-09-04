<template>
  <div>
    返回：
    <button @click="toReturn">🔙</button>
    欢迎：{{ $store.state.name }}
    <br />
    头像：{{ $store.state.head }}
    <br />
    姓名：{{ $store.state.name }}
    <br />
    电话：{{ $store.state.tel }}
  </div>
</template>

<script>
export default {
  name: "My",
  methods: {
    toReturn: function() {
      this.$router.push({
        path: "/main"
      });
    }
  }
};
</script>