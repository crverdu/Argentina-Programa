import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Task} from '../../task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor( private tasksService: TaskService) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe (tasks => {
      this.tasks = tasks;
    })
  }
  deleteTask(task: Task){
    this.tasksService.deleteTask(task).subscribe(()=>(
      this.tasks=this.tasks.filter(t => t.id !== task.id)
    ))
  }

}
