import { Component, Vue } from 'vue-property-decorator';
import router from "@/router";

declare var $:any;

@Component
export default class HomeController extends Vue {

  private formValid:boolean = false;

  public mounted(): void {
    $(document).foundation();
    $(document)
        .on("forminvalid.zf.abide", this.attachedFormInvalid)
        .on("formvalid.zf.abide", this.attachFormValid)
        .on("submit", this.onSubmit);
  }

  public onSubmit(ev:any) {
    console.log("submitting");
  }

  public attachFormValid(ev: any, frm: any): void {
    console.log("Form is valid");
    this.formValid = true;
  }

  public attachedFormInvalid(ev:any, frm:any):void {
    console.log("form is invalid");
    this.formValid = false;
  }

  public beforeDestroy(): void {
    console.log("unmounting");
    $(document)
        .off("forminvalid.zf.abide", this.attachedFormInvalid)
        .off("formvalid.zf.abide", this.attachFormValid)
        .off("submit", this.onSubmit);
  }
}
