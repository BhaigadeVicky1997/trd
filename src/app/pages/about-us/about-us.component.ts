import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAboutUs, IAboutUsResponse } from 'src/app/models/IAboutUs';
import { IStatus } from 'src/app/models/IStatus';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { SharedUtils } from 'src/app/utils/shared-utils';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  selectedTab: number = 0;
  aboutus: IAboutUs[] = [];
  contactUsForm: FormGroup;
  
  constructor(private _formBuilder: FormBuilder,
    public _sharedUtils: SharedUtils,
    private _router: Router,
    private _contactusService: ContactUsService) {}

  ngOnInit(): void {
    this.contactUsForm = this._formBuilder.group({
      complaintType: new FormControl('', [
        Validators.required
      ]),
      complaintPriority: new FormControl('', [
        Validators.required
      ]),
      subject: new FormControl('', [
        Validators.required
      ]),
      complaintMessage: new FormControl('', [
        Validators.required
      ]),
    });
    this.getAboutus();
  }

  onSubmit() {
    //debugger;
    for (const i in this.contactUsForm.controls) {
      this.contactUsForm.controls[i].markAsDirty();
      this.contactUsForm.controls[i].updateValueAndValidity();
    }
    if (this.contactUsForm.valid) {
      this._contactusService.addContactUs(this.contactUsForm.value)
        .subscribe(
          (res: IStatus) => {
            console.log(res);
            if (res.succeeded) {
              this._sharedUtils.showToast('Contact Us Added', 1);
              this.contactUsForm.reset();
            }
          }
        );
    }
  }

  getAboutus() {
    this._contactusService.getAboutus().subscribe(
      (res: IAboutUsResponse) => {
        if (res.succeeded) {
          this.aboutus = res.data;
        }
      },
    );
  }


}
