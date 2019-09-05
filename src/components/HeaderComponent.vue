<template>
  <div>
    <input type="text" v-model="inputtingText" class="input-text"/>
    <button @click="addTodoList">Add</button>
  </div>
</template>

<script>
export default {
  name: "CreateFormComponent",
    data: function() {
      return {
        inputtingText: null
      };
    },
  methods: {
    addTodoList: function() {
      let data = {
        content: this.inputtingText,
        status: "active"
      }
      this.$store.commit('addNewData', data);
    }
  }
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
  padding: 5px 15px;
}

.input-text {
  width: 20%;
}
input {
  padding: 4px 15px 4px 0;
}
</style>