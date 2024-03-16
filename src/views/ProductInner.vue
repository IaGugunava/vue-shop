
<script setup lang="ts">
  import { computed } from "vue";
  import { productsStore } from "@/stores/products";
  import { useRoute, useRouter } from "vue-router";

  const store = productsStore()
  const router = useRouter()
  const route = useRoute()

  const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id))
  })

  const addToCart = () => {
    store.addToCart(selectedProduct.value)
    router.push({ name: 'CartView' })
  }
</script>

<template>
  <div class="product-inner">
    <button @click="router.push({ name: 'ProductList' })">
      Back to ProductList
    </button>
  
    <div class="product">
      <div class="product-inner__image">
        <img :src="selectedProduct.thumbnail" alt="">
      </div>
      <div class="product-inner__details">
        <p>Brand: {{ selectedProduct.brand }}</p>
        <p>Description: {{ selectedProduct.description }}</p>
        <h2>Price: ${{ selectedProduct.price }}</h2>
        <button @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.product-inner{
  background-color: #e6e6f2;
  padding: 80px 150px;
  .product {
    display: flex;
    margin-top: 50px;
  }

  &__image{
    margin-right: 24px;
  }

  button{
    cursor: pointer;
    padding: 12px 24px;
    color: #e6e6f2;
    background-color: #241b9e;
    border-radius: 24px;
  }
}

</style>