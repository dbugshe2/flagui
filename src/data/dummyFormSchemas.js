/**
 *  mocking schemas that have been previously saved ina db
 * loaded initally into localStorage to render the initial
 * form structure
 */

const userSettingsSchema = {
  formName: "User",
  formId: "user",
  fields: [
    {
      onValue: "enable",
      offValue: "disabled",
      label: "Notification",
      name: "notification",
    },
    {
      label: "User Management",
      name: "userManagement",
      subFields: [
        {
          onValue: "enable",
          offValue: "disabled",
          label: "User Add",
          name: "userAdd",
        },
        {
          onValue: "enable",
          offValue: "disabled",
          label: "User Edit",
          name: "userEdit",
        },
        {
          onValue: "enable",
          offValue: "disabled",
          label: "User Delete",
          name: "userDelete",
        },
        {
          onValue: "enable",
          offValue: "disabled",
          label: "User Limit",
          useNumericValue: true,
          limit: 10,
          name: "userLimit",
        },
      ],
    },
  ],
};

const generalSettingsSchema = {
  formName: "General",
  formId: "general",
  fields: [
    {
      label: "Case Managment",
      name: "caseManagment",
    },
  ],
};

const alertSettingsSchema = {
  formName: "Alerts",
  formId: "alerts",
  fields: [
    {
      label: "Profile Manager",
      name: "profileManager",
    },
    {
      label: "Alert Manager",
      name: "alertManager",
    },
    {
      label: "Profile Managment",
      name: "profileManagment",
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
const schemas = {
  userSettingsSchema,
  generalSettingsSchema,
  alertSettingsSchema,
};
export default schemas;
