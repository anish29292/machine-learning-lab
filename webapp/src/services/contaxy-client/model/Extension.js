/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DeploymentCompute from './DeploymentCompute';
import DeploymentStatus from './DeploymentStatus';
import DeploymentType from './DeploymentType';
import ExtensionType from './ExtensionType';

/**
 * The Extension model module.
 * @module model/Extension
 * @version 0.0.5
 */
class Extension {
  /**
   * Constructs a new <code>Extension</code>.
   * @alias module:model/Extension
   * @param containerImage {String} The container image used for this deployment.
   */
  constructor(containerImage) {
    Extension.initialize(this, containerImage);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, containerImage) {
    obj['container_image'] = containerImage;
  }

  /**
   * Constructs a <code>Extension</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Extension} obj Optional instance to populate.
   * @return {module:model/Extension} The populated <code>Extension</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Extension();

      if (data.hasOwnProperty('capabilities')) {
        obj['capabilities'] = ApiClient.convertToType(data['capabilities'], [
          'String',
        ]);
      }
      if (data.hasOwnProperty('api_extension_endpoint')) {
        obj['api_extension_endpoint'] = ApiClient.convertToType(
          data['api_extension_endpoint'],
          'String'
        );
      }
      if (data.hasOwnProperty('ui_extension_endpoint')) {
        obj['ui_extension_endpoint'] = ApiClient.convertToType(
          data['ui_extension_endpoint'],
          'String'
        );
      }
      if (data.hasOwnProperty('extension_type')) {
        obj['extension_type'] = ApiClient.convertToType(
          data['extension_type'],
          ExtensionType
        );
      }
      if (data.hasOwnProperty('container_image')) {
        obj['container_image'] = ApiClient.convertToType(
          data['container_image'],
          'String'
        );
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], {
          String: 'String',
        });
      }
      if (data.hasOwnProperty('compute')) {
        obj['compute'] = ApiClient.convertToType(
          data['compute'],
          DeploymentCompute
        );
      }
      if (data.hasOwnProperty('command')) {
        obj['command'] = ApiClient.convertToType(data['command'], 'String');
      }
      if (data.hasOwnProperty('requirements')) {
        obj['requirements'] = ApiClient.convertToType(data['requirements'], [
          'String',
        ]);
      }
      if (data.hasOwnProperty('endpoints')) {
        obj['endpoints'] = ApiClient.convertToType(data['endpoints'], [
          'String',
        ]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = ApiClient.convertToType(
          data['created_by'],
          'String'
        );
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_by')) {
        obj['updated_by'] = ApiClient.convertToType(
          data['updated_by'],
          'String'
        );
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(
          data['display_name'],
          'String'
        );
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(
          data['description'],
          'String'
        );
      }
      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {
          String: 'String',
        });
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('started_at')) {
        obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
      }
      if (data.hasOwnProperty('stopped_at')) {
        obj['stopped_at'] = ApiClient.convertToType(data['stopped_at'], 'Date');
      }
      if (data.hasOwnProperty('extension_id')) {
        obj['extension_id'] = ApiClient.convertToType(
          data['extension_id'],
          'String'
        );
      }
      if (data.hasOwnProperty('deployment_type')) {
        obj['deployment_type'] = ApiClient.convertToType(
          data['deployment_type'],
          DeploymentType
        );
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(
          data['status'],
          DeploymentStatus
        );
      }
      if (data.hasOwnProperty('internal_id')) {
        obj['internal_id'] = ApiClient.convertToType(
          data['internal_id'],
          'String'
        );
      }
      if (data.hasOwnProperty('graphql_endpoint')) {
        obj['graphql_endpoint'] = ApiClient.convertToType(
          data['graphql_endpoint'],
          'String'
        );
      }
      if (data.hasOwnProperty('openapi_endpoint')) {
        obj['openapi_endpoint'] = ApiClient.convertToType(
          data['openapi_endpoint'],
          'String'
        );
      }
      if (data.hasOwnProperty('health_endpoint')) {
        obj['health_endpoint'] = ApiClient.convertToType(
          data['health_endpoint'],
          'String'
        );
      }
    }
    return obj;
  }
}

/**
 * List of capabilities implemented by this extension.
 * @member {Array.<String>} capabilities
 */
Extension.prototype['capabilities'] = undefined;

/**
 * The endpoint base URL that implements the API operation stated in the capabilities property.
 * @member {String} api_extension_endpoint
 */
Extension.prototype['api_extension_endpoint'] = undefined;

/**
 * The endpoint instruction that provide a Web UI. If this is provided, the extension will be integrated into the UI.
 * @member {String} ui_extension_endpoint
 */
Extension.prototype['ui_extension_endpoint'] = undefined;

/**
 * The type of the extension.
 * @member {module:model/ExtensionType} extension_type
 */
Extension.prototype['extension_type'] = undefined;

/**
 * The container image used for this deployment.
 * @member {String} container_image
 */
Extension.prototype['container_image'] = undefined;

/**
 * Parmeters (enviornment variables) for this deployment.
 * @member {Object.<String, String>} parameters
 */
Extension.prototype['parameters'] = undefined;

/**
 * Compute instructions and limitations for this deployment.
 * @member {module:model/DeploymentCompute} compute
 */
Extension.prototype['compute'] = undefined;

/**
 * Command to run within the deployment. This overwrites the existing entrypoint.
 * @member {String} command
 */
Extension.prototype['command'] = undefined;

/**
 * Additional requirements for deployment.
 * @member {Array.<String>} requirements
 */
Extension.prototype['requirements'] = undefined;

/**
 * A list of HTTP endpoints that can be accessed. This should always have an internal port and can include additional instructions, such as the URL path.
 * @member {Array.<String>} endpoints
 */
Extension.prototype['endpoints'] = undefined;

/**
 * Resource ID. Identifies a resource in a given context and time, for example, in combination with its type. Used in API operations and/or configuration files.
 * @member {String} id
 */
Extension.prototype['id'] = undefined;

/**
 * Resource Name. A relative URI-path that uniquely identifies a resource within the system. Assigned by the server and read-only.
 * @member {String} name
 */
Extension.prototype['name'] = undefined;

/**
 * Timestamp of the resource creation. Assigned by the server and read-only.
 * @member {Date} created_at
 */
Extension.prototype['created_at'] = undefined;

/**
 * Resource name of the entity responsible for the creation of this resource. Assigned by the server and read-only.
 * @member {String} created_by
 */
Extension.prototype['created_by'] = undefined;

/**
 * Timestamp of the last resource modification. Is updated when create/patch/delete operation is performed. Assigned by the server and read-only.
 * @member {Date} updated_at
 */
Extension.prototype['updated_at'] = undefined;

/**
 * Resource name of the entity responsible for the last modification of this resource. Assigned by the server and read-only.
 * @member {String} updated_by
 */
Extension.prototype['updated_by'] = undefined;

/**
 * A user-defined human-readable name of the resource. The name can be up to 128 characters long and can consist of any UTF-8 character.
 * @member {String} display_name
 */
Extension.prototype['display_name'] = undefined;

/**
 * A user-defined short description about the resource. Can consist of any UTF-8 character.
 * @member {String} description
 */
Extension.prototype['description'] = undefined;

/**
 * Identifier or image URL used for displaying this resource.
 * @member {String} icon
 */
Extension.prototype['icon'] = undefined;

/**
 * A collection of arbitrary key-value pairs associated with this resource that does not need predefined structure. Enable third-party integrations to decorate objects with additional metadata for their own use.
 * @member {Object.<String, String>} metadata
 */
Extension.prototype['metadata'] = undefined;

/**
 * Allows to disable a resource without requiring deletion. A disabled resource is not shown and not accessible.
 * @member {Boolean} disabled
 * @default false
 */
Extension.prototype['disabled'] = false;

/**
 * Timestamp when the deployment was started.
 * @member {Date} started_at
 */
Extension.prototype['started_at'] = undefined;

/**
 * Timestamp when the container has stopped.
 * @member {Date} stopped_at
 */
Extension.prototype['stopped_at'] = undefined;

/**
 * The extension ID in case the deployment is deployed via an extension.
 * @member {String} extension_id
 */
Extension.prototype['extension_id'] = undefined;

/**
 * The type of this deployment.
 * @member {module:model/DeploymentType} deployment_type
 */
Extension.prototype['deployment_type'] = undefined;

/**
 * The status of this deployment.
 * @member {module:model/DeploymentStatus} status
 */
Extension.prototype['status'] = undefined;

/**
 * The ID of the deployment on the orchestration platform.
 * @member {String} internal_id
 */
Extension.prototype['internal_id'] = undefined;

/**
 * GraphQL endpoint.
 * @member {String} graphql_endpoint
 */
Extension.prototype['graphql_endpoint'] = undefined;

/**
 * Endpoint that prorvides an OpenAPI schema definition..
 * @member {String} openapi_endpoint
 */
Extension.prototype['openapi_endpoint'] = undefined;

/**
 * The endpoint instruction that can be used for checking the deployment health.
 * @member {String} health_endpoint
 */
Extension.prototype['health_endpoint'] = undefined;

export default Extension;
