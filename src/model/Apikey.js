/**
 * Spartera API Documentation
 * Auto-generated API documentation for REST services of the Spartera platform
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: support@spartera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Apikey model module.
 * @module model/Apikey
 * @version 0.0.0
 */
class Apikey {
    /**
     * Constructs a new <code>Apikey</code>.
     * API Keys model storing every key created
     * @alias module:model/Apikey
     * @param apiKeyId {String} 
     * @param companyId {String} 
     * @param roleId {String} 
     * @param token {String} 
     */
    constructor(apiKeyId, companyId, roleId, token) { 
        
        Apikey.initialize(this, apiKeyId, companyId, roleId, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiKeyId, companyId, roleId, token) { 
        obj['api_key_id'] = apiKeyId;
        obj['company_id'] = companyId;
        obj['role_id'] = roleId;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>Apikey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Apikey} obj Optional instance to populate.
     * @return {module:model/Apikey} The populated <code>Apikey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Apikey();

            if (data.hasOwnProperty('api_key_id')) {
                obj['api_key_id'] = ApiClient.convertToType(data['api_key_id'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'String');
            }
            if (data.hasOwnProperty('role_id')) {
                obj['role_id'] = ApiClient.convertToType(data['role_id'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('expiration_date_utc')) {
                obj['expiration_date_utc'] = ApiClient.convertToType(data['expiration_date_utc'], 'String');
            }
            if (data.hasOwnProperty('date_created')) {
                obj['date_created'] = ApiClient.convertToType(data['date_created'], 'String');
            }
            if (data.hasOwnProperty('last_updated')) {
                obj['last_updated'] = ApiClient.convertToType(data['last_updated'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Apikey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Apikey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Apikey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['api_key_id'] && !(typeof data['api_key_id'] === 'string' || data['api_key_id'] instanceof String)) {
            throw new Error("Expected the field `api_key_id` to be a primitive type in the JSON string but got " + data['api_key_id']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }
        // ensure the json data is a string
        if (data['company_id'] && !(typeof data['company_id'] === 'string' || data['company_id'] instanceof String)) {
            throw new Error("Expected the field `company_id` to be a primitive type in the JSON string but got " + data['company_id']);
        }
        // ensure the json data is a string
        if (data['role_id'] && !(typeof data['role_id'] === 'string' || data['role_id'] instanceof String)) {
            throw new Error("Expected the field `role_id` to be a primitive type in the JSON string but got " + data['role_id']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['expiration_date_utc'] && !(typeof data['expiration_date_utc'] === 'string' || data['expiration_date_utc'] instanceof String)) {
            throw new Error("Expected the field `expiration_date_utc` to be a primitive type in the JSON string but got " + data['expiration_date_utc']);
        }
        // ensure the json data is a string
        if (data['date_created'] && !(typeof data['date_created'] === 'string' || data['date_created'] instanceof String)) {
            throw new Error("Expected the field `date_created` to be a primitive type in the JSON string but got " + data['date_created']);
        }
        // ensure the json data is a string
        if (data['last_updated'] && !(typeof data['last_updated'] === 'string' || data['last_updated'] instanceof String)) {
            throw new Error("Expected the field `last_updated` to be a primitive type in the JSON string but got " + data['last_updated']);
        }
        // ensure the json data is a string
        if (data['active'] && !(typeof data['active'] === 'string' || data['active'] instanceof String)) {
            throw new Error("Expected the field `active` to be a primitive type in the JSON string but got " + data['active']);
        }

        return true;
    }


}

Apikey.RequiredProperties = ["api_key_id", "company_id", "role_id", "token"];

/**
 * @member {String} api_key_id
 */
Apikey.prototype['api_key_id'] = undefined;

/**
 * @member {String} user_id
 */
Apikey.prototype['user_id'] = undefined;

/**
 * @member {String} company_id
 */
Apikey.prototype['company_id'] = undefined;

/**
 * @member {String} role_id
 */
Apikey.prototype['role_id'] = undefined;

/**
 * @member {String} token
 */
Apikey.prototype['token'] = undefined;

/**
 * @member {String} name
 */
Apikey.prototype['name'] = undefined;

/**
 * @member {String} expiration_date_utc
 */
Apikey.prototype['expiration_date_utc'] = undefined;

/**
 * @member {String} date_created
 */
Apikey.prototype['date_created'] = undefined;

/**
 * @member {String} last_updated
 */
Apikey.prototype['last_updated'] = undefined;

/**
 * @member {String} active
 */
Apikey.prototype['active'] = undefined;






export default Apikey;

