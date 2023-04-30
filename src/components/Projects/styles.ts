import styled from "styled-components";

export const Title = styled.h1`
  color: #9b57ff;
  font-size: 2rem;
  padding-bottom: 20px;
`;

export const ContainerProjects = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardProjetct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 20px;
  background: #3d3f44;
  padding: 1.25rem;
  max-width: 25rem;
  transition: 0.7s;
  box-shadow: 0 4px 5px 3px rgba(111, 67, 194, 0.459);
  margin: 0 auto;

  :hover {
    box-shadow: 0 8px 10px 6px rgba(111, 67, 194, 0.7);
    transform: scale(1.04);
  }

  img {
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
  }

  div.aboutProject {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  div.dataProject {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
    background-color: #a657ff;
    padding: 10px;
    border-radius: 15px;
    transition: 0.5s;

    :hover {
      transform: scale(1.05);
      background-color: #8445cc;
    }
  }

  @media (max-width: 540px) {
    width: 80%;

    div {
      flex-direction: column;
      gap: 15px;
    }

    a {
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    p {
      font-size: 0.9rem;
    }
  }
`;

export const Button = styled.button`
  color: #9b57ff;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 33px;
  font-weight: bold;
  transition: 0.5s;

  :hover {
    font-size: 50px;
  }
`;
