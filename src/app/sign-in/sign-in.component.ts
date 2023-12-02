import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      console.log('Connexion réussie !');
      console.log(this.signinForm.value.email, this.signinForm.value.password);
      if (this.signinForm.value.email === "admin@gmail.com" && this.signinForm.value.password === "admin") {
        this.router.navigate(['/home']);
      }else{
        alert("Mot de passe ou Email incorrect")
      }

    } else {
      console.log('Formulaire non valide');
      console.log(this.signinForm.value);
    }
  }

}
