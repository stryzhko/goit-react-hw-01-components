import styled from '@emotion/styled'

export const StyledProfile = styled.div`
  width: 350px;
  margin: 10px auto 10px;
  border-radius: 15px;
  background-color: white;
  & > .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
  }
  & > .description img {
    height: 240px;
    width: 240px;
    padding: 5px;
    border-radius: 100%;
    margin-bottom: 10px;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.45);
    background-color: lightblue;
  }
  & > .description .name {
    font-weight: bold;
    font-size: 20px
  }
  & > .description p {
    margin-bottom: 10px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
    border-radius: 0 0 10px 10px;
  background-color: lightblue;
  & > li {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 15px;
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    overflow: hidden;
    align-items: center;
    &:first-of-type {
      border-left: none;
    }
  }
  & > li .label {
    margin-bottom: 5px;
  }
  & > li .quantity {
    font-weight: bold;
  }
`;