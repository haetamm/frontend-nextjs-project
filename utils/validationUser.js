import { useState } from 'react';

export const useForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    validateField(name, value, formData, setErrorMessages, setIsFormValid);
  };

  const toggleShowPassword = () => {
    setShowPassword((ShowPassword) => !ShowPassword);
  };

  return {
    isFormValid,
    showPassword,
    formData,
    setFormData,
    setErrorMessages,
    errorMessages,
    setIsFormValid,
    handleInputChange,
    toggleShowPassword
  };
};

export const validateField = (fieldName, value, formData, setErrorMessages, setIsFormValid) => {
    if (fieldName === 'username') {
        if (value.length === 0 || value.trim().length === 0) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                username: 'harus diisi'
            }));
            setIsFormValid(false);
        } else if (value.length < 3) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                username: 'min. 3 karakter'
            }));
            setIsFormValid(false);
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                username: 'hanya karakter alfanumerik'
            }));
            setIsFormValid(false);
        } else {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                username: ''
            }));
            setIsFormValid(formData.password.length >= 6);
        }
    }
  
    if (fieldName === 'password') {
        if (value.length === 0 || value.trim().length === 0) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                password: 'harus diisi'
            }));
            setIsFormValid(false);
        } else if (value.length < 6) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                password: 'min. 6 karakter'
            }));
            setIsFormValid(false);
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                password: 'hanya karakter alfanumerik'
            }));
            setIsFormValid(false);
        } else {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                password: ''
            }));
            setIsFormValid(formData.username.length >= 3);
        }
    }
  };
  