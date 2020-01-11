import React from 'react';
import CKEditor5 from '@ckeditor/ckeditor5-react';

// NOTE: We use editor from source (not a build)!
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import './CKEditor5.css';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

const editorConfiguration = {
  plugins: [ Essentials, Bold, Italic, Paragraph ],
  toolbar: [ 'bold', 'italic' ]
};

const CKEditor = (props) => {
  const { content, onChange } = props;
  return (
    <div id="TammCKEditor">
      <CKEditor5
          editor={ ClassicEditor }
          config={ editorConfiguration }
          data={content}
          onInit={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
            onChange(editor.getData());
        } }
          onBlur={ editor => {
            console.log( 'Blur.', editor );
          } }
          onFocus={ editor => {
            console.log( 'Focus.', editor );
          } }
        />
    </div>
  );
}

export default CKEditor;