import Vue from "vue/dist/vue";
import data from "../json/people.json";

const app = new Vue({
	el: "#vue",
	data: {
		myMessege: "Hello World",
		json: data.people,
	},
});
