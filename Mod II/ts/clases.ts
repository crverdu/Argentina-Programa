class Persona {
    private nombre: string;
    private apellido: string;
    private fechNac:number;
    constructor(nombre:string, apellido:string, fechNac:number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechNac = fechNac;
        
    }
    public toString(): string{
        return this.nombre + this.apellido
    }
    public edad (today:number):number {
        return (today - this.fechNac);
    }
    
    public getNombre() : string {
        return this.nombre;
    }
    public getApellido() : string {
        return this.apellido;
    }
    set Nombre (nombre:string){
        this.nombre = nombre;
    }
    set Apellido (apellido:string) {
        this.apellido =apellido;
    }
    set FechaNac(fechNac:number) {
        this.fechNac =fechNac;
    }
}

let persona = new Persona("Cristian","Krutki",1992);
console.log(persona);
console.log(persona.edad(2022));
persona.Nombre="Tomas";
persona.Apellido="Manzias";
persona.FechaNac = 2004;
console.log(persona);
console.log(persona.edad(2022));