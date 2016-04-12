import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map('image')
export default class Create extends Action {
  /**
   * This function can return a promise (or raw POJOs) of data to be looked up
   *
   * @return Object/Promise
   */
  data() {
    const attributes = this.request.body.data.attributes;
    const Image = this.app.make(`store`).model(`image`);
    const image = new Image(attributes);

    return image.save();
  }
}
