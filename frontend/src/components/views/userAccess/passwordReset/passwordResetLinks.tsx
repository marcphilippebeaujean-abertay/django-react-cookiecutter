import { LinkItem } from "../../../utils/navLinkInterface";

export const passwordResetRequest: LinkItem = {
  displayName: "Reset Password",
  link: "/request-password-reset"
};

export const confirmResetPassword: LinkItem = {
  displayName: "Confirm Password Reset",
  link: "/reset"
};

export const passwordResetRequestConfirmationUrl = "/password-reset-requested";
export const passwordResetConfirmationUrl = "/password-reset";
