import { useCallback, useState } from "react";

export const useForm = (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = useCallback((e) => {
    const { value, name } = e.target;

    setFormValues((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setFormValues(initialValues);
  }, []);

  return { formValues, handleChange, handleReset };
};
