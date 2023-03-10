const app = Vue.createApp({
  data() {
    return {
      courseGoal: "learn Vue",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      if (randomNum < 0.5) return "Learn Vue!";
      return "Master Vue!";
    },
  },
});

app.mount("#user-goal");
