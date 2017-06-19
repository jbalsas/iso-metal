import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './ListSoy.soy.js';

class ListSoy extends Component {}

Soy.register(ListSoy, templates);

export { ListSoy };
export default ListSoy;