import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const FormEditorComp = ({ apiKey, editorRef, value, onChange, id, error, label }) => {
  return (
    <div className="mb-4">
        <label htmlFor={id} className="block mb-2 font-medium text-gray-700">
            {label} {error && <span className='text-red-500 text-md'>{error}</span>}
        </label>
        <Editor
            apiKey={apiKey}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
            height: 500,
            menubar: false,
            plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
            ],
            toolbar:
                'undo redo | blocks | bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            id='FIXED_ID'
            value={value}
            onEditorChange={onChange}
            required
        />
    </div>
  );
};

export default FormEditorComp;
