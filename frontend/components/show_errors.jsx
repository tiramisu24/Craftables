import React from 'react';

const showErrors = ({errors}) =>  {
  let show_errors = <div></div>;

  if(!!errors){
    show_errors = errors.map((er,idx) => (
      <li key={idx}>{er}</li>
    ))
  }
  return show_errors
}



export default showErrors;
