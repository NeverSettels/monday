import React from "react";
import { v4 } from 'uuid';

function NewTicketForm() {
  return (
    <>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input 
          type='text'
          names='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>

    </>
  );
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }
}

export default NewTicketForm;