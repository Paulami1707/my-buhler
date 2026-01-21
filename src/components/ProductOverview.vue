<script setup lang="ts">
import { useStore } from 'vuex';
import type { IProduct } from '../types/product';
import { useRouter } from 'vue-router';

const store = useStore();
const $router = useRouter();

const props = defineProps(
    {
        product: {
            type: Object as () => IProduct,
            required: true
        }
    }
);

const onProductClicked = () => {
    store.commit('SET_SELECTED_PRODUCT', props.product);
    $router.push({ name: 'ProductDetails', params: { id: props.product.id } });
};

const onCartIconClicked = (event: Event) => {
    event?.stopPropagation();
    store.dispatch('addItem', props.product);
};
</script>
<template>
    <div class="product-overview" @click="onProductClicked()">
        <div class="product-overview__img">
            <img :src="product.imageUrl" :alt="product.name" class="product-image" style="width: 100%; height: 100%; object-fit: cover;"/>
        </div>
        <div class="product-overview__info">
            <strong>{{ product.name }}</strong>
            <div class="product-overview__info-cta">
                <span>x{{ product.price.toFixed(2) }}</span>
                <img src="../assets/cart.svg" alt="cart-icon" width="20" height="20" @click="onCartIconClicked($event)"/>
            </div>
        </div>
    </div>
</template>