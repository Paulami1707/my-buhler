<script setup lang="ts">
import { useStore } from 'vuex';
import { formatCategoryName } from '../shared/utils';
import type { IProduct } from '../types/product';

const store = useStore();

const props = defineProps({
    product: {
        type: Object as () => IProduct,
        required: true
    }
});

const onDeleteProductClicked = () => {
    store.dispatch('deleteItem', props.product.id);
};
</script>

<template>
    <div class="checkout-container__item">
        <div class="checkout-container__item-info">
            <img :src="product.imageUrl" alt="product-image" width="100" height="100" style="object-fit: cover;" />
            <div class="checkout-container__item-info-details">
                <div>
                    <div id="name" ><strong>{{ product.name }}</strong></div>
                    <div class="font-small"><i>{{ formatCategoryName(product.category) }}</i></div>
                </div>

            </div>
        </div>
        <div class="checkout-container__item-price">
            <span>x{{ product.price.toFixed(2) }}</span>
            <img src="../assets/delete.svg" alt="delete-item" style="object-fit: cover;" @click="onDeleteProductClicked()">
        </div>
    </div>
</template>