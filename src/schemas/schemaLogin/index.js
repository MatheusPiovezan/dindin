import * as yup from "yup";
import error from "../../messages/error";
import { toast } from "react-toastify";

const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email(() => toast.error(error.loginWrong))
    .required(() => toast.error(error.loginWrong)),
  password: yup.string().required(() => toast.error(error.loginWrong)),
});

export default schemaLogin;
