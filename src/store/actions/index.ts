import { setError, stopLoad } from "../slices/appSlice";

export const handleError = (err:any, dispatch:any) => {
  // handle non-server based erorrs
  if (!err.response && !err.data)
    dispatch(
      setError("There seems to be an issue currently, please try again")
    );
  else if (!err.response) dispatch(setError(err.data.message));
  // handle server server based errors
  else {
    let msg =
      err.response.data.customMessage ||
      err.response.data.message ||
      err.response.data;
    if (typeof msg === "object")
      msg = msg.reduce((aggr:string, errObj:any) => aggr + errObj.msg + ",", "");
    dispatch(setError(msg));
    dispatch(stopLoad());
  }
  if (err.response?.data?.statusCode === 401) {

    localStorage.clear();
  }
  throw err;
};


export {
    loginUser,
} from "./authAction";