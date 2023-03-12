const app = Vue.createApp({
  data() {
    return {
      cssClass: "user1",
      isVisible: true,
      bgColor: "red",
    };
  },
  methods: {
    toggleVisible() {
      return (this.isVisible = !this.isVisible);
    },
  },
  computed: {
    cssVisible() {
      return this.isVisible ? "visible" : "hidden";
    },
  },
});

app.mount("#assignment");
