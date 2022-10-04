import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app1';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('fr');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('fr');
  }
}
