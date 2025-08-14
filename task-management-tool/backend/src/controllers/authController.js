const jwtService = require('../services/jwtService');

const authController = {
    login: (req, res) => {
        const { username, password } = req.body;
        
        // Simple demo authentication - replace with real user validation
        if (username === 'admin' && password === 'password') {
            const user = { id: 1, username: 'admin' };
            const token = jwtService.generateToken(user);
            
            res.json({
                success: true,
                token: token,
                user: { id: user.id, username: user.username }
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
    },

    register: (req, res) => {
        // Simple demo registration
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Username and password are required'
            });
        }

        const user = { id: Date.now(), username };
        const token = jwtService.generateToken(user);
        
        res.status(201).json({
            success: true,
            token: token,
            user: { id: user.id, username: user.username }
        });
    }
};

module.exports = authController;