export default class Cl_examen {
    constructor() {
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    porcAprobadosyReprobados() {
        let aprobados = this.estudiante[0].aprueba();
        let reprobados = this.estudiante[0].aprueba();
    }

    estudianteMejorNota() {
        let mejorNota = 0;
        for (let i = 0; i < this.estudiante.length; i++)
            mejorNota += this.estudiante[i].estudiante();
        mejorNota = mejorNota / this.estudiante.length;
        return mejorNota;
    }

    chicasmayornotapromedio() {
        let estudianteResults = []
        mejorNota = this.estudianteMejorNota();
        for (let i = 0; i < this.estudiante.length; i++)
            if (this.estudiante[i].estudiante > mejorNota)
                estudianteResults.push(this.estudiante[i]);
        return estudianteResults;
    }
}