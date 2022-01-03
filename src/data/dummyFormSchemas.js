// these schemas could be from a db

const userSettingsSchema = {
  users: {
    userAdd: {
      onValue: "enable",
      offValue: "disabled",
      label: "User Add",
      name: "userAdd",
    },
    userEdit: {
      onValue: "enable",
      offValue: "disabled",
      label: "User Edit",
      name: "userEdit",
    },
    userDelete: {
      onValue: "enable",
      offValue: "disabled",
      label: "User Delete",
      name: "userDelete",
    },
    userLimit: {
      onValue: "enable",
      offValue: "disabled",
      label: "User Limit",
      useNumericValue: true,
      limit: 10,
      name: "userLimit",
    },
  },
};

const generalSettingsSchema = {};
const alertSettingsSchema = {};
const notificationSettingsSchema = {};

// eslint-disable-next-line import/no-anonymous-default-export
const schemas = {
  userSettingsSchema,
  generalSettingsSchema,
  alertSettingsSchema,
  notificationSettingsSchema,
};
export default schemas;
