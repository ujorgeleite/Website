import { IndicationModel } from './../model/indication.model';
import { Builder } from 'protractor';
export class PortfolioService {

  constructor() {

  }

 public generateIndications(): IndicationModel[]  {

  const indications: IndicationModel[] = [];

  const indicationMatofino: IndicationModel = new IndicationModel();
  indicationMatofino.name = 'Cristiano Diedrich';
  indicationMatofino.office = 'Container Specialist at Umbler';
  indicationMatofino.description = 'Jorge é uma pessoa excepcional, sempre de bom humor e com muita vontade de ajudar os colegas. É uma pessoa criativa e sincera, um dos melhores profissionais com quem tive a honra de trabalhar. Não existe tempo ruim para ele, e sempre tem ideias que ajudam a todos.';
  indicationMatofino.reference = 'August 7, 2018, Jorge worked with Cristiano in the same group';
  indicationMatofino.image = 'https://media.licdn.com/dms/image/C5603AQF5v5lOptxISA/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=UVk9WqK2skDcrjA7EzSNgY5VfbGThgcF_g1hAX4MM4M';


  const indicationRaphaelMonteiro: IndicationModel = new IndicationModel();
  indicationRaphaelMonteiro.name = 'Raphael Monteiro';
  indicationRaphaelMonteiro.office = 'Senior Software Engineer Technical Lead at Agibank';
  indicationRaphaelMonteiro.description = 'Jorge possui um perfil profissional diferenciado, sempre identificando pontos a melhorar na equipe e na empresa como um todo. É muito bom tecnicamente, pró ativo e produtivo.Tenho certeza que com sua dedicação, disciplina e autodidata, irá se tornar cada vez melhor e evoluir muito em sua carreira.';
  indicationRaphaelMonteiro.reference = 'December 14, 2017, Raphael managed Jorge directly';
  indicationRaphaelMonteiro.image = 'https://media.licdn.com/dms/image/C4D03AQHxPqnkDYtifA/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=_bjvge3fUJxCGiVDYx2e4twapoigA_zy_fd61fPrPsE';

  const indicationMarcosArtigas: IndicationModel = new IndicationModel();
  indicationMarcosArtigas.name = 'Marcos Artigas';
  indicationMarcosArtigas.office = 'Tribe Leader';
  indicationMarcosArtigas.description = 'Jorge, foi com certeza um dos profissionais mais dedicados a ajudar nossa equipe a atingir nossos objetivos, ele é tão pilhado que lembro que antes de começar a trabalhar na empresa já estava me atucanando para aprender e criar oportunidades de crescimento para ambos os lados. É um Profissional que tem ótima comunicação e facilidade de trabalhar, maduro em suas decisões e pensamentos. Só temos a agradecer pelo temo em que estivemos juntos.';
  indicationMarcosArtigas.reference = 'December 14, 2017, Raphael managed Jorge directly';
  indicationMarcosArtigas.image = 'https://media.licdn.com/dms/image/C4E03AQHYSCdFwjQwHg/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=uvWcVXu2H8-VAtgDNuwqRx_bd-ZhWQ0UuNNCmvj3Ih0';


  const indicationFernandoMondo: IndicationModel = new IndicationModel();
  indicationFernandoMondo.name = 'Fernando Mondo da Silva';
  indicationFernandoMondo.office = 'Software Architect na Umbler';
  indicationFernandoMondo.description = 'O Jorge é um profissional que veste a camisa da empresa. Sempre participativo e engajado, nunca se limita somente ao que lhe é solicitado. Além de um ótimo programador, possui habilidades e perfil de liderança.Tive o prazer de trabalhar com o Jorge nos últimos meses, e pude comprovar suas qualidade como desenvolvedor, se destacando nos conhecimentos de c#, Javascript tanto em back-end como em front-end.Mais do que colega, o Jorge tem carisma e é impossível não fazer amizade com ele fácil.';
  indicationFernandoMondo.reference = 'August 6, 2018, Fernando managed Jorge directly';
  indicationFernandoMondo.image = 'https://media.licdn.com/dms/image/C5103AQHRfhLfW6psPQ/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=xkFWHesp3vlV7SwGiIhxZ9NqF3Vk_xR6atncgCGoaLE';


  const indicationAlexandreFernandes: IndicationModel = new IndicationModel();
  indicationAlexandreFernandes.name = 'Alexandre Fernandes';
  indicationAlexandreFernandes.office = 'Desenvolvedor sênior / Scrum master na ZAP';
  indicationAlexandreFernandes.description = 'Dedicado, competente, aberto para dar e receber feedback e sempre disposto a ajudar. Acompanhei seu crescimento durante 1 ano, em que trabalhamos juntos no ZAP, onde sempre buscou novos desafios e aperfeiçoar sua capacidade técnica. Além das qualidades citadas é comunicativo e possui boa relação interpessoal, o que contribui para um ambiente de trabalho agradável e descontraído.';
  indicationAlexandreFernandes.reference = 'January 11, 2018, Jorge worked with Alexandre in the same group';
  indicationAlexandreFernandes.image = 'https://media.licdn.com/dms/image/C5603AQEr0N58MCqSvA/profile-displayphoto-shrink_100_100/0?e=1541635200&v=beta&t=tCMOu6wH0q4QgA2OqcEnK6uEX0VnIhrs7bJctSfvgjQ';


  indications.push(indicationMatofino);
  indications.push(indicationRaphaelMonteiro);
  indications.push(indicationMarcosArtigas);
  indications.push(indicationFernandoMondo);
  indications.push(indicationAlexandreFernandes);

  return indications;

 }

}
