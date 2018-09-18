import {Vue} from 'vue-property-decorator';
import Component from "vue-class-component";
import router from './router';


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
    this.$router.push(`step${_currentStep + 1}`);
  }

  public markStepIncomplete(_data: any): void {

  }

  public saveStepData(_data: any): void {
    console.log(_data.target.id);
  }

  public postForm(_data:any):void {
    console.log("posting form to database");
    console.log(this.allFormData);
  }

  get fetchAllFormData(): any {
    return this.allFormData;
  }
}
