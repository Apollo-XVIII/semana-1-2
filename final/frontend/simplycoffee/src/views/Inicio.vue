<template>
<v-container>
    <template>
        <v-carousel  :show-arrows="false" cycle>
            
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
    </template>
    <div><br></div>
    <p class="text-center font-italic">
        "Conozca del Café Colombiano, reconocido internacionalmente como el mejor café suave del mundo.<br>
        Colombia con su geografía, le permite tener diferentes tipos de café .
        Tómese una buena taza y disfrútelo en comidas o postres. <br>

    </p>

    <p class="text-center font-weight-bold font-italic">
        ¡Viva la experiencia del Café de Colombia!"
    </p>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    src: require( '../img/a.jpg'),
                },
                {
                    src: require( '../img/b.jpg'),
                },
                {
                    src: require( '../img/c.jpg'),
                },
                {
                    src: require( '../img/d.jpg'),
                },
                {
                    src: require( '../img/e.jpg'),
                },
                {
                    src: require( '../img/f.jpg'),
                },
                {
                    src: require( '../img/g.jpg'),
                },
                {
                    src: require( '../img/h.jpg'),
                },
            ],
        }
    },
}
</script>
