<template>
  <v-row v-if="item" justify="center" align="center">
    <v-col md="6">
      <v-card class="mx-auto">
        <v-img
          :src="'https://back2.bh.market' + item.thumb"
          height="200px"
        ></v-img>

        <v-card-title>ID:{{ item.id }} {{ item.name }} </v-card-title>

        <v-card-subtitle v-html="item.description_full"> </v-card-subtitle>
        <v-card-subtitle>
          <span v-if="item.price_min === item.price_max"
            >цена: {{ item.price_min }}
          </span>
          <div v-else>
            <span>от</span>
            <span>{{ item.price_min }}</span>
            <span>до</span>
            <span>{{ item.price_max }}</span>
          </div>
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="addToCart(item)">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </v-card-actions>
        <!-- {{ item }} -->
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '@/store/cart'

export default {
  name: 'ProductFull',
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
