import { gql } from "@urql/core";

const LOGIN = gql`
  mutation TokenAuth($password: String!, $email: String!) {
    tokenAuth(password: $password, email: $email) {
      success
      errors
      token
      refreshToken
      user {
        username
        firstName
        lastName
        id
        pk
        image
        isStaff
        email
        phone
        gender
        verified
        isActive
      }
    }
  }
`;

const REGISTER = gql`
  mutation Register(
    $username: String!
    $email: String!
    $password1: String!
    $password2: String!
  ) {
    register(
      username: $username
      email: $email
      password1: $password1
      password2: $password2
    ) {
      success
      errors
    }
  }
`;

const VERIFY_ACCOUNT = gql`
  mutation VerifyAccount($token: String!) {
    verifyAccount(token: $token) {
      success
      errors
    }
  }
`;

const RESEND_ACTIVATION_EMAIL = gql`
  mutation ResendActivationEmail($email: String!) {
    resendActivationEmail(email: $email) {
      success
      errors
    }
  }
`;

const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      refreshToken
      token
      success
      payload
    }
  }
`;

const REQUEST_RESET_PASSWORD = gql`
  mutation SendPasswordResetEmail($email: String!) {
    sendPasswordResetEmail(email: $email) {
      success
      errors
    }
  }
`;

const RESET_PASSWORD = gql`
  mutation PasswordReset(
    $token: String!
    $newPassword1: String!
    $newPassword2: String!
  ) {
    passwordReset(
      token: $token
      newPassword1: $newPassword1
      newPassword2: $newPassword2
    ) {
      success
      errors
    }
  }
`;

const PASSWORD_CHANGE = gql`
  mutation PasswordChange(
    $oldPassword: String!
    $newPassword1: String!
    $newPassword2: String!
  ) {
    passwordChange(
      oldPassword: $oldPassword
      newPassword1: $newPassword1
      newPassword2: $newPassword2
    ) {
      success
      errors
    }
  }
`;

export {
  LOGIN,
  REGISTER,
  REFRESH_TOKEN,
  VERIFY_ACCOUNT,
  RESEND_ACTIVATION_EMAIL,
  REQUEST_RESET_PASSWORD,
  RESET_PASSWORD,
  PASSWORD_CHANGE,
};
