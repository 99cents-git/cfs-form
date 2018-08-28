import {Vue} from 'vue-property-decorator';
import Component from "vue-class-component";
import router from "@/router";

declare var $: any;

@Component
export default class AboutController extends Vue {

  private formValid: boolean = false;

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
    console.log(`form ${frm.attr('id')} is valid`);
    this.formValid = true;
  }

  public attachedFormInvalid(ev:any, frm:any):void {
    console.log(`form ${frm.attr('id')} is invalid`);
    this.formValid = false;
  }

  public beforeDestroy(): void {
    $(document)
        .off("forminvalid.zf.abide", this.attachedFormInvalid)
        .off("formvalid.zf.abide", this.attachFormValid)
        .off("submit", this.onSubmit);
  }
}
