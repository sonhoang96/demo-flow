import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {createPinia, PiniaVuePlugin} from 'pinia'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.use(ElementUI);
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(({store}) => {
    store.$subscribe((mutation, state) => {
        console.log('mutation', mutation);
        console.log('state', state)
    })
    store.$onAction((action) => {
        console.log('action', action)
    })
})

Vue.config.productionTip = false

new Vue({
    pinia,
    router,
    render: h => h(App),
}).$mount('#app')
