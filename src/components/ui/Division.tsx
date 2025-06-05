import React from 'react';

interface DivisionProps {
  classValue: string
}

const Division = ({ classValue }: DivisionProps) => {
  return (
    <hr className={classValue} />
      
  );
};

export default Division;