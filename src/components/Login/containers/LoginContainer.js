import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../../hooks";
import { Login } from "../components/LoginView";
import { SIGN_IN_REQUEST} from '../actions'

export const LoginContainer = ({ handleClose, open }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()

  const { formValues, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleVisible = () => {
    setVisible((state) => (state = !state));
  };

  const handleLogin = () =>{
      dispatch(SIGN_IN_REQUEST(formValues))
  }

  return (
    <Login
      formValues={formValues}
      handleChange={handleChange}
      handleSubmit={handleLogin}
      visible={visible}
      handleVisible={handleVisible}
      handleClose={handleClose}
      open={open}
    />
  );
};
