export default class User {
  constructor(
    id,
    appuserid,
    email,
    password,
    firstName,
    role,
    wallet,
    phoneNumber,
    sex,
    dob
  ) {
    this.id = id;
    this.appuserid = appuserid;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.wallet = wallet;
    this.phoneNumber = phoneNumber;
    this.sex = sex;
    this.dob = dob;
  }
}
