import styled from 'styled-components';

export const RadioButton = ({ value, name }) => {
  return (
    <RadioInput
      className={`color-${value}`}
      type='radio'
      name={name}
      value={value}
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
    transform 0.25s cubic-bezier(0.8, 0, 1, 1);
  outline: none;

  background-image: radial-gradient(
    rgb(9, 255, 0) 0%,
    rgb(255, 255, 255) 25%,
    rgb(9, 255, 0) 50%,
    hsla(50, 100%, 30%, 0) 65%
  );

  &:checked {
    box-shadow: rgb(9, 255, 0) 0 1px 1px, inset rgb(9, 255, 0) 0 0 0 1px;
  }

  &:checked {
    transition: background-position 0.2s 0.15s cubic-bezier(0, 0, 0.2, 1),
      transform 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  &:active {
    transform: scale(1.5);
    transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
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
