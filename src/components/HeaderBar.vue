<script setup lang="ts">
import dayjs from 'dayjs';
import { computed, onMounted, ref, type ComputedRef } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const $router = useRouter();

const currentdate = ref(new Date());

const cartItemsCount: ComputedRef<number> = computed(() => store.state.cart.length);
    
function formatDateTime() {
    return dayjs(currentdate.value).format('MMM/DD/YY HH:mm:ss A');
}

const onCheckoutClicked = () => {
    $router.push('/checkout');
};

const redirectToHome = () => {
    $router.push('/');
};

onMounted(() => {
    setInterval(() => {
        currentdate.value = new Date();
    }, 1000);
});
</script>

<template>
  <div class="header-bar">
    <div class="header-bar__logo">
        <img src="../assets/buhler-logo.svg" alt="buhler-logo" width="150" height="30" @click="redirectToHome()"/>
    </div>
    <div class="header-bar__time">{{ formatDateTime() }}</div>
    <div class="header-bar__cart" @click="onCheckoutClicked()">Cart({{ cartItemsCount }})</div>
  </div>
</template>