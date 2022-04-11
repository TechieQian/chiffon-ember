import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShopController extends Controller {
  @tracked selected = [];

  @action toggleSelected({ active, name }) {
    console.log(active, name);
    if (active) {
      this.selected = this.selected.filter((tagName) => tagName !== name);
    } else {
      this.selected = [...this.selected, name];
    }
  }

  get sponsors() {
    if (this.selected.length === 0) return this.model;
    return this.model.filter((sponsor) => {
      let sponsorTags = sponsor.tags;
      return sponsorTags.some((tag) => this.selected.includes(tag));
    });
  }

  get uniqueTags() {
    let set = this.model.reduce((set, sponsor) => {
      sponsor.tags.forEach((tag) => set.add(tag));
      return set;
    }, new Set());
    return Array.from(set).map((tagName) => {
      let tagObj = { name: tagName, active: false };
      if (this.selected.includes(tagName)) {
        tagObj.active = true;
      }
      return tagObj;
    });
  }
}
