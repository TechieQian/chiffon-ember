import Route from '@ember/routing/route';
import sponsors from '../utils/sponsors';

export default class ShopRoute extends Route {
  model() {
    return sponsors;
  }
}
