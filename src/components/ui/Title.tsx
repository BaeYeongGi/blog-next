import React from 'react';

interface TitleProps {
  value: string,
  classValue: string
}

const Title = ({ value, classValue }: TitleProps) => {
  return (
    <h2 className={classValue}>{value}</h2>
  );
};

export default Title;