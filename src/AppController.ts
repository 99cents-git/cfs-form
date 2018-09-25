import {Vue} from 'vue-property-decorator';
import Component from "vue-class-component";
import router from './router';
import AwsIntegration from './abstract/AWSController';
import uuid from 'uuid';

declare var $: any;

interface FormRealtimeData {
  steps: string[]
  status: FormStatusEntry[]
}

interface FormStatusEntry {
  stepName: string
  stepDisplayName: string;
  valid: boolean
  complete: boolean
  serialisedData: any
  nextStep: string;
}

@Component
export default class AppController extends Vue {

  private formValid: boolean = false;
  private allFormData: any = {};
  private inClass: string = "slideInRight";
  private outClass: string = "slideOutLeft";

  private underlyingData: FormRealtimeData = {
    steps: ['step1', 'step2', 'step3', 'step4'],
    status: [
      {
        stepName: 'step1',
        complete: false,
        valid: false,
        serialisedData: {},
        stepDisplayName: 'Business',
        nextStep: 'step1'
      }, {
        stepName: 'step2',
        complete: false,
        valid: false,
        serialisedData: {},
        stepDisplayName: 'Representative',
        nextStep: 'step2'
      }, {
        stepName: 'step3',
        complete: false,
        valid: false,
        serialisedData: {},
        stepDisplayName: 'Bank',
        nextStep: 'step3'
      }, {
        stepName: 'step4',
        complete: false,
        valid: false,
        serialisedData: {},
        stepDisplayName: 'Card',
        nextStep: 'step4'
      }
    ]
  };

  public mounted(): void {
    AwsIntegration.init();
    router.beforeEach((to: any, from: any, next: any) => {
      this.inClass = this.getStepId(to.name) > this.getStepId(from.name) ? 'slideInRight' : 'slideInLeft';
      this.outClass = this.getStepId(to.name) > this.getStepId(from.name) ? 'slideOutLeft' : 'slideOutRight';
      next();
    });
  }

  private getStepId(_step: string): number {
    return <number>parseInt(_step.slice(-1));
  }

  private formToJson(_form: HTMLFormElement): any {
    return [].reduce.call(_form.elements, (data: any, element: any) => {
      data[element.name] = element.value;
      return data;
    }, {});
  }

  private concatFormData(_formId: string, _data: any): void {
    if (!this.allFormData[_formId]) {
      this.allFormData[_formId] = {}
    }
    Object.assign(this.allFormData[_formId], _data);
    console.log(this.allFormData);
  }

  private findStepInArray(_data: any): any {
    return this.underlyingData.status.find(_step => {
      return _step.stepName === _data.target.id
    });
  }

  private handleFileUpload(_data: any): any {
    if (!this.allFormData.uploadedFiles) {
      this.allFormData.uploadedFiles = {};
    }
    this.allFormData.uploadedFiles[`${_data.target.id}`] = _data.target.files[0];
    console.log(this.allFormData);
  }

  public markStepInvalid(_data: any, ...args: []): void {

  }

  public markStepValid(_data: any, ...args: []): void {
    this.concatFormData(_data.target.id, this.formToJson(args[0][0]));
    let _foundStep = this.findStepInArray(_data);
    _foundStep.valid = true;
    _foundStep.complete = true;
  }

  public markStepComplete(_data: any): void {
    console.log(`${_data.target.id} was marked complete`);
    let _currentStep: number = this.getStepId(_data.target.id);
    if (_currentStep < this.underlyingData.status.length) {
      this.$router.push(`step${_currentStep + 1}`);
    } else {
      this.postForm();
    }
  }

  public markStepIncomplete(_data: any): void {

  }

  public saveStepData(_data: any): void {
    console.log(_data.target.id);
  }

  public postForm(): void {
    // Create UUID for entry
    let _entryUUID: string = uuid.v4();

    // Create AWS Dynamo Object
    let _postFormData: any = {};
    Object.assign(_postFormData, this.allFormData.step1);
    Object.assign(_postFormData, this.allFormData.step2);
    Object.assign(_postFormData, this.allFormData.step3);

    if (this.allFormData.step4) {
      Object.assign(_postFormData, this.allFormData.step4);
    }

    let tableItem: any = {};

    Object.keys(_postFormData).forEach(_key => {
      if (_key && _postFormData[_key] && _key.indexOf('submit') === -1) {
        tableItem[_key] = {S: _postFormData[_key]}
      }
    });

    tableItem.ApplicationId = {S: _entryUUID};

    // Sort documents

    tableItem.idDocument = {S: _entryUUID + '_' + this.allFormData.uploadedFiles['idDocumentUpload'].name};
    tableItem.residenceDocument = {S: _entryUUID + '_' + this.allFormData.uploadedFiles['residenceUpload'].name};
    tableItem.bankDocument = {S: _entryUUID + '_' + this.allFormData.uploadedFiles['bankUpload'].name};

    AwsIntegration.postToDatabase('CFSApplications', tableItem);
    AwsIntegration.uploadFile(this.allFormData.uploadedFiles['idDocumentUpload'], _entryUUID, 'cfs-form-documents');
    AwsIntegration.uploadFile(this.allFormData.uploadedFiles['residenceUpload'], _entryUUID, 'cfs-form-documents');
    AwsIntegration.uploadFile(this.allFormData.uploadedFiles['bankUpload'], _entryUUID, 'cfs-form-documents');
  }

  get fetchAllFormData(): any {
    return this.allFormData;
  }
}
