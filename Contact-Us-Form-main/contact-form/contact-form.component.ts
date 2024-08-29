import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Send the form data to your backend or handle it as required
      console.log(form.value);
    }
  }

}
