<template>
  <div
    class="demo-infinite-container"
    v-infinite-scroll="handleInfiniteOnLoad"
    :infinite-scroll-disabled="busy"
    :infinite-scroll-distance="10"
  >
    <a-list itemLayout="horizontal" :dataSource="filterTodoList">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-list-item-meta>
          <a slot="title" href="https://vue.ant.design/">
            {{ index }}.
            <a-checkbox
              @change="changeStatus(item)"
              :checked="item.status === 'completed'"
            >{{item.content}}</a-checkbox>
          </a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-list-item-meta>
      </a-list-item>
      <div v-if="loading && !busy" class="demo-loading-container">
        <a-spin />
      </div>
    </a-list>
  </div>
</template>

<script>
import infiniteScroll from "vue-infinite-scroll";

export default {
  directives: { infiniteScroll },
  name: "CheckboxComponent",
  data: function() {
    return {
      loading: false,
      busy: false
    };
  },
  computed: {
    filterTodoList: function() {
      return this.$store.getters.filterTodoList;
    }
  },
  methods: {
    changeStatus: function(item) {
      this.$store.commit("handleToggleActive", item);
    },
    handleInfiniteOnLoad() {
      this.loading = true;
      // if (this.filterTodoList.length > 14) {
      //   this.$message.warning("Infinite List loaded all");
      //   this.busy = true;
      //   this.loading = false;
      //   return;
      // }
      // let data = {
      //   content: this.inputtingText,
      //   status: "active"
      // };
      // this.$store.commit("addNewData", data);
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 300px;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>