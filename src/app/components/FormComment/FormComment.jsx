import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormComment = ({ addComment, id }) => {
  const [text, setText] = useState('');

  return (
    <form
      className='form-comment'
      onSubmit={e => {
        e.preventDefault();
        addComment({ postId: id, body: text });
        setText('');
      }}
    >
      <h3 className='form-header'>Say Something...</h3>
      <textarea
        className='form-text'
        name='text'
        rows='6'
        placeholder='Create a comment...'
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <button type='submit' className='form-btn btn-success'>
        Send
      </button>
    </form>
  );
};

FormComment.propTypes = {
  id: PropTypes.number.isRequired,
  addComment: PropTypes.func.isRequired
};

export default FormComment;
