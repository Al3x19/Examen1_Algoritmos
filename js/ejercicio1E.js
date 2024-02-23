const planilla = prompt('Ingrese el numero de planilla Ejemplo:(FEB-01-2024)');
const empresa = prompt('Ingrese el Nombre de la empresa');
function obtenerInformacionEmpleado() {
    const nombre = prompt("Ingrese el nombre del Empleado:");
    const sueldoBase = parseInt(prompt("Ingrese el Salario del Empleado:"));
    const ihss = parseInt(prompt("Ingrese deduccion del  Ishh:"));
    const infop = parseInt(prompt("Ingrese deduccion de Infop:"));
    const adelanto = parseInt(prompt('Ingrese la cantidad de adelanto'));
    let total;
    total = sueldoBase - (ihss + infop + adelanto) ;
    return {
      nombre,
      sueldoBase,
      ihss,
      total,
      infop,
      adelanto,
    };
  }
  
  const listaEmpleados = [];
  while (true) {
    const empleado = obtenerInformacionEmpleado();
    listaEmpleados.push(empleado);
    const continuar = confirm("¿Desea registrar otro Empleado?");
    if (!continuar) break;
  }
  
  console.log("Lista de Empleados");
  for (const empleado of listaEmpleados) {
    console.log(`- Nombre :${empleado.nombre}, Salario: ${empleado.sueldoBase}:Deduccion de ISHH: ${empleado.ihss} Deduccion de Infop: ${empleado.infop} Adelanto: ${empleado.adelanto} Total Sueldo: ${empleado.total}`);
}

console.log(planilla);
console.log(empresa);