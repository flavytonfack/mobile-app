import { Component } from '@angular/core';

import { HomePage }   from '../home/home';
import { SearchPage } from '../search/search';
import { HeartPage } from '../heart/heart';
import { PersonPage } from '../person/person';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = HeartPage;
  tab4Root = PersonPage;


  constructor() {

  }
}
