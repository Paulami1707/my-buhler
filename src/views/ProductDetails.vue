<script setup lang="ts">
import { useRouter } from 'vue-router';
import ProductInfo from '../components/ProductInfo.vue';

const $router = useRouter();

const onBackClicked = () => {
    $router.back();
};
</script>


<template>
    <div class="product-details">
        <div @click="onBackClicked()" class="back">Back</div>
        <ProductInfo />
    </div>
</template>

<style scoped>
.back {
    cursor: pointer;
}
</style>