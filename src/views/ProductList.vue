<script setup lang="ts">
import ProductItem from "@/components/ProductItem.vue";
import Pagination from "@/components/Pagination.vue";
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";

const store = productsStore()
const router = useRouter()

const chunkSize = ref(10);
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(store.products.length / chunkSize.value))

const chunkData = computed(() => {
  let newArray = [];
  for(let k = 0; k < store.products.length; k += chunkSize.value){
    console.log('asd')
    let chunk = store.products.slice(k, k + chunkSize.value);
    newArray.push(chunk)
    console.log(newArray)
  }
  return newArray
});

const goToProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } })
}

const previousPage = () => {
  if(currentPage.value >= 1){
    currentPage.value--;
  }
}

const nextPage = () => {
  if(currentPage.value <= totalPages.value){
    currentPage.value++;
  }
}

onBeforeMount(async () => {
  await store.fetchProductsFromDB();
})
</script>

<template>
  <div class="products-list">
    <div class="products-list__products">
      <div
        v-for="product in chunkData[currentPage - 1]"
        :key="product.id"
        @click="goToProductPage(product.id)"
      >
        <ProductItem
          :product-data="product"
          @clicked="goToProductPage"
        />
      </div>
    </div>

    <Pagination 
    :currentPage="currentPage" 
    :totalPages="totalPages" 
    @page-prev="previousPage"
    @page-next="nextPage"/>

    </div>
</template>

<style lang="scss">
.products-list{
  &__products{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
}
</style>