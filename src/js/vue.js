import Vue from "vue/dist/vue";
import data from "../json/people.json";

const app = new Vue({
  el: "#vue",
  data: {
    json: data.people,
    changeThis: false,
    button: "Widok Pełny",
    newInterest: "",
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

    addFriend(index) {
      this.json[index].friend = true;
      // index kurła!!!!!
    },

    plusLike(index) {
      this.json[index].likes++;
    },

    minusLike(index) {
      this.json[index].likes--;
    },

    addInterest(index) {
      this.json[index].interests.push(this.newInterest);
      this.newInterest = "";
    },

    addNewUser() {
      this.json.push(this.newUser);
      console.log(this.newUser);
    },
  },
});
