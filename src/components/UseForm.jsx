import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reset, setIsReset] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && !reset && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsReset(false);
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleReset = () => {
    setIsReset(true);
    setValues({});
    setErrors({});
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleReset,
    reset,
  };
};

export default useForm;
