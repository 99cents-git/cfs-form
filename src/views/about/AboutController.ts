import {Vue} from 'vue-property-decorator';

export default class AboutController extends Vue {

  public beforeCreate():void {
    console.log("Before created")
  }

  public created():void {
    console.log("created")
  }

  public beforeMount():void {
    console.log("Before mount")
  }

  public mounted():void {
    console.log("mount")
  }

  get thing():string {
    return new Date().toLocaleTimeString();
  }
}
