/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.17
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ResourceActionExecution model module.
 * @module model/ResourceActionExecution
 * @version 0.0.17
 */
class ResourceActionExecution {
  /**
   * Constructs a new <code>ResourceActionExecution</code>.
   * @alias module:model/ResourceActionExecution
   */
  constructor() {
    ResourceActionExecution.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ResourceActionExecution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceActionExecution} obj Optional instance to populate.
   * @return {module:model/ResourceActionExecution} The populated <code>ResourceActionExecution</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResourceActionExecution();

      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], {
          String: 'String',
        });
      }
    }
    return obj;
  }
}

/**
 * Parameters that are passed to the resource action.
 * @member {Object.<String, String>} parameters
 */
ResourceActionExecution.prototype['parameters'] = undefined;

export default ResourceActionExecution;
