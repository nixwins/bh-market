<template>
  <v-row class="mb-12" md="10" xl>
    <product-item v-for="item in items" :key="item.id" :item="item" />
  </v-row>
</template>

<script>
export default {
  name: 'ProducstList',
  components: {
    ProductItem: () => import('@/components/app/product/ProductItem.vue'),
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
