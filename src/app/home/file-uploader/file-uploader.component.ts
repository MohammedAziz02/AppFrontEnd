import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent {
  fileUploadForm: FormGroup;
  uploadPercentage: number = 0;

  constructor(private fb: FormBuilder) {
    this.fileUploadForm = this.fb.group({
      file: [''],
    });
  }

  onFileChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.fileUploadForm.patchValue({
        file: file,
      });
    }
  }

  onSubmit() {
    const file = this.fileUploadForm.get('file')?.value;
    if (file) {
      
      this.simulateFileUpload();
      
    } else {
      alert('Please choose a file first.');
    }
  }

  private simulateFileUpload() {
    const simulateUpload = () => {
      if (this.uploadPercentage < 100) {
        this.uploadPercentage += 10 ;
         setTimeout(simulateUpload, 500);
      } else {
        this.uploadPercentage = 100;
        alert('File uploaded successfully')
      }
    };

    simulateUpload();
  }
}
