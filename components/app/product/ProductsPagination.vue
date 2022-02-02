<template>
  <v-row justify="center" align="center">
    <div v-if="isLoading">
      <v-row class="mb-12">
        <v-col v-for="item in 30" :key="item" cols="12" md="4">
          <v-skeleton-loader
            class="mx-auto mb-8"
            type="card-avatar, article, actions"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>

    <template v-else>
      <products-list :items="loadedProducts" />
      <div class="text-center">
        <v-pagination
          v-model="currentPage"
          :length="totalPage"
          :total-visible="7"
          circle
        ></v-pagination>
      </div>
    </template>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionTypes } from '@/store/product'

export default {
  name: 'ProductPage',
  components: {
    ProductsList: () => import('@/components/app/product/ProductsList.vue'),
  },

  data() {
    return {
      currentPage: 1,
    }
  },

  async fetch() {
    if (this.$route.path === '/') {
      await this.$store.dispatch(`product/${actionTypes.loadAllProducts}`)
    }
  },

  computed: {
    ...mapState('product', { products: 'data', isLoading: 'isLoading' }),
    loadedProducts() {
      return this.products?.data
    },

    totalPage() {
      return this.products?.last_page
    },
  },

  watch: {
    currentPage: {
      handler(val) {
        this.$router.push({ path: `/products/page/${val}` })
        this.loadProducts(this.currentPage)
      },
    },
  },

  mounted() {
    if (this.$route.params.page) {
      this.currentPage = parseInt(this.$route.params.page)
    }
  },

  methods: {
    ...mapActions('product', { loadProducts: actionTypes.loadAllProducts }),
  },
}
</script>
