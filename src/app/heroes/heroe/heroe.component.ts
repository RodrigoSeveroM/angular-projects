import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Iroman';
    edad: number = 27;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNumero(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre= 'SpiderMan';
    }

    cambiarEdad(): void{
        this.edad= 28;
    }
}