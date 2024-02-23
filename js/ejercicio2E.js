function obtenerInformacionAlumno() {
    const nombre = prompt("Ingrese el nombre del alumno:");
    const edad = parseInt(prompt("Ingrese la edad del alumno:"));
    const calificacion = parseFloat(prompt("Ingrese la calificación del alumno:"));
  
    return {
      nombre,
      edad,
      calificacion,
    };
  }
  
  const listaAlumnos = [];
  while (true) {
    const alumno = obtenerInformacionAlumno();
    listaAlumnos.push(alumno);
    const continuar = confirm("¿Desea registrar otro alumno?");
    if (!continuar) break;
  }
  
  console.log("Lista de Alumnos");
  for (const alumno of listaAlumnos) {
    console.log(`- ${alumno.nombre}, ${alumno.edad} años, Calificación: ${alumno.calificacion}`);
}
function validarNota() {
    if (calificacion => 65) {
    console.log('Aprobado');
    }else{
    console.log(`Usted reprobo la clase`);
    }
}
validarNota();
