import {Emit, Prop, Vue} from 'vue-property-decorator';
import Component from "vue-class-component";

@Component
export default class AboutController extends Vue {

  public thing: string = "asdasd";

  public beforeCreate(): void {
    console.log("Before created")
  }

  public created(): void {
    console.log("created")
  }

  public beforeMount(): void {
    console.log("Before mount")
  }

  public mounted(): void {
    console.log("mount");
    setInterval(this.updateThing, 1000);
  }

  @Emit()
  public updateThing() {
    this.thing = new Date().toLocaleTimeString();
  }

}
