<script setup lang="ts">
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";

const router = useRouter()

const store = productsStore()

const removeFromCart = (id) => {
  store.removeFromCart(id)
}
</script>

<template>
  <div class="cart">
    <button @click="router.push({ name: 'ProductList' })">
      Back to ProductList
    </button>
    <div v-if="!store.cart.length" class="cart--empty">
      <h1>Empty Cart ...</h1>
    </div>
    <div class="cart__items" v-else>
      <div
          class="cart__item"
          v-for="item in store.cart"
          :key="item.id"
      >
        <div class="cart__item-details">
          <img :src="item.thumbnail" alt="">
          <span>Brand: {{ item.brand }}</span>
          <span>Category: {{ item.category }}</span>
          <span>Price: ${{ item.price }}</span>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cart{
  background-color: #e6e6f2;
  padding: 80px 150px;
  button{
    cursor: pointer;
    padding: 12px 24px;
    color: #e6e6f2;
    background-color: #241b9e;
    border-radius: 24px;
    margin-bottom: 32px;
  }
  &__item-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    box-shadow: 0 0 17px 6px #e7e7e7;
    border-radius: 8px;
    padding: 16px;

    img {
      width: 20%;
    }
  }
}
</style>