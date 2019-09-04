<template>
  <div>
    <button @click="statusChange('all')">ALL</button>
    <button @click="statusChange('active')">Active</button>
    <button @click="statusChange('completed')">Completed</button>
  </div>
</template>

<script>
export default {
  name: "BottomComponent",
  data: function () {
    return {
      title: "Jquery To Do List",
      msg: "Simple Todo List with adding and filter by diff status."
    }
  },
  methods: {
    statusChange: function(status) {
      this.$store.state.currentFilter = status;
    }
  },
};
</script>

<style scoped>
button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  margin-right: 10px;
  padding: 5px 15px;
}
</style>