import React, { useState } from 'react'
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Body</label>
        <textarea name="body" id="body" cols="30" rows="10" onChange={props.onBodyChange}></textarea>
      </p>
      <p>
      <label htmlFor="author">Author</label>
      <input type="text" name="author" id="author" onChange={props.onAuthorChange} />
      </p>
    </form>
  )
}

export default NewPost