# RegistrApp

Aplicación móvil de registro de asistencia universitaria desarrollada con Ionic y Angular. Permite a docentes generar códigos QR para cada clase y a estudiantes escanearlos para registrar su asistencia, con autenticación y almacenamiento en tiempo real mediante Firebase.

---

## Funcionalidades

- **Autenticación** — Registro e inicio de sesión de usuarios con Firebase Authentication
- **Roles diferenciados** — Dos perfiles de usuario: docente y estudiante, con vistas y funcionalidades distintas
- **Generación de QR** — El docente genera un código QR único por clase para registrar asistencia
- **Escaneo de QR** — El estudiante escanea el código QR con la cámara del dispositivo usando Capacitor
- **Almacenamiento en tiempo real** — Datos sincronizados con Firestore
- **Perfil de usuario** — Vista de datos personales y configuración de cuenta
- **Noticias** — Sección de noticias consumiendo una API REST externa
- **Menú lateral** — Navegación entre secciones con menú desplegable

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| Ionic 6 | Framework de aplicaciones móviles |
| Angular 14 | Framework frontend |
| TypeScript | Lenguaje principal |
| Firebase Authentication | Autenticación de usuarios |
| Cloud Firestore | Base de datos en tiempo real |
| Capacitor | Acceso a la cámara del dispositivo |
| angularx-qrcode | Generación de códigos QR |
| @capacitor-community/barcode-scanner | Escaneo de QR con la cámara |
| API REST (NewsAPI) | Noticias en tiempo real |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── login/          # Inicio de sesión
│   │   ├── registro/       # Registro de usuarios
│   │   ├── alumno/         # Vista y escaneo QR del estudiante
│   │   ├── docente/        # Vista y generación QR del docente
│   │   ├── perfil/         # Perfil de usuario
│   │   └── noticia/        # Sección de noticias
│   ├── services/
│   │   ├── auth.service.ts        # Firebase Authentication
│   │   ├── firestore.service.ts   # Operaciones CRUD en Firestore
│   │   ├── noticia.service.ts     # Consumo de API de noticias
│   │   └── interaction.service.ts # Toasts, loaders y alertas
│   ├── models/
│   │   └── models.ts       # Interfaces TypeScript (UserI, Article, etc.)
│   ├── home/               # Página principal post-login
│   ├── menu/               # Menú lateral
│   └── ajustes/            # Ajustes de la aplicación
└── environments/
    └── environment.ts      # Configuración de Firebase
```

---

## Requisitos previos

- Node.js
- Ionic CLI: `npm install -g @ionic/cli`
- Angular CLI: `npm install -g @angular/cli`
- Una cuenta de Firebase con un proyecto configurado (Authentication + Firestore)

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/alysph/registrapp.git
   cd registrapp
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las credenciales de Firebase en `src/environments/environment.ts`.

4. Levanta el servidor de desarrollo:
   ```bash
   ionic serve
   ```

> Nota: El escaneo de QR con cámara requiere ejecutar la app en un dispositivo físico o emulador Android/iOS mediante Capacitor. En el navegador solo estará disponible la generación de QR.

---

## Autora

**Alison Urrea** — [GitHub](https://github.com/alysph)

---

## Licencia

Proyecto académico — Duoc UC, 2022.
