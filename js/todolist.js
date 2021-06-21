var app = new Vue({
  el: "#todolist",
  data: {
    isThumbs: true,
    message: "",
    todoArr: ["learn vue", "have a rest", "sporting"],
  },
  //   index: 0,
  methods: {
    addList: function () {
      this.todoArr.push(this.message);
      this.message = "";
    },
    remove: function (index) {
      this.todoArr.splice(index, 1);
    },
    clearList: function () {
      this.todoArr = [];
    },
    thumbsUp: function () {
      this.isThumbs = !this.isThumbs;
    },
    updateMsg: function (index) {
      // prompt("请输入修改后的内容");
      let res = prompt("请输入修改后的内容");
      Vue.set(app.todoArr, index, res);
    },
  },
});
