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
 * The CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData model module.
 * @module model/CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData
 * @version 0.0.0
 */
class CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData {
    /**
     * Constructs a new <code>CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData</code>.
     * @alias module:model/CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData
     * @param alertId {String} ID of the updated alerts
     */
    constructor(alertId) { 
        
        CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData.initialize(this, alertId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, alertId) { 
        obj['alert_id'] = alertId;
    }

    /**
     * Constructs a <code>CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData} obj Optional instance to populate.
     * @return {module:model/CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData} The populated <code>CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData();

            if (data.hasOwnProperty('alert_id')) {
                obj['alert_id'] = ApiClient.convertToType(data['alert_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['alert_id'] && !(typeof data['alert_id'] === 'string' || data['alert_id'] instanceof String)) {
            throw new Error("Expected the field `alert_id` to be a primitive type in the JSON string but got " + data['alert_id']);
        }

        return true;
    }


}

CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData.RequiredProperties = ["alert_id"];

/**
 * ID of the updated alerts
 * @member {String} alert_id
 */
CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData.prototype['alert_id'] = undefined;






export default CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200ResponseData;

