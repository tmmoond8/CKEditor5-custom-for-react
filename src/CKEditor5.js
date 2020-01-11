import React from 'react';
import CKEditor5 from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CKEditor5.css';

const CKEditor = (props) => {
  const { content, onChange } = props;
  return (
    <div id="TammCKEditor">
      <CKEditor5
        editor={ ClassicEditor }
        data={content}
        onInit={ editor => {
            // You can store the "editor" and use when it is needed.
            // console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            onChange(data);
            // console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
          const data = editor.getData();
            console.log(data );
        } }
        onFocus={ ( event, editor ) => {
            // console.log( 'Focus.', editor );
        } }
      />
    </div>
  );
}

export default CKEditor;