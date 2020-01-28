import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class InputArgumentsComponent extends Component {
  @action
  updateName(val) {
    console.log('update', val)
  }
}