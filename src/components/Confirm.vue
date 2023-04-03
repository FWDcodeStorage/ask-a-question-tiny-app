<template>
    <div class="confirm container">
        <h1>Your question is: </h1>
        <div class="question">{{ question }}</div>

        <div class="btns animate__animated animate__bounceIn">
            <hr />
            <button @click="goNext">Decide it</button>
            <button @click="goBack">Ask a new question</button>
        </div>
    </div>
</template>

<script>

export default {
    props: ['question'],
    methods: {
        goNext(){
            this.$emit('goTo', 2)
        },
        goBack(){
            this.$emit('goTo', 0)
            this.$emit('question', '')
        }
    }
}

</script>

<style lang="scss">
    .confirm{
        .btns{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
        }
        .question{
            padding:10px 0;
            background: tomato;
            color: white;
            font-weight: bold;
        }
    }
</style>