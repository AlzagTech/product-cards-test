import React from 'react';
import { MessageBox } from './Message.styled';

export const Message = ({ children }) => {
  return (
    <MessageBox>
      <p>{children}</p>
    </MessageBox>
  );
};
