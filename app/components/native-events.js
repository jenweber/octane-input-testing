import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NativeEventsComponent extends Component {
  @action
  updateName(val) {
    console.log('update', val)
  }
}
