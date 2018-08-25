import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/hello-world/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeController extends Vue {}
