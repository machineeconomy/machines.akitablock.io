<template>
    <section class="machines">
        <div class="contain">
            <h2 class="title">The evolution of machines</h2>
            <div class="info">
                <p class="text normal">Machines wew invented to increase productivity.</p>
                <p class="text normal">They evolved during the industial revolution.</p>
                <p class="text normal">Today we already have 3 times more smart devices<br/> than humans on our planet with a rapid growth tendency.</p>
            </div>
            <p class="text normal">Reality shows that machines keep us busy:</p>
            <ul class="list">
                <li class="text list__item" v-for="item in list" :key="item.id">{{item.text}}</li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Evolution",
        data() {
            return {
                list: [
                    {
                        text: "manage and update",
                        img: "#",
                        id: 1
                    },
                    {
                        text: "secondary systems and fees",
                        img: "#",
                        id: 2
                    },
                    {
                        text: "convert data",
                        img: "#",
                        id: 3
                    },
                    {
                        text: "no global standarts",
                        img: "#",
                        id: 4
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    .evolution {
        min-height: 100vh;
    }

    h2 {
        margin: 10vh 0 5vh;
    }

    .info {
        margin-bottom: 5vh;
    }

    .list__item {
        padding: 5vh 13vh 0;
        color: var(--akita-pink)
    }
</style>

