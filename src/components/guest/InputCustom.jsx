import React from "react";
import { Controller } from "react-hook-form";

const InputCustom = ({ field, control, errors }) => {
  return (
    <div className={`${errors[field.name] ? "mb-1" : "mb-[16px]"}`}>
      <div className="flex items-center border-[1px] py-2 px-3 rounded-2xl">
        {field.icon}
        <Controller
          name={field.name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              className="pl-2 outline-none border-none bg-transparent"
              type={field.type}
              placeholder={field.placeholder}
              onChange={onChange}
              value={value || ""}
            />
          )}
        />
      </div>
      {errors[field.name] && (
        <small className="text-red-500 ml-3">
          {errors[field.name].message}
        </small>
      )}
    </div>
  );
};

export default InputCustom;
