import { useState } from "react";
import { SignUpView } from "../components/SignUpView";
import { useForm } from "../../../hooks";

export function SignUpContainer() {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible((state) => (state = !state));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const { formValues, handleChange } = useForm({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    address1: "",
    address2: "",
    gender: "",
    password: "",
    phone: "",
  });

  return (
    <div>
      <SignUpView
        formValues={formValues}
        visible={visible}
        handleVisible={handleVisible}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}
