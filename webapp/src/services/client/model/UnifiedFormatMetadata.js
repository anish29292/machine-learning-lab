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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MlLabService) {
      root.MlLabService = {};
    }
    root.MlLabService.UnifiedFormatMetadata = factory(root.MlLabService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UnifiedFormatMetadata model module.
   * @module model/UnifiedFormatMetadata
   * @version 2.2.0-SNAPSHOT
   */

  /**
   * Constructs a new <code>UnifiedFormatMetadata</code>.
   * @alias module:model/UnifiedFormatMetadata
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UnifiedFormatMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnifiedFormatMetadata} obj Optional instance to populate.
   * @return {module:model/UnifiedFormatMetadata} The populated <code>UnifiedFormatMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {Number} time
   */
  exports.prototype.time = undefined;

  /**
   * @member {String} query
   */
  exports.prototype.query = undefined;

  return exports;

}));
