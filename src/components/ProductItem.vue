<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  productData: Object
})

const emit = defineEmits(['clicked'])

const goToProductPage = (productId: number) => {
  emit('clicked', productId)
}

</script>

<template>
  <div class="product-card">
    <div class="product-card__image">
      <img
        :src="productData.thumbnail"
      />
    </div>

    <div class="product-card__content">
      <div class="product-card__title">
        {{ productData.brand }}
      </div>
  
      <div class="product-card__price">
        $ {{ productData.price }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-card{
  cursor: pointer;
  background-color: #e6e6f2;
  border: 1px solid #241b9e;
  padding: 25px;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  &__image{
    position: relative;
    height: 0px;
    padding-top: 320px;

    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }

  &__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  &__title{
    font-size: 25px;
  }

  &__price{
    font-size: 20px;
    margin-left: 10px;
    flex-shrink: 0;
  }
}
</style>