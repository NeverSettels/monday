import React from "react";

function NewTicketForm(props) {
  return (
    <>
      <h3>This is a form about animals</h3>
      <form>
        <input type="text" placeholder="Favorite Animal"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}

export default NewTicketForm;