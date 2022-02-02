<template>
  <v-row justify="center" align="center">
    <products-pagination />
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    ProductsPagination: () =>
      import('@/components/app/product/ProductsPagination.vue'),
  },
}
</script>
