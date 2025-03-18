# 💻 Proyecto Grupo4

## 📝 Instrucciones para correr el proyecto

### 📂 1. Clonar el Repositorio
```bash
git clone git@github.com:alejaramos/grupo4-Inventario.git
cd grupo4-Inventario
```

---

### 📦 2. Instalar Dependencias
```bash
npm install
```

---

### 🗃️ 3. Configurar la Base de Datos
Actualiza las credenciales en el archivo `config/config.json` según tu entorno. 
{
  "development": {
    "username": "ingridramos", //nombre de usuario de postgres
    "password": null, //password de usuario de postgres
    "database": "inventory", //nombre de la base de datos postgres
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

---

### 🚀 4. Inicializar la Base de Datos
```bash
npm run db:reset
```

---

### 🏃‍♂️ 5. Ejecutar el Servidor
```bash
npm run dev
```


¡Listo! Ahora puedes acceder a la API en:
```
http://localhost:3000
```

Y la documentación en Swagger en:
```
http://localhost:3000/api-docs
```
