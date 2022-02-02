<template>
  <v-badge :content="count" color="success" dark overlap>
    <v-btn @click="setIsShowCart()" class="mx-2" color="primary" fab>
      <v-icon> mdi-cart </v-icon>
    </v-btn>
  </v-badge>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { mutationTypes } from '@/store/cart'

export default {
  name: 'CartBadge',
  computed: {
    ...mapGetters('cart', { count: 'totalCount' }),
  },
  mounted() {
    console.log('Mounted', this.count)
  },
  methods: {
    ...mapMutations('cart', { setIsShowCart: mutationTypes.setIsShowCart }),
  },
}
</script>
