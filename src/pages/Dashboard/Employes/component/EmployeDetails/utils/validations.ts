import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const panRegExp = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
const aadharRegExp = /^\d{12}$/;
const insuranceCardRegExp = /^[A-Za-z]{3}[0-9]{9}$/;

export const ChangePasswordValidation = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Old Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number"
    ),
  newPassword: Yup.string()
    .required("New Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});

const addressValidation = Yup.object().shape({
  address: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(120, "Title must not exceed 120 characters")
    .required("Title is required"),
  country: Yup.string().required("please select the country"),
  state: Yup.string().required("please select the state"),
  city: Yup.string().required("please select the city"),
  pinCode: Yup.string().required("please enter the pinCode"),
});

export const employeCreateValidation = Yup.object().shape({
  title:Yup.mixed().required('title is required'),
  firstName: Yup.string()
    .min(2, "First Name should be at least 2 characters")
    .max(60, "First Name cannot be longer than 60 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name should be at least 2 characters")
    .max(60, "Last Name cannot be longer than 60 characters")
    .required("Last Name is required"),
  mobileNo: Yup.string()
    .required("Mobile number is required")
    .matches(phoneRegExp, "Mobile number is not valid"),
  emergencyNo: Yup.string().matches(
    phoneRegExp,
    "Emergency number is not valid"
  ),
  designation:Yup.mixed().required('position is required'),
  username: Yup.string()
    .min(3, "Username should be at least 3 characters")
    .required("Username is required"),
  code: Yup.string()
    .min(4, "Code should be at least 4 characters")
    .required("Code is required")
    .trim(),
  dob: Yup.date().required('Date Of Birth is required'),
  bio: Yup.string().trim().min(20, "Bio should be at least 20 characters"),
  language: Yup.mixed()
    .required("Select the language")
    .typeError("Select the language"),
  addressInfo: Yup.array()
    .min(1, "At least 1 address is required")
    .of(addressValidation),
  password: Yup.string()
    .required("New Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  personalEmail: Yup.string().email("Invalid email address").required(),
  healthCardNo: Yup.string(),
  bloodGroup: Yup.string(),
  panNo: Yup.string().matches(panRegExp, "Invalid PAN number"),
  maritalStatus: Yup.string(),
  aadharNo: Yup.string()
    .matches(aadharRegExp, "Invalid Aadhar number")
    .nullable(),
  pfUanNo: Yup.string(),
  insuranceCardNo: Yup.string()
    .matches(insuranceCardRegExp, "Invalid insurance card number")
    .nullable(),
  medicalCertificationDetails: Yup.string(),
  refferedBy: Yup.string(),
  weddingDate: Yup.date(),
});

export const employeUpdateProfileValidation = Yup.object().shape({
  title:Yup.mixed().required('title is required'),
  firstName: Yup.string()
    .min(2, "First Name should be at least 2 characters")
    .max(60, "First Name cannot be longer than 60 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name should be at least 2 characters")
    .max(60, "Last Name cannot be longer than 60 characters")
    .required("Last Name is required"),
  mobileNo: Yup.string()
    .required("Mobile number is required")
    .matches(phoneRegExp, "Mobile number is not valid"),
  emergencyNo: Yup.string().matches(
    phoneRegExp,
    "Emergency number is not valid"
  ),
  username: Yup.string()
    .min(3, "Username should be at least 3 characters")
    .required("Username is required"),
  designation:Yup.mixed().required('select the positions'),
  code: Yup.string()
    .min(4, "Code should be at least 4 characters")
    .required("Code is required")
    .trim(),
  dob: Yup.date().required('Date Of Birth is required'),
  bio: Yup.string().trim().min(20, "Bio should be at least 20 characters"),
  language: Yup.mixed()
    .required("Select the language"),
  addressInfo: Yup.array()
    .min(1, "At least 1 address is required")
    .of(addressValidation),
  personalEmail: Yup.string().email("Invalid email address").required(),
  healthCardNo: Yup.string(),
  bloodGroup: Yup.string(),
  panNo: Yup.string().matches(panRegExp, "Invalid PAN number"),
  maritalStatus: Yup.string(),
  aadharNo: Yup.string()
    .matches(aadharRegExp, "Invalid Aadhar number")
    .nullable(),
  pfUanNo: Yup.string(),
  insuranceCardNo: Yup.string()
    .matches(insuranceCardRegExp, "Invalid insurance card number")
    .nullable(),
  medicalCertificationDetails: Yup.string(),
  refferedBy: Yup.string(),
  weddingDate: Yup.date(),
});

export const employeEditValidation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name atleast of 2 characters")
    .max(60, "First Name cannot greater than 60 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name atleast of 2 characters")
    .max(60, "Last Name cannot greater than 60 characters")
    .required("Last Name is required"),
  mobileNo: Yup.string()
    .required("Mobile number is Required")
    .matches(phoneRegExp, "Mobile number is not valid"),
  emergencyNo: Yup.string().matches(
    phoneRegExp,
    "Emergency number is not valid"
  ),
  username: Yup.string()
    .min(3, "username name should be atleast of 3 characters")
    .required()
    .typeError("username is required"),
  motherName: Yup.string()
    .trim()
    .min(2, "Mother Name atleast of 2 characters")
    .required("Mother Name is required"),
  nickName: Yup.string().trim().min(2, "Nick Name atleast of 2 characters"),
  bio: Yup.string().trim().min(20, "Bio atleast of 20 characters"),
  fatherName: Yup.string()
    .trim()
    .min(2, "Father Name atleast of 2 characters")
    .required("Father Name is required"),
  language: Yup.mixed()
    .required("Select the language")
    .typeError("Select the language"),
  addressInfo: Yup.array()
    .min(1, "atleast 1 address is required")
    .of(addressValidation),
});
