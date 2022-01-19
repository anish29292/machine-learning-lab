/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
 * Enum class DeploymentType.
 * @enum {}
 * @readonly
 */
export default class DeploymentType {
  /**
   * value: "core-backend"
   * @const
   */
  'core-backend' = 'core-backend';

  /**
   * value: "service"
   * @const
   */
  service = 'service';

  /**
   * value: "job"
   * @const
   */
  job = 'job';

  /**
   * value: "extension"
   * @const
   */
  extension = 'extension';

  /**
   * Returns a <code>DeploymentType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/DeploymentType} The enum <code>DeploymentType</code> value.
   */
  static constructFromObject(object) {
    return object;
  }
}
