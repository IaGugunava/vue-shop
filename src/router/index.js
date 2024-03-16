import { createRouter, createWebHistory } from 'vue-router'
import ProductList from "@/views/ProductList.vue";
import ProductInner from "@/views/ProductInner.vue";
import Cart from "@/views/Cart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductInner
    },
    {
      path: '/cart',
      name: 'CartView',
      component: Cart
    }
  ]
})

export default router
