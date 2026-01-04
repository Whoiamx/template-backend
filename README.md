# Template Backend

Template de backend con **Express 5**, **TypeScript**, **Prisma** y arquitectura por capas (Repository Pattern).

## 🚀 Tecnologías

- **Express 5** - Framework web
- **TypeScript** - Tipado estático
- **Prisma** - ORM para base de datos
- **Zod** - Validación de esquemas
- **JWT** - Autenticación con tokens
- **Bcrypt** - Hash de contraseñas

## 📁 Estructura del proyecto

```
src/
├── config/          # Configuración (env, database)
├── controller/      # Controladores (manejan requests)
├── middlewares/     # Middlewares (auth, validation, errors)
├── repositories/    # Repositorios (acceso a datos)
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
├── utils/           # Utilidades (ApiError, ApiResponse, etc.)
├── app.ts           # Configuración de Express
└── server.ts        # Punto de entrada
```

## ⚙️ Instalación

1. **Clonar el repositorio**

```bash
git clone <repo-url>
cd template-backend
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
cp .env.example .env
# Editar .env con tus valores
```

4. **Configurar base de datos**

```bash
# Generar cliente de Prisma
npm run prisma:generate

# Crear migración y aplicar
npm run prisma:migrate
```

5. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

## 📜 Scripts disponibles

| Comando                   | Descripción                        |
| ------------------------- | ---------------------------------- |
| `npm run dev`             | Inicia servidor en modo desarrollo |
| `npm run build`           | Compila TypeScript a JavaScript    |
| `npm start`               | Inicia servidor en producción      |
| `npm run prisma:generate` | Genera el cliente de Prisma        |
| `npm run prisma:migrate`  | Crea y aplica migraciones          |
| `npm run prisma:studio`   | Abre Prisma Studio (GUI)           |
| `npm run prisma:push`     | Sincroniza schema sin migraciones  |

## 🔗 Endpoints

### Health Check

- `GET /api/health` - Estado del servidor
- `GET /api/health/ready` - Readiness check

### Usuarios (Auth)

- `POST /api/users/register` - Registrar usuario
- `POST /api/users/login` - Iniciar sesión

### Usuarios (Protegidos)

- `GET /api/users/me` - Obtener usuario actual
- `GET /api/users` - Listar usuarios (paginado)
- `GET /api/users/:id` - Obtener usuario por ID
- `POST /api/users` - Crear usuario
- `PATCH /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

## 🔐 Autenticación

Las rutas protegidas requieren un token JWT en el header:

```
Authorization: Bearer <token>
```

## 📝 Variables de entorno

```env
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000
```

## 🗄️ Base de datos

Este template usa **PostgreSQL** con Prisma. Para cambiar a otro proveedor:

1. Modificar `provider` en `prisma/schema.prisma`
2. Actualizar `DATABASE_URL` en `.env`
3. Regenerar cliente: `npm run prisma:generate`

Proveedores soportados: `postgresql`, `mysql`, `sqlite`, `sqlserver`, `mongodb`

## 📦 Agregar nuevos módulos

1. Crear modelo en `prisma/schema.prisma`
2. Ejecutar `npm run prisma:migrate`
3. Crear `repository` en `src/repositories/`
4. Crear `service` en `src/services/`
5. Crear `controller` en `src/controller/`
6. Crear `routes` en `src/routes/`
7. Registrar rutas en `src/app.ts`

## 📄 Licencia

MIT
