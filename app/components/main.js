import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MainComponent extends Component {
  @action
  updateName(val) {
    console.log('update', val)
  }
}
