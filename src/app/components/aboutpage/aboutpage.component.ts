import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss']
})
export class AboutpageComponent implements OnInit {

  cards = [
    {title: 'title1', text: 'On then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. '},
    {title: 'title2', text: 'Water pollution is very serious,  too.  Ugly  rivers  of  dirty water polluted with factory waste, poisoned fish are all-round  us.  And  polluted air and poisoned water lead to the end of the civilization. So,  nowadays  a lot of dead lands and lifeless areas have appeared. Because our actions  and dealings can turn the land to a desert.'},
    {title: 'title3' , text: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face. '},
    {title: 'title4', text: 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh. Opinions learning likewise daughter now age outweigh. Raptures stanhill my greatest mistaken or exercise he on although. Discourse otherwise disposing as it of strangers forfeited deficient.'}
  ]
  public textBlock: string = 'On then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation.';
  constructor() {

   }

  ngOnInit() {
  }

}
