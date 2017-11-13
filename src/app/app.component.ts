import { Adal4Service } from 'adal-angular4';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   *
   */
  constructor(private service: Adal4Service) {

    const config = {
      tenant: 'c8e1c501-51e1-4ba0-9ca5-31828c20a356',
      clientId: '272426a3-a204-4d70-94c4-b9fdb5776924'
    };
    
    service.init(config);
  }

  title = 'app';
}
