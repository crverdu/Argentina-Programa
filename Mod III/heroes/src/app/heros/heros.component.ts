import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit {
  /***hero: Hero = {
    id:1, 
    name: 'windstorm'
  } ;***/
  //Asignacion por injected
  heroes: Hero[] = [];
  //Select de un hero
  //cambiado por router link selectedHero?: Hero;
  //Constructor editado
  constructor(private heroService: HeroService) {}

  // Geter para un hero
  getHeroes(): void {
    // original this.heroes = this.heroService.getHeroes();
    //Observable
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  //Evento inicio ng
  ngOnInit(): void {
    this.getHeroes();
  }
  /** No se necesita al cambiar por routing 
 *  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('Heroes Component: selected hero id= '+ hero.id);
  }*/
}
