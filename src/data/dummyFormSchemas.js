/**
 *  mocking schemas that have been previously saved ina db
 * loaded initally into localStorage to render the initial
 * form structure
 */

export const initUserSchema = {
  formName: "User",
  formId: "user",
  fields: [
    {
      onValue: "enabled",
      offValue: "disabled",
      label: "Notification",
      name: "notification",
    },
    {
      label: "User Management",
      name: "userManagement",
      subFields: [
        {
          onValue: "enabled",
          offValue: "disabled",
          label: "User Add",
          name: "userAdd",
        },
        {
          onValue: "enabled",
          offValue: "disabled",
          label: "User Edit",
          name: "userEdit",
        },
        {
          onValue: "enabled",
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

export const initGeneralSchema = {
  formName: "General",
  formId: "general",
  fields: [
    {
      label: "Case Managment",
      name: "caseManagment",
    },
  ],
};

export const initAlertSchema = {
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
