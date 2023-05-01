import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const ContainerImg = styled.div`
  width: 50%;
  img {
    width: 100%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Form = styled.form`
  max-width: 600px;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  line-height: 1;
  padding-bottom: 0.75rem;
`;

export const Input = styled.input`
  font-family: "Poppins", monospace;
  margin-bottom: 1.25rem;
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.2s;
  &&:hover,
  &&:focus {
    outline: none;
    border-color: #6f43c2;
    background: #fff;
    box-shadow: 0 0 0 3px #9c57ff;
  }
`;

export const Textarea = styled.textarea`
  font-family: "Poppins", monospace;
  margin-bottom: 14px;
  margin-bottom: 1.25rem;
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.2s;
  height: 94px;
  resize: none;

  &&:hover,
  &&:focus {
    outline: none;
    border-color: #6f43c2;
    background: #fff;
    box-shadow: 0 0 0 3px #9c57ff;
  }
`;

export const Button = styled.input`
  font-size: 1rem;
  font-family: "Poppins", monospace;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #6f43c2;
  color: #f1f1f1;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.2s;

  &&:hover,
  &&:focus {
    outline: none;
    box-shadow: 0 0 0 3px #9c57ff, 0 0 0 4px #6f43c2;
  }
  &&:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
