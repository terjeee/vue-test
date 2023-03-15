const app = Vue.createApp({
  data() {
    return {
      enteredGoal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoal.length > 0) this.goals.push(this.enteredGoal);
      this.enteredGoal = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");