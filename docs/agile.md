# Metodologías de desarrollo ágil

## ¿Qué es Agile?

Agile es una forma de entender el desarrollo de software que nació como alternativa
a los métodos tradicionales, donde todo se planificaba al detalle desde el principio
y luego se desarrollaba durante meses sin apenas revisar si iba bien. El problema con
ese enfoque es que cuando terminabas, el resultado muchas veces ya no encajaba con lo
que el cliente necesitaba realmente.

Agile propone lo contrario: trabajar en ciclos cortos, entregar algo funcional
rápido y ajustar según el feedback que vas recibiendo. La idea es que es mejor
equivocarse pronto y corregir, que darte cuenta del error al final cuando ya has
invertido meses de trabajo.

No es una herramienta concreta ni un proceso fijo, es más bien una mentalidad.
A partir de ella han surgido distintos marcos de trabajo, siendo Scrum y Kanban
los más usados.

---

## ¿Qué es Scrum?

Scrum es uno de los marcos más populares para aplicar Agile en equipos de desarrollo.
Lo que hace es dar estructura al trabajo dividiéndolo en ciclos cortos llamados sprints,
normalmente de una a cuatro semanas, al final de los cuales tienes algo funcional
que mostrar.

Sus conceptos principales son:

- **Product Owner**: la persona que decide qué se construye y en qué orden según
  el valor que aporta al usuario. Es quien prioriza.
- **Scrum Master**: se encarga de que el equipo pueda trabajar bien, elimina
  bloqueos y facilita las reuniones. No es un jefe, es más bien un facilitador.
- **Equipo de desarrollo**: los que construyen el producto. En Scrum se autoorganizan,
  es decir, ellos deciden cómo repartirse el trabajo dentro del sprint.
- **Product Backlog**: la lista completa de todo lo que hay que construir, ordenada
  por prioridad. Es un documento vivo que cambia constantemente.
- **Sprint Backlog**: el subconjunto de tareas del backlog que el equipo se compromete
  a terminar durante ese sprint concreto.
- **Daily standup**: reunión diaria de no más de 15 minutos donde cada persona
  responde tres preguntas: qué hice ayer, qué voy a hacer hoy y si hay algo que
  me está bloqueando.
- **Sprint Review**: al final del sprint se muestra lo que se ha construido y se
  recoge feedback para ajustar lo siguiente.
- **Retrospectiva**: el equipo reflexiona sobre cómo ha trabajado, qué ha ido bien
  y qué podría mejorar en el próximo sprint.

---

## ¿Qué es Kanban?

Kanban es un sistema para gestionar el flujo de trabajo de forma visual. Se basa en
un tablero con columnas que representan los distintos estados por los que pasa una
tarea, por ejemplo: Backlog, Todo, In Progress, Review y Done. Cada tarea es una
tarjeta que va avanzando de columna en columna según su estado real.

A diferencia de Scrum, Kanban no tiene sprints ni roles definidos. Las tareas entran
al flujo cuando hay capacidad para trabajarlas y salen cuando están terminadas. El
principio más importante es limitar el trabajo en curso, es decir, no empezar
demasiadas cosas a la vez para no saturar al equipo y que las tareas fluyan mejor.

---

## Diferencias entre Scrum y Kanban

Aunque los dos se apoyan en Agile, funcionan de forma bastante diferente.

Scrum organiza el trabajo en bloques de tiempo fijos con un inicio y un fin claro.
Kanban en cambio es un flujo continuo sin ciclos definidos. En Scrum los roles están
bien definidos y cada uno tiene una responsabilidad concreta. En Kanban no hay roles
obligatorios, cualquiera puede mover una tarjeta o coger una tarea nueva.

Otra diferencia importante es cuándo puedes cambiar las prioridades. En Scrum los
cambios se hacen entre sprints, no en medio de uno. En Kanban puedes reorganizar
las prioridades en cualquier momento porque no hay un compromiso cerrado por ciclo.

---

## ¿Cuándo usar cada uno?

**Scrum** encaja mejor cuando tienes un proyecto con fases claras, un equipo estable
y puedes planificar en bloques. Es ideal para desarrollar una aplicación nueva donde
sabes más o menos qué funcionalidades quieres construir y puedes organizarlas en
sprints. Este proyecto, por ejemplo, encajaría bien con Scrum.

**Kanban** encaja mejor cuando el trabajo es continuo e impredecible. Un equipo de
soporte técnico que recibe bugs y peticiones constantemente, sin saber cuántos ni
cuándo, se beneficia más de Kanban porque no tiene sentido comprometerse a un sprint
si no sabes lo que va a entrar. También es útil para proyectos en mantenimiento donde
no hay grandes bloques de desarrollo sino pequeñas mejoras continuas.