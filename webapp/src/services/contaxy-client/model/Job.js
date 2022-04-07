/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.15
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

/**
 * The Job model module.
 * @module model/Job
 * @version 0.0.15
 */
class Job {
  /**
   * Constructs a new <code>Job</code>.
   * @alias module:model/Job
   * @param containerImage {String} The container image used for this deployment.
   */
  constructor(containerImage) {
    Job.initialize(this, containerImage);
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
   * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Job} obj Optional instance to populate.
   * @return {module:model/Job} The populated <code>Job</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Job();

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
        obj['command'] = ApiClient.convertToType(data['command'], ['String']);
      }
      if (data.hasOwnProperty('args')) {
        obj['args'] = ApiClient.convertToType(data['args'], ['String']);
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
    }
    return obj;
  }
}

/**
 * The container image used for this deployment.
 * @member {String} container_image
 */
Job.prototype['container_image'] = undefined;

/**
 * Parameters (environment variables) for this deployment.
 * @member {Object.<String, String>} parameters
 */
Job.prototype['parameters'] = undefined;

/**
 * Compute instructions and limitations for this deployment.
 * @member {module:model/DeploymentCompute} compute
 */
Job.prototype['compute'] = undefined;

/**
 * Command to run within the deployment. This overwrites the existing docker ENTRYPOINT.
 * @member {Array.<String>} command
 */
Job.prototype['command'] = undefined;

/**
 * Arguments to the command/entrypoint. This overwrites the existing docker CMD.
 * @member {Array.<String>} args
 */
Job.prototype['args'] = undefined;

/**
 * Additional requirements for deployment.
 * @member {Array.<String>} requirements
 */
Job.prototype['requirements'] = undefined;

/**
 * A list of HTTP endpoints that can be accessed. This should always have an internal port and can include additional instructions, such as the URL path.
 * @member {Array.<String>} endpoints
 */
Job.prototype['endpoints'] = undefined;

/**
 * Resource ID. Identifies a resource in a given context and time, for example, in combination with its type. Used in API operations and/or configuration files.
 * @member {String} id
 */
Job.prototype['id'] = undefined;

/**
 * Resource Name. A relative URI-path that uniquely identifies a resource within the system. Assigned by the server and read-only.
 * @member {String} name
 */
Job.prototype['name'] = undefined;

/**
 * Timestamp of the resource creation. Assigned by the server and read-only.
 * @member {Date} created_at
 */
Job.prototype['created_at'] = undefined;

/**
 * Resource name of the entity responsible for the creation of this resource. Assigned by the server and read-only.
 * @member {String} created_by
 */
Job.prototype['created_by'] = undefined;

/**
 * Timestamp of the last resource modification. Is updated when create/patch/delete operation is performed. Assigned by the server and read-only.
 * @member {Date} updated_at
 */
Job.prototype['updated_at'] = undefined;

/**
 * Resource name of the entity responsible for the last modification of this resource. Assigned by the server and read-only.
 * @member {String} updated_by
 */
Job.prototype['updated_by'] = undefined;

/**
 * A user-defined human-readable name of the resource. The name can be up to 128 characters long and can consist of any UTF-8 character.
 * @member {String} display_name
 */
Job.prototype['display_name'] = undefined;

/**
 * A user-defined short description about the resource. Can consist of any UTF-8 character.
 * @member {String} description
 * @default ''
 */
Job.prototype['description'] = '';

/**
 * Identifier or image URL used for displaying this resource.
 * @member {String} icon
 */
Job.prototype['icon'] = undefined;

/**
 * A collection of arbitrary key-value pairs associated with this resource that does not need predefined structure. Enable third-party integrations to decorate objects with additional metadata for their own use.
 * @member {Object.<String, String>} metadata
 */
Job.prototype['metadata'] = undefined;

/**
 * Allows to disable a resource without requiring deletion. A disabled resource is not shown and not accessible.
 * @member {Boolean} disabled
 * @default false
 */
Job.prototype['disabled'] = false;

/**
 * Timestamp when the deployment was started.
 * @member {Date} started_at
 */
Job.prototype['started_at'] = undefined;

/**
 * Timestamp when the container has stopped.
 * @member {Date} stopped_at
 */
Job.prototype['stopped_at'] = undefined;

/**
 * The extension ID in case the deployment is deployed via an extension.
 * @member {String} extension_id
 */
Job.prototype['extension_id'] = undefined;

/**
 * The type of this deployment.
 * @member {module:model/DeploymentType} deployment_type
 */
Job.prototype['deployment_type'] = undefined;

/**
 * The status of this deployment.
 * @member {module:model/DeploymentStatus} status
 */
Job.prototype['status'] = undefined;

/**
 * The ID of the deployment on the orchestration platform.
 * @member {String} internal_id
 */
Job.prototype['internal_id'] = undefined;

export default Job;
