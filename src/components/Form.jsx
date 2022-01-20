import React, { useState } from 'react';
import useForm from './UseForm';
import validate from './FormValidation';
import InputField from './Input';
import { Redirect } from 'react-router-dom';

const Form = (props) => {
  const { values, errors, handleChange, handleSubmit, handleReset, reset } =
    useForm(login, validate);
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Redirect to='/default' />;
  }

  return (
    <div className='container-bg vh-100'>
      {loggedIn && <Redirect to='/default' />}
      <h3 className='text-danger font-weight-bold pl-4 pt-4'>YOUKRAFT</h3>
      <div className='container  d-flex align-items-center justify-content-end h-100 mt-n5'>
        <div className='card  p-4 bg-light-secondary w-50 pb-0 mt-n5'>
          <div className='box'>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className='field'>
                <div className='control'>
                  <InputField
                    name='name'
                    type='text'
                    value={values.name || ''}
                    errorValue={errors.name || ''}
                    onChange={handleChange}
                    isRequired
                    reset={reset}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <InputField
                    name='age'
                    type='number'
                    value={values.age || ''}
                    onChange={handleChange}
                    isRequired={false}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <InputField
                    name='email'
                    type='email'
                    value={values.email || ''}
                    errorValue={errors.email || ''}
                    onChange={handleChange}
                    isRequired
                    reset={reset}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <InputField
                    name='phone'
                    type='tel'
                    value={values.phone || ''}
                    errorValue={errors.phone || ''}
                    onChange={handleChange}
                    isRequired
                    reset={reset}
                  />
                </div>
              </div>
              <button
                type='submit'
                className='btn mt-4 button-sm btn-primary mr-2'
              >
                Submit
              </button>
              <button
                type='button'
                className='btn mt-4 button-sm btn-danger'
                onClick={handleReset}
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
