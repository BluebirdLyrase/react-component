import styled, { css } from 'styled-components';

export const RadioButton = ({ value, name, ...props }) => {
  return (
    <RadioInput
      className={`color-${value}`}
      type='radio'
      name={name}
      value={value}
      {...props}
    />
  );
};

const RadioInput = styled.input`
  appearance: none;
  margin: auto;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  cursor: pointer;
  vertical-align: middle;
  box-shadow: hsla(0, 0%, 100%, 0.15) 0 1px 1px,
    inset hsla(0, 0%, 0%, 0.5) 0 0 0 1px;
  background-repeat: no-repeat;
  transition: background-position 0.15s cubic-bezier(0.8, 0, 1, 1),
    transform 0.25s cubic-bezier(0.8, 0, 1, 1); //* this is for moving horizontal between last check and current check location
  outline: none;
  background-image: radial-gradient(
    ${({ color }) => `${color} 0%,
    ${color} 25%,
    ${color} 50%,
    hsla(50, 100%, 30%, 0) 65%`}
  );

  &:active {
    transform: scale(1.5);
    transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  } //* this is for bump up anmation on click checked

  &:checked {
    transition: background-position 0.2s 0.15s cubic-bezier(0, 0, 0.2, 1),
      transform 0.25s cubic-bezier(0, 0, 0.2, 1); //* this is for moving in checked
  } //TODO change animation to appear instead of moving

  &:checked {
    box-shadow: ${({ color }) =>
      `${color} 0 1px 1px, inset ${color} 0 0 0 1px`};
  }

  &:not(:checked),
  &:not(:checked):active {
    background-position: 24px 0;
  }

  &:checked {
    background-position: 0 0;
  }

  &:checked ~ &,
  &:checked ~ &:active {
    background-position: -24px 0;
  }
`;
