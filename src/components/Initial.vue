<template>
  <div class="container initial">
    <h1>Ask a question</h1>
    <div class="input">
      <input name="question" type="text" id="question" v-model="question" />
    </div>
    <div class="btn">
        <button type="submit" v-if="question" @click.prevent="handleNext" class="animate__animated animate__fadeIn">
        Next
      </button>
    </div>
    <!-- <div v-if="error">
        Not a valid question
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      //error: false,
    };
  },
  methods: {
    handleNext(e) {
      if (this.question.length < 5) {
        //this.error = true;
        this.$emit('handleToast', {
          type: 'error',
          message: 'Not a valid question'
        })
      }
      else{
        //this.error = false;
        this.$emit('goTo', 1)
        this.$emit('question', this.question)
      }
    },
  },
};
</script>

<style lang="scss">
 .initial input{
    width: 100%;
    height: 25px;
    border: 2px solid #517192;
    border-radius: 15px;
    letter-spacing: 1px;

    &:focus{
        border: none !important;
        outline: 3px solid #2c3e50;
        border-radius: 15px;
        padding: 10px 5px;
    }
 }
 div{
    margin: 5px auto;
    width: 100%;
 }
 button{
    width: 100%;
    background: #2c3e50;
    color: white;
    padding: 10px 15px;

    &:hover{
        background: #678fb7;
    }
 }
</style>
