<template>
  <a-list itemLayout="horizontal" :dataSource="filterTodoList">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-list-item-meta>
        <a slot="title" href="https://vue.ant.design/">
          {{ index }}.
          <a-checkbox @change="changeStatus(item)" :checked="item.status === 'completed'">{{item.content}}</a-checkbox>
        </a>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
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