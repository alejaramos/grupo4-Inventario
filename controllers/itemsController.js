const { Item } = require('../models');

// DELETE
exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.destroy({ where: { id } });
        if (item) {
            res.json({ message: 'Artículo eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Artículo no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar el artículo', error: err.message });
    }
};
