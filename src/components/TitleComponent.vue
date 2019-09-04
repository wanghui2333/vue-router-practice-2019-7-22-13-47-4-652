<template>
  <div>
    <h2>{{title}}</h2>
    <p>
      <em>{{msg}}</em>
    </p>
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
  data: function () {
    return {
      title: "Jquery To Do List",
      msg: "Simple Todo List with adding and filter by diff status."
    }
  }
};
</script>
<style scoped>
</style>