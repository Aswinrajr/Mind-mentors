export const validateMobileNumber = (mobileNumber) => {
  const mobilePattern = /^[6-9]\d{9}$/;
  return mobilePattern.test(mobileNumber);
};

export const validateForm = (mobile) => {
  const errors = {};

  if (!validateMobileNumber(mobile)) {
    errors.mobileNumber = "Mobile number must be 10 digits, starting with 6-9.";
  }

  return errors;
};
