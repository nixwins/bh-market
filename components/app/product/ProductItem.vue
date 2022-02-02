<template>
  <v-card class="mx-auto mb-8" max-width="344" xl="4" md="4">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title> {{ item.name }} </v-card-title>

    <v-card-subtitle>
      <nuxt-link :to="'/products/' + item.slug"> {{ item.slug }}</nuxt-link>
    </v-card-subtitle>
    <v-btn @click="addToCart(item)">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '@/store/cart'

export default {
  name: 'ProductItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('cart', { addToCart: actionTypes.addProductToCart }),
  },
}
</script>
