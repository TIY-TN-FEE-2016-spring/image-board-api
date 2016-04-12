import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map('image')
export default class Index extends Action {
  /**
   * This function can return a promise (or raw POJOs) of data to be looked up
   *
   * @return Object/Promise
   */
  data() {
    const Image = this.app.make(`store`).model(`image`);

    return Image.fetchAll();
  }
}
