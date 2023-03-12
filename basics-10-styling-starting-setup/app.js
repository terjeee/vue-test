const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    selectBox(box) {
      return (this[box] = !this[box]);
    },
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
});

app.mount("#styling");
