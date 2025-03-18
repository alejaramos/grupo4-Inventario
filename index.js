const express = require('express');
const sequelize = require('./config/dataBase');
const itemsRoutes = require('./routes/items');
const { swaggerUi, swaggerDocs } = require('./docs/swagger');

const app = express();
app.use(express.json());

// Documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/items', itemsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📄 Documentación en http://localhost:${PORT}/api-docs`);
});
