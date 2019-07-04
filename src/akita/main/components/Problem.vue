<template>
    <section class="problem">
        <div class="contain">
            <h2 class="title center">90% of all business are stuck in loop</h2>
            <div class="information">
                <div class="block">
                    <h4 class="text title">Problem</h4>
                    <p class="text fontWeight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure praesentium magnam ad! Ipsum cum possimus expedita nobis minus perferendis dolorum quisquam, enim, voluptas quidem repellendus nam aspernatur delectus quasi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure praesentium magnam ad! Ipsum cum possimus expedita nobis minus perferendis dolorum quisquam, enim, voluptas quidem repellendus nam aspernatur delectus quasi.                        
                    </p>
                </div>
                <div class="block img">img</div>
                <div class="block">
                    <h4 class="text title">Reality check</h4>
                    <p class="text fontWeight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure praesentium magnam ad! Ipsum cum possimus expedita nobis minus perferendis dolorum quisquam, enim, voluptas quidem repellendus nam aspernatur delectus quasi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure praesentium magnam ad! Ipsum cum possimus expedita nobis minus perferendis dolorum quisquam, enim, voluptas quidem repellendus nam aspernatur delectus quasi.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .problem {
        margin-bottom: 200px;
    }

    .center {
        text-align: center;
    }

    .information {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 100px;
    }

    .block {
        width: 33%;
        min-width: 300px;
        text-align: justify;
    }

    .fontWeight {
        font-weight: normal;
    }

    .img {
        background-color: grey;
        width: 400px;
        height: 400px;
    }

    @media (max-width: 1000px) {
        .information {
            flex-direction: column;
        }

        .block {
            width: 50%;
            margin: auto;
        }
    }
</style>

