import { parentInstance } from "../../axios/ParentInstance";

export const employeeEmailVerification = async (email) => {
  try {
    const response = await parentInstance.post(
      `/employee/operation/email-verification`,
      {
        email,
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};


export const operationPasswordVerification = async (email,password) => {
    try {
      const response = await parentInstance.post(
        `/employee/operation/password-verification`,
        {
          email,
          password
        }
      );
      return response;
    } catch (err) {
      return err;
    }
  };