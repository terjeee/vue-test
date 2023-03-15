<template>
  <li>
    <h2>{{ data.name }} {{ data.isFavorite ? "(FAV)" : "" }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
    <button @click="toggleFavorite">toggleFavorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ data.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ data.email }}
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: {
      data: {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
          default: ":)",
        },
        phone: String,
        email: String,
        isFavorite: Boolean,
      },
    },
    // emits: ["toggle-favorite"],
    emits: {
      "toggle-favorite": function (id) {
        if (!id) return console.warn('id in $emit("toggle-favorite" is missing)');
        return true;
      },
    },
    data() {
      return {
        detailsAreVisible: false,
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        this.$emit("toggle-favorite", this.data.id);
      },
    },
  };
</script>
