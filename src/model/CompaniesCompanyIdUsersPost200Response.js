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
import CompaniesCompanyIdUsersPost200ResponseData from './CompaniesCompanyIdUsersPost200ResponseData';

/**
 * The CompaniesCompanyIdUsersPost200Response model module.
 * @module model/CompaniesCompanyIdUsersPost200Response
 * @version 0.0.0
 */
class CompaniesCompanyIdUsersPost200Response {
    /**
     * Constructs a new <code>CompaniesCompanyIdUsersPost200Response</code>.
     * @alias module:model/CompaniesCompanyIdUsersPost200Response
     * @param message {String} Response status message
     * @param data {module:model/CompaniesCompanyIdUsersPost200ResponseData} 
     */
    constructor(message, data) { 
        
        CompaniesCompanyIdUsersPost200Response.initialize(this, message, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, data) { 
        obj['message'] = message;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>CompaniesCompanyIdUsersPost200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompaniesCompanyIdUsersPost200Response} obj Optional instance to populate.
     * @return {module:model/CompaniesCompanyIdUsersPost200Response} The populated <code>CompaniesCompanyIdUsersPost200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompaniesCompanyIdUsersPost200Response();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = CompaniesCompanyIdUsersPost200ResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CompaniesCompanyIdUsersPost200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompaniesCompanyIdUsersPost200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CompaniesCompanyIdUsersPost200Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          CompaniesCompanyIdUsersPost200ResponseData.validateJSON(data['data']);
        }

        return true;
    }


}

CompaniesCompanyIdUsersPost200Response.RequiredProperties = ["message", "data"];

/**
 * Response status message
 * @member {String} message
 */
CompaniesCompanyIdUsersPost200Response.prototype['message'] = undefined;

/**
 * @member {module:model/CompaniesCompanyIdUsersPost200ResponseData} data
 */
CompaniesCompanyIdUsersPost200Response.prototype['data'] = undefined;






export default CompaniesCompanyIdUsersPost200Response;

