import Router from 'vue-router';
import Vue from 'vue';
import Main from '../components/Main';
import Welcome from '../components/Welcome';

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            component: Welcome,
        },
        {
            path: "/main",
            component: Main
        }
    ]
})