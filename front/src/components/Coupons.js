import React from 'react';

const Coupons = ({type,title,discount}) => {
  const asd = 123;
  return (
    <div>
      <button>o</button>
      <ul>
        <li>{type}</li>
        <li>{title}</li>
        <li>{discount}</li>
      </ul>
    </div>
  );
};

export default Coupons;