import {Vue} from 'vue-property-decorator';
import Component from "vue-class-component";
import router from './router';

@Component
export default class AppController extends Vue {

  public step1Done:boolean = false;
  public step2Done:boolean = false;

  public beforeCreate(): void {

  }

  public created(): void {

  }

  public beforeMount(): void {

  }

  public mounted(): void {
    router.beforeEach((to, from:any, next) => {
      switch (from.name) {
        case "home":
          this.step1Done = true;
          break;
        case "about":
          this.step2Done = true;
          break;
      }
      next();
    });
  }
}
