export default class Cl_estudiantes {
    constructor(nombre, cedula, sexo, nota) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.sexo = sexo;
        this.nota = nota;
    }

    aprueba() {
        if (this.nota >= 9.6) {
            return true;
        } else {
            return false;
        }
    }
}
 