import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

const InputBody = ({ control, errors }) => {
  const key = process.env.NEXT_PUBLIC_API_KEY_EDITOR;

  return (
    <div className="mb-4 h-[400px]">
      <label className="block mb-2 font-medium text-gray-700">
        <span className="text-md">Body</span>
      </label>
      <Controller
        name="body"
        control={control}
        render={({ field }) => (
          <Editor
            apiKey={key}
            init={{
              height: 400,
              menubar: false,
              toolbar_mode: "sliding",
              font_size_formats: "16px 18px 20px",
              toolbar:
                "undo redo | blocks | fontsize | lineheight | bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            id="FIXED_ID"
            value={field.value || ""}
            onEditorChange={(content) => {
              field.onChange(content);
            }}
          />
        )}
      />
      {errors?.body && (
        <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>
      )}
    </div>
  );
};

export default InputBody;
