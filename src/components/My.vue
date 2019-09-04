<template>
  <div>
    返回：
    <button @click="toReturn">🔙</button>
    Welcome my!
  </div>
</template>

<script>
export default {
  name: "My",
  methods: {
    toReturn: function() {
      this.$router.push({
        path: "/main/" + this.message
      });
    }
  }
};
</script>