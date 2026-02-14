const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017';
const client = new MongoClient(MONGO_URL);
let db;

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        db = client.db('todoapp');
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
    }
}

// Routes
app.get('/', (req, res) => {
    res.json({ message: '🐳 Todo API running in Docker!' });
});

// Get all todos
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await db.collection('todos').find().toArray();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add todo
app.post('/api/todos', async (req, res) => {
    try {
        const { text } = req.body;
        const result = await db.collection('todos').insertOne({
            text,
            completed: false,
            createdAt: new Date()
        });
        res.json({ id: result.insertedId, text, completed: false });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete todo
app.delete('/api/todos/:id', async (req, res) => {
    try {
        const { ObjectId } = require('mongodb');
        await db.collection('todos').deleteOne({ _id: new ObjectId(req.params.id) });
        res.json({ message: 'Deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});