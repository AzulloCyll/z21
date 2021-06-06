import Vue from "vue/dist/vue";

import data from "../json/people.json";

const app = new Vue({
  el: "#vue",
  data: {
    json: data.people,
    changeThis: true,
    button: "Widok zwinięty",
    newInterest: [],
    newUser: {
      name: "",
      surname: "",
      age: "",
      email: "",
      address: {
        street: "",
        zipcode: "",
        city: "",
      },
      likes: 0,
      friend: false,
      photo: "",
      interests: [],
    },
    isActive: false,
    filteredData: [],
  },
  created() {
    this.filteredData = this.json.slice();
  },

  methods: {
    changeView() {
      if (!this.changeThis) {
        this.changeThis = true;
        this.button = "Widok zwinięty";
      } else {
        this.changeThis = false;
        this.button = "Widok pełny";
      }
    },

    addFriend(man) {
      man.friend = true;
    },

    plusLike(man) {
      man.likes++;
    },

    minusLike(man) {
      man.likes--;
    },

    addInterest(man, index) {
      man.interests.push(this.newInterest[index]);
      this.newInterest = [];
    },

    addNewUser() {
      this.json.push(this.newUser);
    },

    filterByName(event) {
      this.isActive = event.target.value;
      this.filteredData = this.json.slice();

      switch (this.isActive) {
        case "nameAZ":
          this.filteredData.sort((a, b) => (a.name > b.name) ? 1 : -1);
          break;
        case "nameZA":
          this.filteredData.sort((a, b) => (a.name < b.name) ? 1 : -1);
          break;
        case "surnameAZ":
          this.filteredData.sort((a, b) => (a.surname > b.surname) ? 1 : -1);
          break;
        case "surnameZA":
          this.filteredData.sort((a, b) => (a.surname < b.surname) ? 1 : -1);
          break;
      }



    },
  },
});
