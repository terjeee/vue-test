const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullName() {
      console.log("RUNNING");
      if (this.name.length === 0) return "";
      return this.name + " " + "Etternavn";
    },
  },
  watch: {
    counter(curVal) {
      if (curVal > 50) {
        // const that = this;
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  methods: {
    submitForm() {
      alert("submit");
    },
    increase(num) {
      return (this.counter = this.counter + num);
      // return this.counter++;
    },
    decrease(num) {
      return (this.counter = this.counter - num);
      // return this.counter--;
    },
    // setLastName(event, lastName) {
    //   return (this.name = event.target.value + " " + lastName);
    // },
    confirmInput(event) {
      this.confirmedName = event.target.value;
    },
    setName(event) {
      return (this.name = event.target.value);
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      console.log("RUNNING");
      if (this.name.length === 0) return "";
      return this.name + " " + "Etternavn";
    },
  },
});

app.mount("#events");
