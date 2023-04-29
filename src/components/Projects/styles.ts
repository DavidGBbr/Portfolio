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
  gap: 40px;
`;

export const CardProjetct = styled.div`
  position: relative;
  border-radius: 20px;
  background: #3d3f44;
  padding: 1.25rem;
  width: 25rem;
  height: 500px;
  transition: 0.7s;
  box-shadow: 0 4px 5px 3px rgba(111, 67, 194, 0.459);

  :hover {
    box-shadow: 0 8px 10px 6px rgba(111, 67, 194, 0.7);
    transform: scale(1.04);
  }

  img {
    border-radius: 5px;
    width: 400px;
    height: 200px;
    margin: 0 auto;
  }

  h3 {
    padding: 12px 0px;
  }

  p {
    padding-bottom: 12px;
  }

  div {
    position: absolute;
    bottom: 1.25rem;
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
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
`;
