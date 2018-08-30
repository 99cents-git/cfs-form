import {Emit, Vue} from 'vue-property-decorator';
import Component from "vue-class-component";

declare var $:any;

@Component
export default class FormController extends Vue {

  private formValid:boolean = false;

  public mounted(): void {
    $(document).foundation();
    $(document)
      .on("forminvalid.zf.abide", this.attachedFormInvalid)
      .on("formvalid.zf.abide", this.attachedFormValid)
      .on("submit", this.onSubmit);
  }

  @Emit('on-submit')
  public onSubmit(ev:any) {
    this.attachedFormComplete();
    console.log("submitting");
  }

  @Emit('step-valid')
  public attachedFormValid(ev: any, frm: any): void {
    console.log("Form is valid");
    this.formValid = true;
  }

  @Emit('step-invalid')
  public attachedFormInvalid(ev:any, frm:any):void {
    console.log("form is invalid");
    this.formValid = false;
  }

  @Emit('step-done')
  public attachedFormComplete(): void {
    console.log("Form is complete");
  }

  @Emit('step-notdone')
  public attachedFormIncomplete():void {
    console.log("form is incomplete");
  }

  public beforeDestroy(): void {
    console.log("unmounting");
    $(document)
      .off("forminvalid.zf.abide", this.attachedFormInvalid)
      .off("formvalid.zf.abide", this.attachedFormValid)
      .off("submit", this.onSubmit);
  }
}
