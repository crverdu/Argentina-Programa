"use strict";
class Persona {
    constructor(nombre, apellido, fechNac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechNac = fechNac;
    }
    toString() {
        return this.nombre + this.apellido;
    }
    edad(today) {
        return (today - this.fechNac);
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    set Apellido(apellido) {
        this.apellido = apellido;
    }
    set FechaNac(fechNac) {
        this.fechNac = fechNac;
    }
}
let persona = new Persona("Cristian", "Krutki", 1992);
console.log(persona);
console.log(persona.edad(2022));
persona.Nombre = "Tomas";
persona.Apellido = "Manzias";
persona.FechaNac = 2004;
console.log(persona);
console.log(persona.edad(2022));
