<template>
  <div>
    <product-full :item="product" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/product'

export default {
  name: 'ProductPage',
  components: {
    ProductFull: () => import('@/components/app/product/ProductFull.vue'),
  },
  async fetch() {
    console.log(this.$route.params.slug)
    await this.$store.dispatch(
      `product/${actionTypes.loadProduct}`,
      this.$route.params.slug
    )
  },
  computed: {
    ...mapState('product', { product: 'data', isLoading: 'isLoading' }),
  },

  mounted() {
    console.log(this.product)
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
