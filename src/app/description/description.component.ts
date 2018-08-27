import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  name: string
  minibio: string

  constructor() { }

  ngOnInit() {
    this.name = "Jorge Leite" 
    this.minibio = "Desenvolvedor de software com mais de 5 anos de experiência , já atuei em empresas de pequeno a grande porte. Atuo também com projetos freelancer (Web e Mobile), procuro me manter sempre envolvido com a comunidade de desenvolvedores, palestrando ou apoiando boas iniciativas que fomentem a evolução da área, para mais informações é só entrar em contato ou ficar ligado nas minhas redes sociais."
  }

}
