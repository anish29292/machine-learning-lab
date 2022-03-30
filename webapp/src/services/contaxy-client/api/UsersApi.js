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
import AccessLevel from '../model/AccessLevel';
import ProblemDetails from '../model/ProblemDetails';
import User from '../model/User';
import UserInput from '../model/UserInput';
import UserRegistration from '../model/UserRegistration';

/**
 * Users service.
 * @module api/UsersApi
 * @version 0.0.14
 */
export default class UsersApi {
  /**
   * Constructs a new UsersApi.
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Change the user password
   * Changes the password of a given user.  The password can be changed by the given user or a system admin.  The password is stored as a hash.
   * @param {String} userId A valid user ID.
   * @param {String} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  changePasswordWithHttpInfo(userId, body) {
    let postBody = body;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling changePassword"
      );
    }
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling changePassword"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/users/{user_id}:change-password',
      'PUT',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Change the user password
   * Changes the password of a given user.  The password can be changed by the given user or a system admin.  The password is stored as a hash.
   * @param {String} userId A valid user ID.
   * @param {String} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  changePassword(userId, body) {
    return this.changePasswordWithHttpInfo(userId, body).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Change the user password
   * Changes the password of a given user.  The password can be changed by the given user or a system admin.  The password is stored as a hash.
   * @param {String} userId A valid user ID.
   * @param {String} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  changePassword_0WithHttpInfo(userId, body) {
    let postBody = body;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling changePassword_0"
      );
    }
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling changePassword_0"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/users/{user_id}:change-password',
      'PUT',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Change the user password
   * Changes the password of a given user.  The password can be changed by the given user or a system admin.  The password is stored as a hash.
   * @param {String} userId A valid user ID.
   * @param {String} body
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  changePassword_0(userId, body) {
    return this.changePassword_0WithHttpInfo(userId, body).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Create a user.
   * Creates a user. For the user also a technical project is created.  If the `password` is not provided, the user can only login by using other methods (social login).
   * @param {module:model/UserRegistration} userRegistration
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  createUserWithHttpInfo(userRegistration) {
    let postBody = userRegistration;
    // verify the required parameter 'userRegistration' is set
    if (userRegistration === undefined || userRegistration === null) {
      throw new Error(
        "Missing the required parameter 'userRegistration' when calling createUser"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = User;
    return this.apiClient.callApi(
      '/users',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Create a user.
   * Creates a user. For the user also a technical project is created.  If the `password` is not provided, the user can only login by using other methods (social login).
   * @param {module:model/UserRegistration} userRegistration
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
   */
  createUser(userRegistration) {
    return this.createUserWithHttpInfo(userRegistration).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Create a user.
   * Creates a user. For the user also a technical project is created.  If the `password` is not provided, the user can only login by using other methods (social login).
   * @param {module:model/UserRegistration} userRegistration
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  createUser_0WithHttpInfo(userRegistration) {
    let postBody = userRegistration;
    // verify the required parameter 'userRegistration' is set
    if (userRegistration === undefined || userRegistration === null) {
      throw new Error(
        "Missing the required parameter 'userRegistration' when calling createUser_0"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = User;
    return this.apiClient.callApi(
      '/users',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Create a user.
   * Creates a user. For the user also a technical project is created.  If the `password` is not provided, the user can only login by using other methods (social login).
   * @param {module:model/UserRegistration} userRegistration
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
   */
  createUser_0(userRegistration) {
    return this.createUser_0WithHttpInfo(userRegistration).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Delete a user.
   * Deletes a user and all resources which are only accesible by this user.  Shared project resources will not be deleted.
   * @param {String} userId A valid user ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteUserWithHttpInfo(userId) {
    let postBody = null;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling deleteUser"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/users/{user_id}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete a user.
   * Deletes a user and all resources which are only accesible by this user.  Shared project resources will not be deleted.
   * @param {String} userId A valid user ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteUser(userId) {
    return this.deleteUserWithHttpInfo(userId).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Delete a user.
   * Deletes a user and all resources which are only accesible by this user.  Shared project resources will not be deleted.
   * @param {String} userId A valid user ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteUser_0WithHttpInfo(userId) {
    let postBody = null;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling deleteUser_0"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi(
      '/users/{user_id}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete a user.
   * Deletes a user and all resources which are only accesible by this user.  Shared project resources will not be deleted.
   * @param {String} userId A valid user ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteUser_0(userId) {
    return this.deleteUser_0WithHttpInfo(userId).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get my user metadata.
   * Returns the user metadata from the authenticated user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  getMyUserWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = User;
    return this.apiClient.callApi(
      '/users/me',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get my user metadata.
   * Returns the user metadata from the authenticated user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
   */
  getMyUser() {
    return this.getMyUserWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get my user metadata.
   * Returns the user metadata from the authenticated user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  getMyUser_0WithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = User;
    return this.apiClient.callApi(
      '/users/me',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get my user metadata.
   * Returns the user metadata from the authenticated user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
   */
  getMyUser_0() {
    return this.getMyUser_0WithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get user metadata.
   * Returns the user metadata for a single user.
   * @param {String} userId A valid user ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  getUserWithHttpInfo(userId) {
    let postBody = null;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling getUser"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = User;
    return this.apiClient.callApi(
      '/users/{user_id}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get user metadata.
   * Returns the user metadata for a single user.
   * @param {String} userId A valid user ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
   */
  getUser(userId) {
    return this.getUserWithHttpInfo(userId).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get a user token.
   * Returns an API token with permission to access all resources accessible by the given user.  The `read` access level allows read-only access on all resources. The `write` access level allows to create and delete user resources. The `admin` access level allows additional user actions such as deletion of the user itself.
   * @param {String} userId A valid user ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/AccessLevel} opts.accessLevel Access level of the token. (default to 'write')
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
   */
  getUserTokenWithHttpInfo(userId, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling getUserToken"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {
      access_level: opts['accessLevel'],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = 'String';
    return this.apiClient.callApi(
      '/users/{user_id}/token',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get a user token.
   * Returns an API token with permission to access all resources accessible by the given user.  The `read` access level allows read-only access on all resources. The `write` access level allows to create and delete user resources. The `admin` access level allows additional user actions such as deletion of the user itself.
   * @param {String} userId A valid user ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/AccessLevel} opts.accessLevel Access level of the token. (default to 'write')
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
   */
  getUserToken(userId, opts) {
    return this.getUserTokenWithHttpInfo(userId, opts).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get a user token.
   * Returns an API token with permission to access all resources accessible by the given user.  The `read` access level allows read-only access on all resources. The `write` access level allows to create and delete user resources. The `admin` access level allows additional user actions such as deletion of the user itself.
   * @param {String} userId A valid user ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/AccessLevel} opts.accessLevel Access level of the token. (default to 'write')
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
   */
  getUserToken_0WithHttpInfo(userId, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling getUserToken_0"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {
      access_level: opts['accessLevel'],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = 'String';
    return this.apiClient.callApi(
      '/users/{user_id}/token',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get a user token.
   * Returns an API token with permission to access all resources accessible by the given user.  The `read` access level allows read-only access on all resources. The `write` access level allows to create and delete user resources. The `admin` access level allows additional user actions such as deletion of the user itself.
   * @param {String} userId A valid user ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/AccessLevel} opts.accessLevel Access level of the token. (default to 'write')
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
   */
  getUserToken_0(userId, opts) {
    return this.getUserToken_0WithHttpInfo(userId, opts).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get user metadata.
   * Returns the user metadata for a single user.
   * @param {String} userId A valid user ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  getUser_0WithHttpInfo(userId) {
    let postBody = null;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling getUser_0"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = User;
    return this.apiClient.callApi(
      '/users/{user_id}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get user metadata.
   * Returns the user metadata for a single user.
   * @param {String} userId A valid user ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
   */
  getUser_0(userId) {
    return this.getUser_0WithHttpInfo(userId).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * List all users.
   * Lists all users that are visible to the authenticated user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/User>} and HTTP response
   */
  listUsersWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [User];
    return this.apiClient.callApi(
      '/users',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List all users.
   * Lists all users that are visible to the authenticated user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/User>}
   */
  listUsers() {
    return this.listUsersWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * List all users.
   * Lists all users that are visible to the authenticated user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/User>} and HTTP response
   */
  listUsers_0WithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [User];
    return this.apiClient.callApi(
      '/users',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * List all users.
   * Lists all users that are visible to the authenticated user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/User>}
   */
  listUsers_0() {
    return this.listUsers_0WithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update user metadata.
   * Updates the user metadata.  This will update only the properties that are explicitly set in the patch request. The patching is based on the JSON Merge Patch Standard [RFC7396](https://tools.ietf.org/html/rfc7396).
   * @param {String} userId A valid user ID.
   * @param {module:model/UserInput} userInput
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  updateUserWithHttpInfo(userId, userInput) {
    let postBody = userInput;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling updateUser"
      );
    }
    // verify the required parameter 'userInput' is set
    if (userInput === undefined || userInput === null) {
      throw new Error(
        "Missing the required parameter 'userInput' when calling updateUser"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = User;
    return this.apiClient.callApi(
      '/users/{user_id}',
      'PATCH',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Update user metadata.
   * Updates the user metadata.  This will update only the properties that are explicitly set in the patch request. The patching is based on the JSON Merge Patch Standard [RFC7396](https://tools.ietf.org/html/rfc7396).
   * @param {String} userId A valid user ID.
   * @param {module:model/UserInput} userInput
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
   */
  updateUser(userId, userInput) {
    return this.updateUserWithHttpInfo(userId, userInput).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Update user metadata.
   * Updates the user metadata.  This will update only the properties that are explicitly set in the patch request. The patching is based on the JSON Merge Patch Standard [RFC7396](https://tools.ietf.org/html/rfc7396).
   * @param {String} userId A valid user ID.
   * @param {module:model/UserInput} userInput
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */
  updateUser_0WithHttpInfo(userId, userInput) {
    let postBody = userInput;
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error(
        "Missing the required parameter 'userId' when calling updateUser_0"
      );
    }
    // verify the required parameter 'userInput' is set
    if (userInput === undefined || userInput === null) {
      throw new Error(
        "Missing the required parameter 'userInput' when calling updateUser_0"
      );
    }

    let pathParams = {
      user_id: userId,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [
      'APIKeyCookie',
      'APIKeyHeader',
      'APIKeyQuery',
      'OAuth2PasswordBearer',
    ];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = User;
    return this.apiClient.callApi(
      '/users/{user_id}',
      'PATCH',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Update user metadata.
   * Updates the user metadata.  This will update only the properties that are explicitly set in the patch request. The patching is based on the JSON Merge Patch Standard [RFC7396](https://tools.ietf.org/html/rfc7396).
   * @param {String} userId A valid user ID.
   * @param {module:model/UserInput} userInput
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
   */
  updateUser_0(userId, userInput) {
    return this.updateUser_0WithHttpInfo(userId, userInput).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }
}
