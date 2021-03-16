import { HttpRequest } from "../../../utils/httpRequests";
import { REGISTER_INITIATE } from "../types";
import { actionDispatch } from "./ActionDispatcher";

export const registerUser = (DTO) => async (dispatch) => {
  dispatch(actionDispatch(REGISTER_INITIATE));
  try {
    const response = await HttpRequest({
      method: "post",
      withToken: true,
      uri: "/users",
      data: DTO,
    });
    console.log("response: ", response);
  } catch (err) {
    console.log("err: ", err);
  }
};
