import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LoginEmployee } from '../state/auth/authAction';

export const useAuth = () => {
  let dispatch=useDispatch()
    const navigate=useNavigate()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const onLoginSubmit = (data) => {
        dispatch(LoginEmployee(data))
    console.log(data);
    console.log(data);
  };
    const onRegisterSubmit = (data) => {
      dispatch(LoginEmployee(data))
    console.log(data);
  };
  return{
    register,
    handleSubmit,
    errors,
    onLoginSubmit,
    onRegisterSubmit,
    navigate
  }
}

