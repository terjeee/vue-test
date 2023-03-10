const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase: function () {
      return this.counter++;
    },
    decrease: function () {
      return this.counter--;
    },
  },
});

app.mount("#events");
