const app = Vue.createApp({
  data() {
    return {
      name: "name",
      age: 10,
      urlImg:
        "https://www.tyla.com/cdn-cgi/image/width=648,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.tyla.com%2Fs3%2Fcontent%2F100ec1f35f3648feb6664dfebaa8c5f3.jpg",
    };
  },
  methods: {
    ageIn5Years() {
      return this.age + 5;
    },
    randomNum: () => Math.random(),
  },
});

app.mount("#assignment");
