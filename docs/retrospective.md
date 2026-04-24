# Retrospectiva — GameCrew

## Qué aprendí durante el proyecto

Este proyecto me ha permitido conectar  todos los conceptos
que había aprendido por separado. Entender cómo el frontend en React se
comunica con un backend en Express a través de una API REST ha sido el
aprendizaje más importante. Antes veía el frontend y el backend como cosas
separadas y ahora entiendo cómo forman un sistema completo.

TypeScript al principio me parecía un obstáculo pero acabó siendo una
ventaja — los errores de tipos me avisaban de problemas antes de ejecutar
el código y me ayudó a entender mejor la estructura de los datos.

Tailwind CSS me sorprendió positivamente. Al principio me parecía diferente
escribir estilos directamente en el HTML pero una vez que le cogí el truco
fue mucho más rápido que escribir CSS separado.

## Cómo conecté frontend, backend y API

El flujo que seguí fue:

1. Definí los tipos en TypeScript que representan los datos (Session, GameProposal)
2. Creé el backend Express con arquitectura por capas: rutas → controladores → servicios
3. Creé el cliente API tipado en el frontend que llama a esos endpoints
4. Usé Context API para compartir los datos entre todos los componentes
5. Los componentes consumen el contexto y muestran loading, error o datos

Lo más importante fue mantener los tipos alineados entre frontend y backend
para que los datos que devuelve la API encajen exactamente con lo que
espera el frontend.

## Principales problemas que encontré

**Integración frontend-API:** el problema más común fue que el frontend
intentaba conectarse al backend antes de que estuviera arrancado. Aprendí
a gestionar correctamente los estados de carga y error para que la UI
no se rompa mientras espera.

**TypeScript y los tipos:** al principio tenía errores como "Session is a
type and must be imported using a type-only import". Aprendí que hay que
usar `import type` cuando importas solo interfaces.

**Despliegue en Render:** el proceso de despliegue tuvo varios errores
relacionados con la configuración de TypeScript (moduleResolution) y las
dependencias que necesitaban estar en `dependencies` y no en
`devDependencies` para que funcionaran en producción.

**CORS:** al conectar el frontend desplegado en Vercel con el backend en
Render tuve que asegurarme de que el backend tenía CORS configurado
correctamente para aceptar peticiones desde el dominio de Vercel.

## Cómo utilicé la IA durante el desarrollo

Usé IA como asistente durante todo el proceso de desarrollo. Me ayudó a:

- Entender conceptos nuevos como Context API, hooks personalizados
  o arquitectura por capas en Express
- Resolver errores de TypeScript que no entendía
- Generar la estructura inicial de componentes y archivos
- Revisar y corregir código cuando algo no funcionaba
- Documentar cada parte del proyecto

Lo importante es que no usé la IA para copiar código sin entenderlo sino
para aprender qué hace cada parte y por qué está estructurada así.

## Reflexión final

GameCrew es una aplicación pequeña pero completa. Tiene frontend, backend,
API REST, estado global, rutas, formularios con validación, tipado con
TypeScript y está desplegada en producción. 

Si tuviera que repetir el proyecto cambiaría el orden — empezaría antes
con el backend para tener la API lista mientras desarrollo el frontend,
en lugar de hacerlo en paralelo. También añadiría autenticación desde
el principio para que cada grupo tenga sus propias sesiones.

Lo que más me ha gustado ha sido ver cómo todas las piezas encajan y
que la app funciona de verdad en producción, accesible desde cualquier
dispositivo.