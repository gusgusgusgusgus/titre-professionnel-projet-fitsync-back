import CoreController from './utils/coreController.js';

import datamappers from '../datamappers/utils/indexDatamapper.js';

export default class TestController extends CoreController {
  static entityName = 'category';

  static mainDatamapper = datamappers.testDatamapper;
}
