'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [
      {
        name: 'Laptop',
        quantity: 10,
        description: 'Laptop de oficina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monitor',
        quantity: 15,
        description: 'Monitor de 24 pulgadas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Teclado Mecánico',
        quantity: 20,
        description: 'Teclado con iluminación RGB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mouse Inalámbrico',
        quantity: 30,
        description: 'Mouse ergonómico y sin cables',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Impresora Láser',
        quantity: 5,
        description: 'Impresora multifuncional de alta velocidad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Silla Ergonomica',
        quantity: 8,
        description: 'Silla de oficina con soporte lumbar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Escritorio Ajustable',
        quantity: 12,
        description: 'Escritorio de altura regulable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Auriculares Bluetooth',
        quantity: 25,
        description: 'Auriculares con cancelación de ruido',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cámara Web HD',
        quantity: 18,
        description: 'Cámara web de alta definición para videollamadas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Proyector LED',
        quantity: 6,
        description: 'Proyector portátil de alta resolución',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};


