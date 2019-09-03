import {observable} from "mobx";

export default class Todo {
    @observable id = `todo-${Math.random()}`;
    @observable finished = false;
    @observable title = "";
    constructor(title) {
        this.title = title;
    }
}
