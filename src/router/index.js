import Vue from 'vue';
import Router from 'vue-router';
import father from '@/page/father';
// import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'father',
            component: father
        }
        // {
        //     path: '/',
        //     name: 'HelloWorld',
        //     component: HelloWorld
        // }
    ]
});
