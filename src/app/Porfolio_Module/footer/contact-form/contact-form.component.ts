import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  
  onSubmit() {
    if (this.contactForm.valid) {
      // Process the form data (e.g., send it to backend)
      // Display an alert for successful submission
      window.alert('Form submitted successfully!');
      // You can also reset the form if needed:
      // this.contactForm.reset();
    } else {
      // Handle invalid form submission (if needed)
      window.alert('Please fill out the form correctly.');
    }
  }
}
