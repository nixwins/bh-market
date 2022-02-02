<template>
  <v-container>
    <v-card
      v-for="product in products"
      :key="product.id"
      class="mx-auto mb-4"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">{{ product.name }}</div>

          <v-list-item-subtitle>
            <nuxt-link
              @click.native="setIsShowCart()"
              :to="'/products/' + product.slug"
            >
              {{ product.slug }}</nuxt-link
            >
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn @click="removeProductFromCart(product)" outlined rounded text>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { actionTypes, mutationTypes as cartMutationTypes } from '@/store/cart'

export default {
  name: 'ShopCart',
  computed: {
    ...mapState({ products: (state) => state.cart.products }),
  },
  methods: {
    ...mapActions('cart', {
      removeProductFromCart: actionTypes.removeProductFromCart,
    }),
    ...mapMutations('cart', { setIsShowCart: cartMutationTypes.setIsShowCart }),
  },
}
</script>
