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
    addFriend(event) {
      // this.json[2].friend = true;
      console.log(event.target.parentElement);
      console.log(this.json[1].friend);
      this.json[1].friend = true;
      console.log(this.json[1].friend);
    },
  },
});
