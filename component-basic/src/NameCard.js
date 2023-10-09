import React from 'react';

const NameCard = ({ myAge, myName }) => {
  return (
    <>
      <p>Name: {myName}</p>
      <p>Age: {myAge}</p>
    </>
  );
};

export default NameCard;
