<template>
  <div class="default-layout">
    <v-app>
      <v-container>
        <app-header />
        <Nuxt />
        <v-snackbar v-model="snackbar.isShow">
          {{ snackbar.text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="pink"
              text
              v-bind="attrs"
              @click="setSnackbar({ isShow: false })"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>

        <v-dialog v-model="isShowCart" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Коризна
            </v-card-title>

            <v-card-text>
              <shop-cart />
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="setIsShowCart()">
                закрыть
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { actionTypes } from '@/store/index'
import {
  mutationTypes as cartMutationTypes,
  actionTypes as cartActionTypes,
} from '@/store/cart'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'default',
  components: {
    AppHeader: () => import('@/components/common/AppHeader.vue'),
    ShopCart: () => import('@/components/app/cart/ShopCart.vue'),
  },
  computed: {
    ...mapState({
      snackbar: (state) => state.snackbar,
      isShowCart: (state) => state.cart.isShowCart,
    }),
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      window.addEventListener('storage', () => {
        const products = JSON.parse(localStorage.getItem('cart')).cart.products
        console.log(products)

        this.syncProducts(products)
      })
    }
  },
  methods: {
    ...mapActions({ setSnackbar: actionTypes.changeSnackbar }),
    ...mapActions('cart', { syncProducts: cartActionTypes.restoreProducts }),
    ...mapMutations('cart', { setIsShowCart: cartMutationTypes.setIsShowCart }),
  },
}
</script>
