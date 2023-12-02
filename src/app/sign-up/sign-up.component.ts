import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUp: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUp = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.signUp.valid) {
      console.log('Connexion réussie !');
      console.log(this.signUp.value.email, this.signUp.value.password);
      if (this.signUp.value.password === this.signUp.value.passwordConfirm ) {
        this.router.navigate(['/home']);
      }else{
        alert("Mot de passe non identique")
      }

    } else {
      console.log('Formulaire non valide');
      console.log(this.signUp.value);
    }
  }

}
