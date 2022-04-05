import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CodeComponent extends Component {

  @tracked clipboardText = 'Copy to clipboard'

  @action
  copy(event) {
    let el = event.target;
    let inputEl = el.nextElementSibling;
    inputEl.select();
    inputEl.setSelectionRange(0, 99999);
    this.clipboardText = 'Copied'
    document.execCommand("copy");
  }

  @action
  mouseout() {
    this.clipboardText = 'Copy to clipboard'
  }
}
