import React from 'react';

const showErrors = ({errors}) =>  {
  let show_errors = <div></div>;

  if(!!errors){
    show_errors = errors.map((er,idx) => (
      <li key={idx}>{er}</li>
    ))
  }
  return <ul>{show_errors}</ul>
}



export default showErrors;
