import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  showLoader: boolean;
  theme: string;
  

  constructor(private loaderService: LoaderService,
    translate: TranslateService) {

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.theme="theme-teal"
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });    
  }

  ngOnDestroy() {
    this.loaderService.status.observers.forEach(function (element) { element.complete(); });
  }
}
