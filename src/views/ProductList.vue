<script setup lang="ts">
import type { IProduct } from '../types/product';
import productsData from '../apiResponse/products.json';
import ProductOverview from '../components/ProductOverview.vue';
import { formatCategoryName } from '../shared/utils';

const productInfoGrouped: Record<string, IProduct[]> = productsData.reduce((acc: Record<string, IProduct[]>, product: IProduct) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category]?.push(product);
    return acc;
}, {} as Record<string, IProduct[]>);



</script>

<template>
    <div class="product-list">
        <div v-for="(products, category) in productInfoGrouped" :key="category" class="product-list__category">
            <h4>{{ formatCategoryName(category) }}</h4>
            <div class="product-list__items">
                <div v-for="(product) in products" :key="product.id">
                    <ProductOverview :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>