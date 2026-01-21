<script setup lang="ts">
import { useStore } from 'vuex';
import type { IProduct } from '../types/product';
import { computed, type ComputedRef } from 'vue';
import { formatCategoryName } from '../shared/utils';

const store = useStore();

const selectedProduct: ComputedRef<IProduct> = computed(() => store.state.selectedProduct);

const onAddToCartClicked = () => {
    store.dispatch('addItem', selectedProduct.value);
};
</script>

<template>
    <div class="product-info">
        <img :src="selectedProduct?.imageUrl" :alt="selectedProduct?.name" height="250" width="250"
            style="object-fit: cover;" loading="eager" />
        <div class="product-info__container">
            <div class="product-info__container-data">
                <h3>{{ selectedProduct?.name }}</h3>
                <div><i>{{ formatCategoryName(selectedProduct?.category) }}</i></div>
                <div>x{{ selectedProduct?.price.toFixed(2) }}</div>
            </div>
            <div aria-label="Add to cart" class="product-info__container-cart" @click="onAddToCartClicked()">
                <img src="../assets/cart.svg" alt="cart-icon" width="20" height="20" />
                <span>Add to Cart</span>
            </div>

        </div>

    </div>
</template>