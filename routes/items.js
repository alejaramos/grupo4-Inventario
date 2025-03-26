const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');


router.use(itemsController.authenticate);

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Obtiene un artículo por su ID
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID único del artículo a obtener
 *     responses:
 *       200:
 *         description: Artículo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   example: "bc7eba37-8546-439c-b99f-c4218363b297"
 *                 name:
 *                   type: string
 *                   example: "Auriculares Bluetooth"
 *                 quantity:
 *                   type: integer
 *                   example: 25
 *                 price:
 *                   type: number
 *                   format: float
 *                   example: 100.5
 *       404:
 *         description: Artículo no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', itemsController.getItems);

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Obtiene la lista de todos los artículos disponibles
 *     tags:
 *       - Items
 *     responses:
 *       200:
 *         description: Lista de artículos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                     example: "bc7eba37-8546-439c-b99f-c4218363b297"
 *                   name:
 *                     type: string
 *                     example: "Auriculares Bluetooth"
 *                   quantity:
 *                     type: integer
 *                     example: 25
 *                   price:
 *                     type: number
 *                     format: float
 *                     example: 100.5
 *       500:
 *         description: Error interno del servidor
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

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Crea un nuevo artículo
 *     tags:
 *       - Items
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - quantity
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Proyector LED"
 *               quantity:
 *                 type: integer
 *                 example: 6
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 500.00
 *               description:
 *                 type: string
 *                 example: "Proyector portátil de alta resolución"
 *     responses:
 *       201:
 *         description: Artículo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   example: "2176a8aa-8d19-4b53-85e9-4b05b7522987"
 *                 name:
 *                   type: string
 *                   example: "Proyector LED"
 *                 quantity:
 *                   type: integer
 *                   example: 6
 *                 price:
 *                   type: number
 *                   example: 500.00
 *       400:
 *         description: Datos inválidos en la solicitud
 *       500:
 *         description: Error del servidor
 */
router.post('/', itemsController.createItem);

/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     summary: Actualiza un artículo existente por ID
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del artículo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - quantity
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Laptop Gamer"
 *               quantity:
 *                 type: integer
 *                 example: 3
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 1500.75
 *     responses:
 *       200:
 *         description: Artículo actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   example: "bea7da49-aa79-4370-bf9c-d595d2492f81"
 *                 name:
 *                   type: string
 *                   example: "Laptop Gamer"
 *                 quantity:
 *                   type: integer
 *                   example: 3
 *                 price:
 *                   type: number
 *                   example: 1500.75
 *       400:
 *         description: Datos inválidos en la solicitud
 *       404:
 *         description: Artículo no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', itemsController.updateItem);

module.exports = router;