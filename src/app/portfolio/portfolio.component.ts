import { Component, OnInit } from '@angular/core';
import { IndicationModel } from './indication.model';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  indications: IndicationModel[] = [];

  constructor() {

    this.generateIndications()
  }

  ngOnInit() {
  }

  generateIndications = () => {
    let indicationThalles = new IndicationModel("Thalles Paz", "Head of Customer Success & Support Manager na Umbler", "Jorge é um profissional muito acima da média, focado e determinado, capaz de se reinventar muito rápido.Admiro a capacidade de ter ideias diferentes, de arriscar e se apaixonar. É um profissional que trabalha com muita intensidade e proatividade.", "../../assets/image/people.jpg")
    let indicationMatofino = new IndicationModel("Cristiano Diedrich", "Container Specialist at Umbler", "Jorge é uma pessoa excepcional, sempre de bom humor e com muita vontade de ajudar os colegas. É uma pessoa criativa e sincera, um dos melhores profissionais com quem tive a honra de trabalhar. Não existe tempo ruim para ele, e sempre tem ideias que ajudam a todos.", "https://media.licdn.com/dms/image/C5603AQF5v5lOptxISA/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=UVk9WqK2skDcrjA7EzSNgY5VfbGThgcF_g1hAX4MM4M")
    let indicationRaphaelMonteiro = new IndicationModel("Raphael Monteiro","Senior Software Engineer Technical Lead at Agibank", "Jorge possui um perfil profissional diferenciado, sempre identificando pontos a melhorar na equipe e na empresa como um todo. É muito bom tecnicamente, pró ativo e produtivo.Tenho certeza que com sua dedicação, disciplina e autodidata, irá se tornar cada vez melhor e evoluir muito em sua carreira.", "https://media.licdn.com/dms/image/C4D03AQHxPqnkDYtifA/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=_bjvge3fUJxCGiVDYx2e4twapoigA_zy_fd61fPrPsE")
    this.indications.push(indicationThalles)
    this.indications.push(indicationMatofino)
    this.indications.push(indicationRaphaelMonteiro)
  }

}
