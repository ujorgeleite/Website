import { Component, OnInit, ViewChild } from '@angular/core';
import { IndicationModel } from './indication.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  indications: IndicationModel[] = [];

  constructor() {

  }

  ngOnInit() {
    this.generateIndications()


  }

  generateIndications = () => {
    let indicationMatofino = new IndicationModel("Cristiano Diedrich", "Container Specialist at Umbler", "Jorge é uma pessoa excepcional, sempre de bom humor e com muita vontade de ajudar os colegas. É uma pessoa criativa e sincera, um dos melhores profissionais com quem tive a honra de trabalhar. Não existe tempo ruim para ele, e sempre tem ideias que ajudam a todos.", "https://media.licdn.com/dms/image/C5603AQF5v5lOptxISA/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=UVk9WqK2skDcrjA7EzSNgY5VfbGThgcF_g1hAX4MM4M","August 7, 2018, Jorge worked with Cristiano in the same group")
    let indicationRaphaelMonteiro = new IndicationModel("Raphael Monteiro", "Senior Software Engineer Technical Lead at Agibank", "Jorge possui um perfil profissional diferenciado, sempre identificando pontos a melhorar na equipe e na empresa como um todo. É muito bom tecnicamente, pró ativo e produtivo.Tenho certeza que com sua dedicação, disciplina e autodidata, irá se tornar cada vez melhor e evoluir muito em sua carreira.", "https://media.licdn.com/dms/image/C4D03AQHxPqnkDYtifA/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=_bjvge3fUJxCGiVDYx2e4twapoigA_zy_fd61fPrPsE","December 14, 2017, Raphael managed Jorge directly")
    let indicationMarcosArtigas = new IndicationModel("Marcos Artigas", "Tribe Leader", "Jorge, foi com certeza um dos profissionais mais dedicados a ajudar nossa equipe a atingir nossos objetivos, ele é tão pilhado que lembro que antes de começar a trabalhar na empresa já estava me atucanando para aprender e criar oportunidades de crescimento para ambos os lados. É um Profissional que tem ótima comunicação e facilidade de trabalhar, maduro em suas decisões e pensamentos. Só temos a agradecer pelo temo em que estivemos juntos.", "https://media.licdn.com/dms/image/C4E03AQHYSCdFwjQwHg/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=uvWcVXu2H8-VAtgDNuwqRx_bd-ZhWQ0UuNNCmvj3Ih0","August 6, 2018, Marcos managed Jorge directly")
    let indicationFernandoMondo = new IndicationModel("Fernando Mondo da Silva", "Software Architect na Umbler", " O Jorge é um profissional que veste a camisa da empresa. Sempre participativo e engajado, nunca se limita somente ao que lhe é solicitado. Além de um ótimo programador, possui habilidades e perfil de liderança.<br><br>Tive o prazer de trabalhar com o Jorge nos últimos meses, e pude comprovar suas qualidade como desenvolvedor, se destacando nos conhecimentos de c#, Javascript tanto em back-end como em front-end.<br><br>Mais do que colega, o Jorge tem carisma e é impossível não fazer amizade com ele fácil.", "https://media.licdn.com/dms/image/C5103AQHRfhLfW6psPQ/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=xkFWHesp3vlV7SwGiIhxZ9NqF3Vk_xR6atncgCGoaLE","August 6, 2018, Fernando managed Jorge directly")
        
    
    this.indications.push(indicationRaphaelMonteiro)
    this.indications.push(indicationFernandoMondo)
    this.indications.push(indicationMatofino)
    this.indications.push(indicationMarcosArtigas)  
    
  
  }

}
