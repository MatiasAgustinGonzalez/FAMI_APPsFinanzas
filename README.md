# FAMI – Frontend

Este repositorio contiene la **parte frontend** de FAMI, la aplicación web de finanzas personales para uso individual o familiar.



---

## 📂 Estructura de carpetas

Hemos adoptado la **Screaming Architecture** para que la organización “grite” las funcionalidades:

fami-frontend/
│
├── index.html                   # Login
├── register.html                # Registro
├── recover.html                 # Recuperar contraseña
│
├── usuario/                     # Todo lo relacionado al módulo de usuario
│   ├── login.css
│   ├── register.css
│   ├── recover.css
│   ├── login.js                 # Validaciones básicas
│   └── recover.js               # Envío de código / validación simulada
│
├── shared/                      # Cosas reutilizables
│   ├── logo.svg
│   ├── reset.css
│   ├── variables.css            # Colores, fuentes
│   └── utils.js                 # Funciones comunes (validar email, etc.)
│
├── assets/
│   ├── img/
│   └── fonts/
│
└── README.md



## 📱 Propuesta de Pantallas – FAMI

### 1. Pantalla de Inicio / Login
- **Campos**  
  - Correo electrónico  
  - Contraseña  
- **Botón**  
  - Iniciar sesión  
- **Links**  
  - ¿No tenés cuenta? Registrate  
  - ¿Olvidaste tu contraseña?  

---

### 2. Pantalla de Registro
- **Campos**  
  - Nombre  
  - Apellido  
  - Correo electrónico  
  - Contraseña  
- **Botón**  
  - Crear cuenta  

---

### 3. Recuperar Contraseña (3 pasos)
1. **Paso 1**  
   - Campo: Correo electrónico  
   - Botón: Enviar código (4 dígitos)  
2. **Paso 2**  
   - Campo: Código de verificación (4 dígitos)  
   - Botón: Verificar  
3. **Paso 3**  
   - Campos: Nueva contraseña, Confirmar contraseña  
   - Botón: Cambiar contraseña  

---

### 4. Dashboard / Panel Principal
- **Gráficos**  
  1. Barras apiladas de **Ingresos por mes** (colores por fuente)  
  2. Barras de **Gastos por mes** (reales + cuotas)  
  3. Torta de **Categorías de gasto**  
- **Tablas**  
  - Últimos 10 gastos del mes  
  - Top 5 gastos del año  
- **Centro de Mensajes / Recordatorios** (abajo)  
- **Botones**  
  - + Ingreso  
  - + Gasto  
- **Switch**  
  - Modo Individual / Familiar  

---

### 5. Página de Nuevo Gasto
- **Campos**  
  - Descripción  
  - Monto  
  - Categoría  
  - Medio de pago (Efectivo, QR, Débito, Crédito)  
  - Cuotas (si aplica)  
  - Fecha  
- **Botón**  
  - Guardar gasto  

---

### 6. Página de Nuevo Ingreso
- **Campos**  
  - Descripción (opcional)  
  - Monto  
  - Fuente de ingreso  
  - Fecha  
- **Botón**  
  - Guardar ingreso  

---

### 7. Servicio de Mensajería
- **Individual**: notas/recordatorios propios  
- **Familiar**: mensajes compartidos con el grupo  
- **Funcionalidades**:  
  - Crear, editar, eliminar, marcar como hecho  
  - Fecha y autor en cada mensaje  

---

### 8. Administración de Perfiles
- Ver y editar datos personales  
- Cambiar contraseña  
- Asociar / desvincular usuarios (modo familiar)  
- Eliminar cuenta  

---

### 9. Selector de Modo: Individual / Familiar
- Switch o botón para alternar vistas  
- Ajusta toda la información mostrada según el modo seleccionado  

