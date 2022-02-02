<template>
  <div>
    <products-pagination />
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  components: {
    ProductsPagination: () =>
      import('@/components/app/product/ProductsPagination.vue'),
  },
}
</script>
