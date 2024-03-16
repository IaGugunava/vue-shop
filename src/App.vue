<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { productsStore } from "@/stores/products";

  const router = useRouter()
  const store = productsStore()
</script>

<template>
  <header>
    <v-toolbar title="Shop app">
      <button class="app-button" @click="router.push({ name: 'CartView' })">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
          <g>
            <g>
              <path d="m464.5,301.1l36.5-178h-359.7l-12.5-59.2-108.4-52.9-9.4,18.7 99,47.8 50,238.8h289c0,0 28.5,17.9 17.5,40.5-4.9,7-12.5,15.6-26.1,15.6h-287.6v20.6h287.7c19.8,0 36.5-10.4 45.9-27 18.4-34.4-21.9-64.9-21.9-64.9zm-286.7-5.7l-32.3-151.6h330.5l-31.3,151.6h-266.9z"/>
              <path d="m212.2,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.4 39.6,39.4 39.6-17.6 39.6-39.4-17.7-39.4-39.6-39.4zm0,58.1c-10.4,0-18.8-8.3-18.8-18.7s8.3-18.7 18.8-18.7 18.8,8.3 18.8,18.7-8.4,18.7-18.8,18.7z"/>
              <path d="m424.9,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.5 39.6,39.5 40.7-17.6 39.6-39.4c0-21.8-17.7-39.5-39.6-39.5zm18.8,39.5c0,10.4-8.3,18.7-18.8,18.7s-18.8-8.3-18.8-18.7 8.3-18.7 18.8-18.7 19.8,8.3 18.8,18.7z"/>
            </g>
          </g>
        </svg>
        <p>
          Items in Cart: {{ store.cart.length }}
        </p>
    </button>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
.app-button{
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 12px 24px;
  color: #e6e6f2;
  background-color: #241b9e;
  border-radius: 24px;
  svg{
    width: 24px;
    height: 24px;
    path{
      fill: #e6e6f2;
    }
  }
}
</style>
