import api from '@/plugins/axios.js';

export const dataMixin = {
    data() {
        return {
            products: [],
            cart: []
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
        },

        addProductToCart(id) {
            alert("Adicionado: " + id)
            this.cart.push(id)
            let productInCart = 0
            for(let i = 0; i < this.cart.length; i++) {
                if(this.cart[i] == id) {
                    productInCart++
                }
            }
            let idElemento = id;
            let elemento = document.getElementById(idElemento);
            elemento.innerHTML = `${productInCart}`
            console.log(this.cart)
        }


    }
}