import Vue from "vue/dist/vue";
import data from "../json/people.json";

const app = new Vue({
  el: "#vue",
  data: {
    json: data.people,
    changeThis: true,
    button: "Widok Pełny",
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
  },
  methods: {
    changeView() {
      if (!this.changeThis) {
        this.changeThis = true;
        this.button = "Widok zwinięty";
      } else {
        this.changeThis = false;
        this.button = "Widok Pełny";
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
  },
});
