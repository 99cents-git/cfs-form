import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorldController extends Vue {
  @Prop() private msg!: string;
  @Prop() private myObj!:object;

  private theArray: string[] = ['Hello','World'];
}
