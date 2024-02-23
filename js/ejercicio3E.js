function calcularRaicesCuadraticas(a, b, c) {
    const discriminante = b * b - 4 * a * c;
  
    if (discriminante > 0) {

      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      return { tipo: "reales", x1, x2 };
    } else if (discriminante === 0) {
      const x = -b / (2 * a);
      return { tipo: "unica", x };
    } else {

      const parteReal = -b / (2 * a);
      const parteImaginaria = Math.sqrt(-discriminante) / (2 * a);
      return { tipo: "complejas", parteReal, parteImaginaria };
    }
  }
  const a = parseFloat(prompt("Ingrese el valor de a: "));
  const b = parseFloat(prompt("Ingrese el valor de b: "));
  const c = parseFloat(prompt("Ingrese el valor de c: "));
  
  const resultado = calcularRaicesCuadraticas(a, b, c);
  
  switch (resultado.tipo) {
    case "reales":
      console.log(`Las raíces reales son: ${resultado.x1} y ${resultado.x2}`);
      break;
    case "unica":
      console.log(`La única raíz real es: ${resultado.x}`);
      break;
    case "complejas":
      console.log(
        `Las raíces son complejas: ${resultado.parteReal} + ${resultado.parteImaginaria}i y ${resultado.parteReal} - ${resultado.parteImaginaria}i`
      );
      break;
  }
  