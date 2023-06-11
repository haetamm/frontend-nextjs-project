import React from 'react';

const FormInputTitleComp = ({ label, id, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 font-medium text-gray-700">
        {label} {error && <span className='text-red-500 text-md'>{error}</span>}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border-gray-300 rounded-md focus:ring-primary focus:border-primary"
        required
      />
    </div>
  );
};

export default FormInputTitleComp;
