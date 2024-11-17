/** Se desea llevar un control de los estudiantes que
asisten a presentar un examen. Se tiene por cada
participante: nombre, cédula, sexo y nota. Se requiere
de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
valor del examen y el mínimo aprobatorio.
se desea saber:
1.Porcentaje de aprobados y reprobados 
2.Estudiantes con la mejor nota
3.Chicas por encima de la nota promedio


nombre  ceduda  sexo  nota  
Luis     1111    M     12
Carla    2222    F    16.5
Mery     3333    F    8.5
*/

import Cl_estudiantes from "./Cl_estudiantes.js";
import Cl_examen from "./Cl_examen.js";
import Dt_estudiante from "./data.js";
import Dt_examen from "./data2.js";

const estudiantes = new Cl_estudiantes();

Dt_estudiante.forEach((estudiante) => 
  estudiantes.agregarEstudiante(
    new Cl_estudiante (estudiante.nombre, estudiante.cedula, estudiante.sexo, estudiante.nota)
)
);

alert (
    `Porcentaje de aprobados y reprobados: ${JSON.stringify(Cl_examen.porcAprobadosyReprobados())}`
    `estudiantes con la menjor nota: ${JSON.stringify(Cl_examen.estudiantemejornota())}`
    `Chicas por encima de la nota promedio: ${JSON.stringify(Cl_examen.chicasmayornotapromedio())}`	
)