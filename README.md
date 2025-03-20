# Blog Musical React

Un blog musical interactivo construido con React que permite a los usuarios explorar y disfrutar de diferentes canciones.

## Requisitos del Sistema

- Node.js (versión 14.0.0 o superior)
- npm (versión 6.0.0 o superior)

## Características

- Sistema de autenticación
- Diseño responsivo
- Animaciones suaves
- Componentes reutilizables
- Integración con YouTube

## Tecnologías Utilizadas

- React
- TypeScript
- CSS3
- Font Awesome
- AOS (Animate On Scroll)

## Instalación y Configuración

1. **Clona el repositorio**
```bash
git clone https://github.com/BboyPlag/Test-React.git
```

2. **Entra al directorio del proyecto**
```bash
cd Test-React
```

3. **Instala las dependencias**
```bash
npm install
```

4. **Inicia el servidor de desarrollo**
```bash
npm start
```

El proyecto se abrirá automáticamente en tu navegador predeterminado. Si no se abre automáticamente, puedes acceder manualmente visitando `http://localhost:3000`

## Credenciales de Prueba

- Usuario: admin
- Contraseña: admin123

## Solución de Problemas Comunes

Si encuentras algún error durante la instalación:

1. **Error de dependencias:**
   ```bash
   npm clean-install
   ```

2. **Error de puerto en uso:**
   El proyecto intentará usar automáticamente el siguiente puerto disponible

3. **Errores de TypeScript:**
   ```bash
   npm run build
   ```

## Estructura del Proyecto

```
react-login/
├── src/
│   ├── components/
│   │   ├── Login.tsx
│   │   ├── Home.tsx
│   │   └── SongCard.tsx
│   ├── App.tsx
│   └── index.tsx
├── public/
└── package.json
```

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm build`: Crea una versión optimizada para producción
- `npm test`: Ejecuta las pruebas
- `npm run eject`: Expone las configuraciones de webpack (¡usar con precaución!)

## Contribuir

Si deseas contribuir al proyecto:

1. Haz un Fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request 