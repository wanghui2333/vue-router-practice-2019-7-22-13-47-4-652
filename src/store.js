export default {
    state: {
        // 应用的数据
        todoList: [],
        currentFilter: "all",
        id: 0
    },
    mutations: {
        addNewData(state, data) {
            state.todoList.push({
                id: data.id,
                isCheck: data.isCheck,
                content: data.content,
                status: data.status
            });
        },
        handleToggleActive: function (state, item){

            state.todoList[item.id].status = state.todoList[item.id].status === 'completed' ? 'active' : 'completed';
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