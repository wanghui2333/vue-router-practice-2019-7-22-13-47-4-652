export default {
    state: {
        // 应用的数据
        todoList: [],
        currentFilter: "all",
        head: null,
        name: null,
        tel: null
    },
    mutations: {
        addNewData(state, data) {
            state.todoList.push(data);
        },
        handleToggleActive: function (state, item){
            item.status = item.status === 'completed' ? 'active' : 'completed';
        },
    },
    getters: {
        filterTodoList: function (state) {
            let filterList = state.todoList.filter(element => {
                return (
                    state.currentFilter === "all" ||
                    state.currentFilter === element.status
                )
            });
            return filterList;
        }
    }
}