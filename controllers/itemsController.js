const redis = require('redis');
const { v4: uuidv4 } = require('uuid');

const redisClient = redis.createClient({ legacyMode: true });
redisClient.connect().catch(console.error);

// Token estático para autenticación
const STATIC_TOKEN = '8764b5a4fef8910d5a7dd3ffa965ed2ee0503521898bb1364f1ce98596dcfcc2';

// Middleware para validar el token
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado. Token requerido.' });
    }
    if (token !== `Bearer ${STATIC_TOKEN}`) {
        return res.status(403).json({ error: 'Acceso denegado. Token inválido.' });
    }
    next();
};

exports.getItems = async(req, res) => {
    redisClient.get('items', (err, data) => {
        if (data) {
            res.json(JSON.parse(data));
        } else {
            res.json([]);
        }
    });
};

exports.getItem = async(req, res) => {
    const { id } = req.params;
    redisClient.get(`item:${id}`, (err, data) => {
        if (data) {
            res.json(JSON.parse(data));
        } else {
            res.status(404).json({ error: 'Artículo no encontrado' });
        }
    });
};

exports.createItem = async(req, res) => {
    const { name, quantity, price } = req.body;
    if (!name || !quantity || !price) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    const id = uuidv4();
    const newItem = { id, name, quantity, price };

    redisClient.setex(`item:${id}`, 3600, JSON.stringify(newItem));
    redisClient.get('items', (err, data) => {
        const items = data ? JSON.parse(data) : [];
        items.push(newItem);
        redisClient.setex('items', 3600, JSON.stringify(items));
    });

    res.status(201).json(newItem);
};

exports.updateItem = async(req, res) => {
    const { id } = req.params;
    const { name, quantity, price } = req.body;
    redisClient.get(`item:${id}`, (err, data) => {
        if (!data) {
            return res.status(404).json({ error: 'Artículo no encontrado' });
        }
        const updatedItem = { id, name, quantity, price };
        redisClient.setex(`item:${id}`, 3600, JSON.stringify(updatedItem));
        res.json(updatedItem);
    });
};

exports.deleteItem = async(req, res) => {
    const { id } = req.params;
    redisClient.del(`item:${id}`, (err, response) => {
        if (response === 1) {
            res.json({ message: 'Artículo eliminado' });
        } else {
            res.status(404).json({ error: 'Artículo no encontrado' });
        }
    });
};

exports.authenticate = authenticate;