import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  filteredTasks: any[] = [];
  loading: boolean = true;
  showForm = false;
  editingId: number | null = null;
  filterStatus = 'all';
  errorMessage = '';
  successMessage = '';
  newTask = { title: '', description: '', status: 'pending' };
  editingTask = { title: '', description: '', status: 'pending' };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getTasks().subscribe(
      (data: any[]) => {
        this.tasks = data;
        this.filteredTasks = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching tasks', error);
        this.loading = false;
      }
    );
  }

  filterTasks(): void {
    if (this.filterStatus === 'all') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task => task.status === this.filterStatus);
    }
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(
      () => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      },
      (error) => {
        console.error('Error deleting task', error);
      }
    );
  }

  showAddForm(): void {
    this.showForm = true;
    this.newTask = { title: '', description: '', status: 'pending' };
  }

  saveTask(): void {
    this.clearMessages();
    this.taskService.createTask(this.newTask).subscribe(
      (task) => {
        this.tasks.push(task);
        this.filteredTasks = this.tasks;
        this.showForm = false;
        this.successMessage = 'Task created successfully!';
        this.clearMessagesAfterDelay();
      },
      (error) => {
        this.errorMessage = 'Error creating task. Please try again.';
        console.error('Error creating task', error);
      }
    );
  }

  clearMessages(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  clearMessagesAfterDelay(): void {
    setTimeout(() => this.clearMessages(), 3000);
  }

  editTask(task: any): void {
    this.editingId = task.id;
    this.editingTask = { ...task };
  }

  updateTask(): void {
    const taskWithId = { ...this.editingTask, id: this.editingId || undefined };
    this.taskService.updateTask(taskWithId).subscribe(
      (updatedTask) => {
        const index = this.tasks.findIndex(t => t.id === this.editingId);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
        }
        this.cancelEdit();
      },
      (error) => {
        console.error('Error updating task', error);
      }
    );
  }

  cancelEdit(): void {
    this.editingId = null;
    this.showForm = false;
  }

  markCompleted(task: any): void {
    if (task.status === 'completed') return;
    
    task.status = 'completed';
    this.taskService.updateTask(task).subscribe(
      (result) => {
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = result;
        }
      },
      (error) => {
        console.error('Error marking task as completed', error);
        task.status = 'pending';
      }
    );
  }
}