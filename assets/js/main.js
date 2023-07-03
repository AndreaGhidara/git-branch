const { createApp } = Vue

createApp({
    data() {
        return {
            main_card_img: [
                {
                    url: "https://store-images.s-microsoft.com/image/apps.23082.13632216686838138.75c1faa1-905a-45e9-bf68-ccd9a6fa78e1.190d4457-3254-4c9a-a65c-f80a2f7da934?w=200",
                    title: "Bramble: the mountain king",
                    price: 29.90
                },
                {
                    url: "https://store-images.s-microsoft.com/image/apps.5760.14426135079232961.46344d7a-2787-4e6f-972c-00696b1edbba.c51d14d2-07cb-42a8-a3e1-b757c92362d2?w=200",
                    title: "The bookwalker: Thief of tales",
                    price: 54.90
                },
                {
                    url: "https://store-images.s-microsoft.com/image/apps.31585.14329152328871129.15deab2a-237c-449c-880e-7926330dab80.cbfd82b1-535b-4234-989d-2d04127f0529?w=200",
                    title: "Need for Speed",
                    price: 59.95
                },
                {
                    url: "https://store-images.s-microsoft.com/image/apps.4956.13558336166432541.beb57fbe-cc4b-40c5-ba76-c8112867dea2.43b4dea4-61a1-4ffc-81ab-62cf72323363?w=200",
                    title: "A plague tale: requiem",
                    price: 70.50
                },
                {
                    url: "https://store-images.s-microsoft.com/image/apps.6598.14387733153613072.28665954-14dc-4229-8e3c-0257e25089cb.5a0a250b-db00-44ea-a732-39e21a618691?w=200",
                    title: "As dusk falls",
                    price: 35.80
                },
                {
                    url: "https://store-images.s-microsoft.com/image/apps.47017.14612697019000138.539d22c7-f29f-45cb-90a2-8cd62b2154e8.276a878c-e989-44f4-8019-8a04231f0bc0?w=200",
                    title: "Atomic heart",
                    price: 45.50
                },
                {
                    url: "https://store-images.s-microsoft.com/image/apps.5760.14426135079232961.46344d7a-2787-4e6f-972c-00696b1edbba.c51d14d2-07cb-42a8-a3e1-b757c92362d2?w=200",
                    title: "The bookwalker: Thief of tales",
                    price: 54.70
                },
                {
                    url: "https://store-images.s-microsoft.com/image/apps.23082.13632216686838138.75c1faa1-905a-45e9-bf68-ccd9a6fa78e1.190d4457-3254-4c9a-a65c-f80a2f7da934?w=200",
                    title: "Bramble: the mountain king",
                    price: 30.50
                }
            ]
            
        }
    },
    methods: {


    },
    mounted() {

        
        axios.get(this.requestPath).then((risposta) => {
            this.pokemon = risposta.data;
        })
    }
}).mount('#app')




