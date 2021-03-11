import Vue from "vue/dist/vue";
import data from "../json/people.json";

const app = new Vue({
  el: "#vue",
  data: {
    json: data.people,
    changeThis: false,
    button: "Widok Pełny",
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
  },
});
