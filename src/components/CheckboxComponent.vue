<template>
  <div>
    <ul>
      <li v-for="(item, index) in filterTodoList" :key="item">
        {{ index }}.
        <input
          type="checkbox"
          @click="changeStatus(item)"
          :checked="item.status === 'completed'"
        />
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CheckboxComponent",
  computed: {
    filterTodoList: function() {
      return this.$store.getters.filterTodoList;
    }
  },
  methods: {
    changeStatus: function(item) {
      this.$store.commit("handleToggleActive", item);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
}
</style>