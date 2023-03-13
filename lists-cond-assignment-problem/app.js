const app = Vue.createApp({
  data() {
    return {
      showTasks: true,
      inputTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      this.inputTask = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
  computed: {
    buttonCaption() {
      return this.showTasks ? "Hide" : "Show";
    },
  },
});

app.mount("#assignment");
