import Router from 'vue-router';
import Vue from 'vue';
import Main from '../components/Main';
import Login from '../components/Login';
import TodoList from "../components/TodoList";
import My from "../components/My";

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            component: Login,
        },
        {
            path: "/main/:message",
            component: Main,
            children: [
                {
                    path: "/",
                    component: TodoList
                }
            ],
            props: true
        },
        {
            path: "/main",
            component: Main,
            children: [
                {
                    path: "/",
                    component: TodoList
                }
            ],
            props: true
        },
        {
            path: "/my",
            component: My
        }
    ]
})