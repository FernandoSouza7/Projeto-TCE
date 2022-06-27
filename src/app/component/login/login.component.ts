import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerModule } from 'src/app/models/manager/manager.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password! : string;
  id! : number;

  constructor(private auth: AuthService, private _snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  login(): void{
    if (this.id == null || this.password == null) {
      this.openSnackBar("Campos invalidos")
    }else{
      this.auth.authtenticate(this.id, this.password).subscribe((response) =>{
        switch(response){
          case 0:
            this.openSnackBar("Senha incorreta");
            break;
          case 1:
            this.openSnackBar("ID não existe");
            break;
          case 3: 
            this.openSnackBar("Login Realizado com sucesso");
            this.auth.successAuth(this.id)
            this.router.navigate(["/dashboard"], { relativeTo: this.route });
        }
      })
    }
  }

  openSnackBar(text: string) {
    this._snackBar.open(text, 'OK', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
      // direction: "rtl"
    });

  }
}
