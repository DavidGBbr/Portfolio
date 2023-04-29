import styled from "styled-components";
import { AiOutlineDownload } from "react-icons/ai";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const DeveloperImg = styled.img`
  width: 420px;

  @media (max-width: 1200px) {
    width: 300px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30rem;

  h1 {
    line-height: 5rem;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 500px) {
    h1 {
      line-height: 2rem;
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
      padding-top: 1rem;
    }
  }
`;

export const LinkLogo = styled(AiOutlineDownload)`
  font-size: 1.75rem;
`;

export const LinkDownload = styled.a`
  margin-top: 40px;
  color: #fff;
  text-decoration: none;
  border: 3px solid #6f43c2;
  width: 340px;
  padding: 20px 40px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.5s;

  span {
    font-size: 1.25rem;
  }

  :hover {
    background-color: #8b54f3;
    transform: scale(1.05);
  }

  @media (max-width: 400px) {
    width: 100%;
    span {
      font-size: 1.125rem;
    }
  }
`;
