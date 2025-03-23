const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Obtiene un artículo por ID
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: false
 *         schema:
 *           type: integer
 *         description: ID del artículo a obtener
 *     responses:
 *       200:
 *         description: Artículo encontrado
 *       404:
 *         description: Artículo no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/', itemsController.getItems);
/**
 * @swagger
 * /api/items/:
 *   get:
 *     summary: Obtiene todos los artículos
 *     tags:
 *       - Items
 *     responses:
 *       200:
 *         description: Todos los artículos
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', itemsController.getItem);
/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Eliminar un artículo por ID
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del artículo a eliminar
 *     responses:
 *       200:
 *         description: Artículo eliminado correctamente
 *       404:
 *         description: Artículo no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
