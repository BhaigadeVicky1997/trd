import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomToastComponent } from './custom-toast/custom-toast.component';
import { FileUploadWrapperComponent } from './file-upload-wrapper/file-upload-wrapper.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomToastComponent, FileUploadWrapperComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    ReactiveFormsModule,
  ],
  exports: [CustomToastComponent, FileUploadWrapperComponent],
})
export class SharedComponentsModule {}
