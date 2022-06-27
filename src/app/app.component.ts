import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Projeto Valhalla'

  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService, ) {
     if (this.auth.isAuthtenticate() == false) {
       this.router.navigate(["/login"], { relativeTo: this.route });
     }
    }

}
