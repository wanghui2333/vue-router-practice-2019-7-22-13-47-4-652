import Router from 'vue-router';
import Vue from 'vue';
import CounterGroup from '../components/CounterGroup';
import Welcome from '../components/Welcome';

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            component: Welcome,
            children: [
                {
                    path: "counter",
                    component: CounterGroup
                }
            ]
        },
        {
            path: "/welcome/:message",
            component: Welcome,
            props: true
        }
    ]
})