<script>
import { useTodoList } from '@/stores/todoliststore';

export default {
    setup() {
        const todoListStore = useTodoList()
        return {todoListStore}
    },
    data(){
        return{
            new_todolist:'',
            show:'all'
        }
    }
}
</script>

<template>
    <div class="main">
        <h1>My Todo List</h1>

        <form @submit.prevent="todoListStore.addTodoList(new_todolist)">
            <input type="text" name="title" id="title" placeholder="new todo list.." v-model="new_todolist">
            <input type="submit" value="Add">
        </form>

        <div class="category">
            <button @click="show = 'all'">Show All</button>
            <button @click="show = 'ongoing'">On Going</button>
            <button @click="show = 'done'">Done</button>
        </div>

        <ul v-show="show == 'all'">
            <li v-for="(item, index) in todoListStore.showAll" :key="index" :class="{'text-finish' : item.isDone}">
                <span>{{ item.title }}</span>
                <span>
                    <button v-if="!item.isDone" @click="todoListStore.setFinish(item.title)">Set to Done</button>
                    <button v-else @click="todoListStore.setUnFinish(item.title)" :class="{'button-finish' : item.isDone}">Set to On Going</button>
                </span>
            </li>
        </ul>
        <ul v-show="show == 'ongoing'">
            <li v-for="(item, index) in todoListStore.onGoing" :key="index" :class="{'text-finish' : item.isDone}">
                <span>{{ item.title }}</span>
                <span>
                    <button v-if="!item.isDone" @click="todoListStore.setFinish(item.title)">Set to Done</button>
                    <button v-else @click="todoListStore.setUnFinish(item.title)" :class="{'button-finish' : item.isDone}">Set to On Going</button>
                </span>
            </li>
        </ul>
        <ul v-show="show == 'done'">
            <li v-for="(item, index) in todoListStore.doneOnly" :key="index" :class="{'text-finish' : item.isDone}">
                <span>{{ item.title }}</span>
                <span>
                    <button v-if="!item.isDone" @click="todoListStore.setFinish(item.title)">Set to Done</button>
                    <button v-else @click="todoListStore.setUnFinish(item.title)" :class="{'button-finish' : item.isDone}">Set to On Going</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* padding: 8px; */
}
h1{
    width: 600px;
    text-align: center;
    margin-inline-start: 40px;
    font-family: Arial, Helvetica, sans-serif;
}
ul {
    list-style: none;
    width: 600px;
}
li {
    border: solid 1px blueviolet;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
}

.text-finish {
    text-decoration: line-through;
    color: red;
    border: 1px solid red;
}

.button-finish {
    background-color: red;
}

button {
    background-color: blueviolet;
    color: white;
    padding: 8px 12px 8px 12px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
}

form {
    width: 600px;
    padding-inline-start: 40px;
}

form input {
    padding: 10px;
    border-radius: 8px;
    line-height: 25px;
    background-color: blueviolet;
    color: white;
    width: 10%;
}

form input:focus {
    outline-color: blueviolet;
}

form input:first-child {
    width: 80%;
    margin: 0px 10px;
    border: solid 1px blueviolet;
    background-color: white;
    color: black;
}

.category{
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 600px;
    margin-top: 15px;
    padding-inline-start: 40px;
}

</style>