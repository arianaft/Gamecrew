# Formularios — GameCrew

## NewSessionForm

Formulario para crear una nueva sesión de juego. Gestiona dos campos
y una lista dinámica de participantes.

**Campos:**
- `date` — fecha de la sesión, input tipo date
- `participantInput` — input temporal para escribir el nombre antes de añadirlo
- `participants` — array de participantes ya añadidos

**Validaciones:**
- La fecha es obligatoria
- Mínimo 2 participantes
- Máximo 6 participantes
- No se puede añadir el mismo participante dos veces

**Interacción:**
- Pulsar Enter en el input de participante lo añade a la lista
- Hacer clic en un participante añadido lo elimina de la lista
- Si hay errores se muestran en rojo debajo de cada campo
- Al enviar el formulario llama a `onSubmit` con los datos tipados

---

## GameProposalForm

Formulario para proponer un juego dentro de una sesión.

**Campos:**
- `gameName` — nombre del juego a proponer
- `proposedBy` — nombre de quien propone

**Validaciones:**
- El nombre del juego es obligatorio
- El nombre del participante es obligatorio

**Interacción:**
- Si hay errores se muestran en rojo debajo de cada campo
- Al enviar correctamente los campos se limpian automáticamente
- Llama a `onSubmit` con el nombre del juego y quien lo propone

---

## Patrón de formularios controlados

Todos los formularios de GameCrew siguen el mismo patrón:

1. Cada input tiene su propio `useState`
2. El atributo `value` del input apunta al estado
3. `onChange` actualiza el estado en cada tecla
4. Al enviar se valida y si hay errores se guardan en un estado `errors`
5. Los errores se muestran debajo de cada campo en rojo
6. Si la validación pasa se llama a la función `onSubmit` recibida por props