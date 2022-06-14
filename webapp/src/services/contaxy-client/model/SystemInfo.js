/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.18
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SystemState from './SystemState';

/**
 * The SystemInfo model module.
 * @module model/SystemInfo
 * @version 0.0.18
 */
class SystemInfo {
  /**
   * Constructs a new <code>SystemInfo</code>.
   * @alias module:model/SystemInfo
   * @param version {String} Platform version.
   * @param namespace {String} Namespace of this system.
   * @param systemState {module:model/SystemState} The state of the system.
   */
  constructor(version, namespace, systemState) {
    SystemInfo.initialize(this, version, namespace, systemState);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, version, namespace, systemState) {
    obj['version'] = version;
    obj['namespace'] = namespace;
    obj['system_state'] = systemState;
  }

  /**
   * Constructs a <code>SystemInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemInfo} obj Optional instance to populate.
   * @return {module:model/SystemInfo} The populated <code>SystemInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SystemInfo();

      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('namespace')) {
        obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
      }
      if (data.hasOwnProperty('system_state')) {
        obj['system_state'] = ApiClient.convertToType(
          data['system_state'],
          SystemState
        );
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {
          String: 'String',
        });
      }
    }
    return obj;
  }
}

/**
 * Platform version.
 * @member {String} version
 */
SystemInfo.prototype['version'] = undefined;

/**
 * Namespace of this system.
 * @member {String} namespace
 */
SystemInfo.prototype['namespace'] = undefined;

/**
 * The state of the system.
 * @member {module:model/SystemState} system_state
 */
SystemInfo.prototype['system_state'] = undefined;

/**
 * Additional key-value metadata associated with this system.
 * @member {Object.<String, String>} metadata
 */
SystemInfo.prototype['metadata'] = undefined;

export default SystemInfo;
