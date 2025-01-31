import React from "react";
import { Controller } from "react-hook-form";

const InputTitle = ({ control, errors }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium text-gray-700">
        <span className="text-md">Title</span>
      </label>
      <Controller
        name="title"
        control={control}
        render={({ field: { onChange, value } }) => (
          <input
            className={`w-full px-3 py-2 bg-white rounded-md focus:outline-none ${
              errors?.title ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Judul"
            value={value || ""}
            onChange={onChange}
          />
        )}
      />
      {errors?.title && (
        <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
      )}
    </div>
  );
};

export default InputTitle;
