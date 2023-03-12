const app = Vue.createApp({
  data() {
    return {
      name: "",
      submittedName: "",
    };
  },
  methods: {
    showAlert() {
      alert("alert");
    },
    setName(event) {
      return (this.name = event.target.value);
    },
    submitName(event) {
      return (this.submittedName = event.target.value);
    },
  },
});

app.mount("#assignment");
