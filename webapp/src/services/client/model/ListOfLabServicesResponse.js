/*
 * ML Lab Service
 * Functionality to create and manage Lab projects, services, datasets, models, and experiments.
 *
 * OpenAPI spec version: 2.2.0-SNAPSHOT
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LabService', 'model/UnifiedErrorMessage', 'model/ValueListFormatMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LabService'), require('./UnifiedErrorMessage'), require('./ValueListFormatMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.MlLabService) {
      root.MlLabService = {};
    }
    root.MlLabService.ListOfLabServicesResponse = factory(root.MlLabService.ApiClient, root.MlLabService.LabService, root.MlLabService.UnifiedErrorMessage, root.MlLabService.ValueListFormatMetadata);
  }
}(this, function(ApiClient, LabService, UnifiedErrorMessage, ValueListFormatMetadata) {
  'use strict';

  /**
   * The ListOfLabServicesResponse model module.
   * @module model/ListOfLabServicesResponse
   * @version 2.2.0-SNAPSHOT
   */

  /**
   * Constructs a new <code>ListOfLabServicesResponse</code>.
   * @alias module:model/ListOfLabServicesResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ListOfLabServicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOfLabServicesResponse} obj Optional instance to populate.
   * @return {module:model/ListOfLabServicesResponse} The populated <code>ListOfLabServicesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ValueListFormatMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [LabService]);
      if (data.hasOwnProperty('errors'))
        obj.errors = UnifiedErrorMessage.constructFromObject(data['errors']);
    }
    return obj;
  }

  /**
   * @member {module:model/ValueListFormatMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {Array.<module:model/LabService>} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {module:model/UnifiedErrorMessage} errors
   */
  exports.prototype.errors = undefined;

  return exports;

}));
