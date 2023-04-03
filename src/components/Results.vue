<template>
    <div class="confirm container">
        <h1>The answer is: </h1>
        <div class="result">{{ result }}</div>

        <div class="btns animate__animated animate__bounceIn">
            <hr />
            <button @click="startOver">Start over</button>
            <button @click="getResult">Decide again</button>
        </div>
    </div>
</template>

<script>

export default {
    props: ['result'],
    mounted(){
        this.$emit('showResult')
    },
    methods: {
        startOver(){
            this.$emit('goTo', 0)
        },
        getResult(){
            this.$emit('showResult')
        }
    }
}

</script>

<style lang="sass">

</style>