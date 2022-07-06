import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.scss'],
  host: {
    class: "modal fade",
    id: "account-popup",
    tabindex:"-1",
    'aria-labelledby': "account-popup-Label",
    'aria-hidden': "true"
  }
})
export class AccountModalComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
    // this.toastrService.show("asd","asd");
  }

}
