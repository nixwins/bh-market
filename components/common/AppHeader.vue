<template>
  <header class="header mb-12">
    <v-row>
      <v-col cols="10">
        <h1><nuxt-link to="/">Тестовый интернет магазин</nuxt-link></h1>
      </v-col>
      <v-col cols="2">
        <cart-button />
      </v-col>
    </v-row>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {
    CartButton: () => import('@/components/app/cart/CartBadge.vue'),
  },
}
</script>
