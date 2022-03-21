/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.14
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OAuth2ErrorDetails model module.
 * @module model/OAuth2ErrorDetails
 * @version 0.0.14
 */
class OAuth2ErrorDetails {
  /**
   * Constructs a new <code>OAuth2ErrorDetails</code>.
   * @alias module:model/OAuth2ErrorDetails
   * @param error {String}
   */
  constructor(error) {
    OAuth2ErrorDetails.initialize(this, error);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, error) {
    obj['error'] = error;
  }

  /**
   * Constructs a <code>OAuth2ErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuth2ErrorDetails} obj Optional instance to populate.
   * @return {module:model/OAuth2ErrorDetails} The populated <code>OAuth2ErrorDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OAuth2ErrorDetails();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
    }
    return obj;
  }
}

/**
 * @member {String} error
 */
OAuth2ErrorDetails.prototype['error'] = undefined;

export default OAuth2ErrorDetails;
