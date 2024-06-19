import api from '@/plugins/axios.js';

export const dataMixin = {
    data() {
        return {
            products: [],
        }
    }
}

export const methodsProducts = {
    methods: {
        fetchProduct() {
            api.get("/products").then((response) => {
                console.log(response.data[0])
                for (let i = 0; i < response.data.length; i++) {
                    this.products.push(response.data[i])
                }
                console.log(this.products)

            })
        }
    }
}