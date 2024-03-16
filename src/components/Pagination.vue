<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  currentPage: Number,
  totalPages: Number
})

const emit = defineEmits(['page-prev', 'page-next'])

</script>

<template>
    <div class="pagination">
      <button @click="$emit('page-prev')" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="$emit('page-next')" :disabled="currentPage === totalPages">Next</button>
    </div>
</template>
  
<style lang="scss">
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px 0;
    color: #e6e6f2;

    button{
        cursor: pointer;
        padding: 12px 24px;
        color: #e6e6f2;
        background-color: #241b9e;
        border-radius: 24px;
    }
  }
  </style>
  