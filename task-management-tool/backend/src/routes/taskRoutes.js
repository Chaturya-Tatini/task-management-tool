const express = require('express');
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const result = await req.app.locals.pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new task
router.post('/', async (req, res) => {
    try {
        const { title, description, status = 'pending' } = req.body;
        const result = await req.app.locals.pool.query(
            'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *',
            [title, description, status]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update task
router.put('/:id', async (req, res) => {
    try {
        console.log('PUT request received for task ID:', req.params.id);
        console.log('Request body:', req.body);
        
        const { title, description, status } = req.body;
        const result = await req.app.locals.pool.query(
            'UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *',
            [title, description, status, req.params.id]
        );
        
        console.log('Update result:', result.rows[0]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Delete task
router.delete('/:id', async (req, res) => {
    try {
        await req.app.locals.pool.query('DELETE FROM tasks WHERE id = $1', [req.params.id]);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;