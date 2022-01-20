import React from 'react';

const InputField = (props) => {
  const { name, type, value, errorValue, onChange, reset, isRequired } = props;
  return (
    <div className='field'>
      <label className='label text-capitalize my-1'>
        {name}
        {isRequired && <span className='text-danger'>*</span>}
      </label>
      <div className='control'>
        <input
          autoComplete='off'
          className={`input ${errorValue && !reset && 'text-danger'}`}
          type={type}
          name={name}
          onChange={onChange}
          value={value || ''}
          required={isRequired}
        />
        {errorValue && !reset && (
          <p className='help text-danger'>{errorValue}</p>
        )}
      </div>
    </div>
  );
};

export default InputField;
