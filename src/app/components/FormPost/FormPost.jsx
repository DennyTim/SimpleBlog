import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FormPost = ({ active, current, setActive, addNewPost, update }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const modalClose = e => {
    const modalWindow = document.querySelector('.modal');
    let pos = 0;
    if (e.target === modalWindow || e.target.classList.contains('btn-close')) {
      const clear = setInterval(() => {
        if (pos > -100) {
          modalWindow.style.top = `${(pos -= 5)}%`;
        } else {
          clearInterval(clear);
          setActive(false);
        }
      }, 10);
      window.removeEventListener('click', modalClose);
    }
  };

  const modalOpen = () => {
    const modalWindow = document.querySelector('.modal');
    let pos = -100;
    const clear = setInterval(() => {
      if (pos < 0) {
        modalWindow.style.top = `${(pos += 4)}%`;
      } else {
        clearInterval(clear);
      }
    }, 10);
    window.addEventListener('click', modalClose);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!current) {
      addNewPost({ title, body });
      setActive(false);
    } else {
      update(current.id, { title, body });
      setActive(false);
    }
  };

  useEffect(() => {
    if (active) {
      if (current) {
        setTitle(current.title);
        setBody(current.body);
      }
      modalOpen();
    }
  }, [active]);

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1 className='modal-header'>Say Something...</h1>
        <form className='modal-form' onSubmit={onSubmit}>
          <input
            className='modal-title'
            type='text'
            name='title'
            placeholder='Create a title...'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <textarea
            className='modal-text'
            rows='6'
            name='body'
            placeholder='Create a post...'
            value={body}
            onChange={e => setBody(e.target.value)}
            required
          />
          <button type='submit' className='form-btn btn-success'>
            Send
          </button>
          <button
            className='btn-close'
            type='button'
            onClick={e => modalClose(e)}
          >
            &times;
          </button>
        </form>
      </div>
    </div>
  );
};

FormPost.propTypes = {
  active: PropTypes.bool.isRequired,
  current: PropTypes.object,
  setActive: PropTypes.func.isRequired,
  addNewPost: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

export default FormPost;
