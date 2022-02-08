export const validation = (value, name) => {
  switch (name) {
    case "email":
      if (value.search(/\w\S{5,29}@\S{4}/) === 0) {
        return { errText: "Valid", success: true };
      }
      return { errText: "Invalid email", success: false };
    case "password":
      if (value.length >= 8 && value.length <= 20) {
        if (value.search(/[a-z]/) !== -1) {
          if (value.search(/[A-Z]/) !== -1) {
            if (value.search(/\d/) !== -1) {
              return { errtext: "Valid", success: true };
            }
            return {
              errtext: "It has to contain at least one digit",
              success: false,
            };
          }
          return {
            errtext: "It has to contain at least one big letter",
            success: false,
          };
        }
        return {
          errtext: "It has to contain at least one small letter",
          success: false,
        };
      }
      return { errtext: "It has to be 6 - 14 symbols long", success: false };
    case "gender":
      if (value === "female" || value === "male") {
        return {
          errtext: "Valid",
          success: true,
        };
      }
      return {
        errtext: "No such gender saved as an option",
        success: false,
      };
    case "phone":
      if (value.search(/\+\d{12}/) === 0) {
        return {
          errtext: "Valid",
          success: true,
        };
      }
      return {
        errtext: "Invalid phone number",
        success: false,
      };
    case ("firstName", "lastName"):
      if (value.search(/[^a-zA-Z]/) === -1) {
        if (value.length >= 1 && value.length <= 12) {
          return {
            errtext: "Valid",
            success: true,
          };
        }
        return {
          errtext: "Too long name",
          success: false,
        };
      }
      return {
        errtext: "Only letters could be used in name",
        success: false,
      };
    case ("country", "city"):
      if (value.search(/[^a-zA-Z]/) === -1) {
        if (value.length > 3 && value.length < 30) {
          return {
            errText: "Valid",
            success: true,
          };
        }
        return {
          errText: "Too long name",
          success: false,
        };
      }
      return {
        errText: "Only letters could be used in name",
        success: false,
      };
    default:
      return { errText: "No such name", success: false };
  }
};
