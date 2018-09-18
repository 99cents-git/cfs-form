import Component from "vue-class-component";
import FormController from "@/abstract/FormController";
import {Emit} from "vue-property-decorator";

@Component
export default class Step2Controller extends FormController {

  private idDone: boolean = false;
  private residenceDone: boolean = false;
  private bankDone: boolean = false;

  protected mounted(): void {
    this.rehydrateDocuments();
  }

  private rehydrateDocuments(): void {
    if (this.formData.uploadedFiles) {
      if (this.formData.uploadedFiles.idDocumentUpload) {
        this.idDone = true;
      }
      if (this.formData.uploadedFiles.residenceUpload) {
        this.residenceDone = true;
      }
      if (this.formData.uploadedFiles.bankUpload) {
        this.bankDone = true;
      }
    }
  }

  @Emit('file-upload')
  public handleFileUpload(_file: any): void {
    switch (_file.target.id) {
      case 'idDocumentUpload':
        this.idDone = true;
        break;
      case 'residenceUpload':
        this.residenceDone = true;
        break;
      case 'bankUpload':
        this.bankDone = true;
        break;
    }
  }

}
