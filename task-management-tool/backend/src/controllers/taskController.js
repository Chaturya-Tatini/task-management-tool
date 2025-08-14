class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    async createTask(req, res) {
        try {
            const taskData = req.body;
            const newTask = await this.taskService.createTask(taskData);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: 'Error creating task', error });
        }
    }

    async getTasks(req, res) {
        try {
            const tasks = await this.taskService.getTasks();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tasks', error });
        }
    }

    async updateTask(req, res) {
        try {
            const taskId = req.params.id;
            const taskData = req.body;
            const updatedTask = await this.taskService.updateTask(taskId, taskData);
            if (updatedTask) {
                res.status(200).json(updatedTask);
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating task', error });
        }
    }

    async deleteTask(req, res) {
        try {
            const taskId = req.params.id;
            const deleted = await this.taskService.deleteTask(taskId);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting task', error });
        }
    }
}

module.exports = TaskController;