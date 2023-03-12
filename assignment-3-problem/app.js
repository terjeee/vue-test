const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      goal: 20,
    };
  },
  methods: {
    increase(num) {
      return (this.counter = this.counter + num);
    },
  },
  computed: {
    testGoal() {
      if (this.counter < this.goal) return "Not there yet..";
      if (this.counter > this.goal) return "Too much!";
      return ":)";
    },
  },
  watch: {
    testGoal() {
      setTimeout(() => {
        console.log("watch");
        return (this.counter = 0);
      }, 5000);
    },
  },
});

app.mount("#assignment");
