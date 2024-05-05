import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function LoginUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input {...register('email')} />
        {errors.email && <span>This field is required</span>}
        <br />
        <label>Password:</label>
        <input {...register('password')} />
        {errors.password && <span>This field is required</span>}
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginUser;