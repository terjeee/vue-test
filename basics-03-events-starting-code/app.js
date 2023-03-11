const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    increase(num) {
      return (this.counter = this.counter + num);
      // return this.counter++;
    },
    decrease(num) {
      return (this.counter = this.counter - num);
      // return this.counter--;
    },
    setName(event) {
      return (this.name = event.target.value);
    },
    setLastName(event, lastName) {
      return (this.name = event.target.value + " " + lastName);
    },
    submitForm() {
      alert("submit");
    },
    confirmInput(event) {
      this.confirmedName = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
