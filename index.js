const express = require('express');
const rateLimit = require('express-rate-limit');
const redis = require('redis');
const itemsRoutes = require('./routes/items');
const { swaggerUi, swaggerDocs } = require('./docs/swagger');

const app = express();
app.use(express.json());

const redisClient = redis.createClient({ legacyMode: true });
redisClient.connect().catch(console.error);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: { error: 'Demasiadas solicitudes, inténtelo más tarde' },
});

app.use(limiter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/items', itemsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
    console.log(`📄 Documentación en http://localhost:${PORT}/api-docs`);
});