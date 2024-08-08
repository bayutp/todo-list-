import { defineStore } from "pinia";

export const useTodoList = defineStore('todolist',{
    state:() => ({
        todolist: [
            {title:'Belajar Html', isDone:false},
            {title:'Belajar Css', isDone:false},
            {title:'Belajar Js', isDone:false},
            {title:'Belajar Php', isDone:false},
            {title:'Belajar Database', isDone:false},
        ]
    }),
    getters: {
        showAll : (state) => state.todolist,
        doneOnly : (state) => state.todolist.filter(item => item.isDone),
        onGoing : (state) => state.todolist.filter(item => !item.isDone)
    },
    actions: {
        setFinish(title){
            this.todolist.find(item => item.title == title).isDone = true
        },
        setUnFinish(title){
            this.todolist.find(item => item.title == title).isDone = false
        },
        addTodoList(data){
            let isExist = this.todolist.filter(item => item.title == data).length

            if (isExist) {
                alert(`Todo list: ${data}, sudah ada!`)
            } else if(data == ""){
                alert("Todo list tidak boleh kosong!")
            } else {
                this.todolist.push({
                title: data, isDone:false
            })
            }
            
        }
    }
})