import Component from "vue-class-component";
import FormController from "@/abstract/FormController";

@Component
export default class Step2Controller extends FormController {

  private idDone: boolean = false;
  private residenceDone: boolean = false;
  private bankDone: boolean = false;


}
