import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 30px;
`;

export const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLabel = styled.label`
  display: block;
  width: 250px;
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

export const FormInput = styled.input`
  width: 100%;
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const FormBtn = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
