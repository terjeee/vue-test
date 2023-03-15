const app = Vue.createApp({
  data() {
    return {
      friends: [
        { id: "manuel", name: "Manuel Lorenx", phone: 12341234, email: "manuel@test.com" },
        { id: "Julie", name: "Julie Jones", phone: 43214321, email: "julie@test.com" },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleShowDetails">Show Details</button>
      <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
     </li>
  `,
  data() {
    return {
      showDetails: false,
      friend: { id: "manuel", name: "Manuel Lorenx", phone: 12341234, email: "manuel@test.com" },
    };
  },
  methods: {
    toggleShowDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.mount("#app");
