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
      this.markStepComplete({target: {id: from.name}});
      next();
    });
  }

  private getStepId(_step: string): number {
    return <number>parseInt(_step.slice(-1));
  }

  private formToJson(_form:HTMLFormElement):any {
    return [].reduce.call(_form.elements, (data:any, element:any) => {
      data[element.name] = element.value;
      return data;
    }, {});
  }

  public markStepInvalid(_data: any, ...args:[]): void {
    console.log(this.formToJson(args[0][0]));
    this.concatFormData(this.formToJson(args[0][0]));
    let _foundStep = this.findStepInArray(_data);
    _foundStep.valid = false;
    _foundStep.complete = false;
  }

  private concatFormData(_data:any):void {
    Object.assign(this.allFormData, _data);
    console.log(this.allFormData);
  }

  private findStepInArray(_data: any): any {
    return this.underlyingData.status.find(_step => {
      return _step.stepName === _data.target.id
    });
  }

  public markStepValid(_data: any): void {
    console.log(`${_data.target.id} was marked valid`);
  }

  public markStepComplete(_data: any): void {
    console.log(`${_data.target.id} was marked done`);
    this.findStepInArray(_data).complete = true;
  }

  public markStepIncomplete(_data: any): void {
    console.log(`${_data.target.id} was marked not done`);
  }

  public saveStepData(_data: any): void {
    console.log(_data.target.id);
  }
}
