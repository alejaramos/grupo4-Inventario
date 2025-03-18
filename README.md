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