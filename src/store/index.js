import { createStore } from 'vuex';

const defaultState = {
    products: [],
    cart: [],
    selectedProduct: null
};

const mutations = {
    SET_CART(state, cart) {
        state.cart = cart;
    },
    SET_SELECTED_PRODUCT(state, product) {
        state.selectedProduct = product;
    },
    ADD_TO_CART(state, product) {
        state.cart.push(product);
    }
}

const getters = {
    getCartTotal(state) {
        return state.cart.reduce((total, product) => total + product.price, 0);
    }
}

const actions = {
    addItem({ commit }, product) {
        commit('ADD_TO_CART', product);
    },

    deleteItem({ commit, state }, productId) {
        const updatedCart = state.cart.filter(product => product.id !== productId);
        commit('SET_CART', updatedCart);
    }
}

export const store = createStore({
    state() {
        return { ...defaultState };
    },
    actions,
    mutations,
    getters
});