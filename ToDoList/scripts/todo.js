new Vue({
    el: "#app",
    data: {
        todo: "",
        list: ["hoge", "fuga"], //確認用データ
    },
    methods: {
        sendTodo: function () {
            this.list.push(this.todo);
            this.todo = "";
        }
    },
})