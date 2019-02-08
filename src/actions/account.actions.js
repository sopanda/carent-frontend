import { accountConstants } from "../constants";

export const accountActions = {
  verify
};

function verify(id) {
  return {
    type: accountConstants.VERIFY_REQUEST,
    payload: id
  };
}
