<script setup lang="ts">
import { useStore } from 'vuex';
import CheckoutItem from '../components/CheckoutItem.vue';
import type { IProduct } from '../types/product';
import { computed, type ComputedRef } from 'vue';

const store = useStore();

const cartItems: ComputedRef<Array<IProduct>> = computed(() => store.state.cart);

const cartTotal: ComputedRef<string> = computed(() => {
   console.log(store.getters);
    return store.getters?.getCartTotal?.toFixed(2);
});

</script>
<template>
   <div class="checkout-page">
      <div class="checkout-page__header">
         <h3>Checkout</h3>
      </div>
      <div class="checkout-container">
         <CheckoutItem v-for="item in cartItems" :key="item.id" :product="item" />
      </div>
      <div class="checkout-total">
         <strong>Total: </strong>
         <strong>x{{ cartTotal }}</strong>
      </div>
   </div>
</template>