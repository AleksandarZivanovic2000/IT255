import { Component, OnInit } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import * as taskActions from './task.action'


@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {

  tasks: string[]=[];
  newTask: string = '';


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('task').subscribe((state)=>{
      this.tasks = state.tasks
    })
  }

  addTask(){
    if(this.newTask.trim()!== ''){
      this.store.dispatch(taskActions.addTask({ task: this.newTask}));
      this.newTask = ''
    }
  }

  removeTask(index: number){
    this.store.dispatch(taskActions.removeTask({index}));
  }
}

