<template>
    <div class="product-grid">
        <div class="card">
            <div class="product">
                <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" alt="">
                <strong>Tênis de Caminhada Leve Confortável</strong>
                <span>R$ 179,90</span>
                
                    <button>
                        <div class="div_carrinho_button">
                            <i class="fa-solid fa-cart-shopping fa-1x icon-white"></i>
                            <p>1</p>
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>                        
                    </button>
                
            </div>
        </div>
        <div class="card">
            <div class="product">
                <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" alt="">
                <strong>Tênis de Caminhada Leve Confortável</strong>
                <span>R$ 179,90</span>
                
                    <button>
                        <div class="div_carrinho_button">
                            <i class="fa-solid fa-cart-shopping fa-1x icon-white"></i>
                            <p>1</p>
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>                        
                    </button>
                
            </div>
        </div>
        <div class="card">
            <div class="product">
                <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" alt="">
                <strong>Tênis de Caminhada Leve Confortável</strong>
                <span>R$ 179,90</span>
                
                    <button>
                        <div class="div_carrinho_button">
                            <i class="fa-solid fa-cart-shopping fa-1x icon-white"></i>
                            <p>1</p>
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>                        
                    </button>
                
            </div>
        </div>
        <div class="card">
            <div class="product">
                <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" alt="">
                <strong>Tênis de Caminhada Leve Confortável</strong>
                <span>R$ 179,90</span>
                
                    <button>
                        <div class="div_carrinho_button">
                            <i class="fa-solid fa-cart-shopping fa-1x icon-white"></i>
                            <p>1</p>
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>                        
                    </button>
                
            </div>
        </div>
        <div class="card">
            <div class="product">
                <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" alt="">
                <strong>Tênis de Caminhada Leve Confortável</strong>
                <span>R$ 179,90</span>
                
                    <button>
                        <div class="div_carrinho_button">
                            <i class="fa-solid fa-cart-shopping fa-1x icon-white"></i>
                            <p>1</p>
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>                        
                    </button>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'product-grid',
    props: {

    }
}
</script>

<style scoped>
strong {
    font-size: 16px;
    line-height: 20px;
    color: rgb(51, 51, 51);
    margin-top: 5px;
    width: 273.33px;    
    text-align: left;
}
.product > span {
    width: 273.33px;    
    text-align: left;
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0px 20px;
}

img {
    height: 250px;
    width: 250px;
}

button {
    width: 273.33px;
    height: 41px;
    cursor: pointer;
    background: rgb(113, 89, 193);
    color: rgb(255, 255, 255);
    border: 0px;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    transition: background 0.2s ease 0s;
    padding: 0 0 0 0;
}

i {
    margin-right: 5px;
}

button span {
    flex: 1 1 0%;
    text-align: center;
    font-weight: bold;
}
.product-grid {
    display: flex;
    flex-wrap: wrap;
}

.product-grid > .card {
    flex: 0 1 calc(33%); 
    display: flex; 
    padding-bottom: 45px;
    justify-content: center;
    padding-left: 3.81px;
}

.product {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    justify-content: flex-end;
    border-radius: 5px;
}

.div_carrinho_button {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);
}
</style>
