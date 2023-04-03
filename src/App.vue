<template>
  <div class="container">
    <transition name="fade" appear mode="out-in">
      <component
        :is="screens[position]"
        :question="question"
        :result="result"
        @goTo="handleGoTo"
        @question="handleQuestion"
        @showResult="showResult"
        @handleToast="handleToast"
      />
    </transition>
  </div>
</template>

<script>
import Initial from "./components/Initial.vue";
import Confirm from "./components/Confirm.vue";
import Results from "./components/Results.vue";

export default {
  components: {
    Initial,
    Confirm,
    Results,
  },
  data() {
    return {
      screens: ["Initial", "Confirm", "Results"],
      position: 0,
      question: "",
      result: "",
      list: [
        'Yes',
        'No',
        'Maybe',
        'Not sure...try again',
        'Ask a friend',
        'Call the police'
      ]
    };
  },
  methods: {
    handleGoTo(position) {
      this.position = position;
    },
    handleQuestion(question) {
      this.question = question;
    },
    getRandomValue(){
      return this.list[Math.floor(Math.random()* this.list.length)]
    },
    generateResult(){
      let rand = this.getRandomValue();
      if(this.result !== ''){
        while(rand === this.result){
          rand = this.getRandomValue();
        }
      }
      this.result = rand;
    },
    showResult(){
      this.generateResult()
    },
    handleToast(values){
      this.$toast.show(values.message, {
        type: values.type,
        position: "top",
        duration: 2000,
      })
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  overflow: hidden;

  h1 {
    font-family: "VT323";
    width: fit-content;
    border-bottom: 3px solid tomato;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    width: 400px;
    height: 400px;
  }

  .fade-enter-from,
  .fade-leave-to
   {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s;
  }
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
}
</style>
