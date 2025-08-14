const request = require('supertest');
const app = require('../app'); // Adjust the path as necessary
const { Task } = require('../models/task'); // Adjust the path as necessary

describe('Task API', () => {
    beforeEach(async () => {
        await Task.deleteMany(); // Clear the tasks before each test
    });

    it('should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Test Task',
                description: 'This is a test task',
                status: 'pending'
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('task');
        expect(res.body.task.title).toEqual('Test Task');
    });

    it('should get all tasks', async () => {
        await Task.create({
            title: 'Test Task 1',
            description: 'This is a test task 1',
            status: 'pending'
        });

        const res = await request(app).get('/api/tasks');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('tasks');
        expect(res.body.tasks.length).toBeGreaterThan(0);
    });

    it('should update a task', async () => {
        const task = await Task.create({
            title: 'Test Task',
            description: 'This is a test task',
            status: 'pending'
        });

        const res = await request(app)
            .put(`/api/tasks/${task._id}`)
            .send({
                title: 'Updated Task',
                description: 'This is an updated test task',
                status: 'completed'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('task');
        expect(res.body.task.title).toEqual('Updated Task');
    });

    it('should delete a task', async () => {
        const task = await Task.create({
            title: 'Test Task',
            description: 'This is a test task',
            status: 'pending'
        });

        const res = await request(app).delete(`/api/tasks/${task._id}`);

        expect(res.statusCode).toEqual(204);
    });
});