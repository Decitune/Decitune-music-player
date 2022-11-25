import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    .oi { 
      color:red
        box-shadow: 0px 0px 7px #c3c1c1;
        height: 86vh;
        width: 25%;
      }

    .divSongs {
    height: 75vh;
    position: fixed; 
    overflow-y: scroll;
    z-index: 1;

    ::-webkit-scrollbar {
        width: 10px;    
      }
      

    ::-webkit-scrollbar-thumb {
        background-color: Darkred;                
      }
    }

    .title {
        margin: 0px 0px;
        font-size: 50px;
        color: red;         
          border: none;
          outline: none;
          border-radius: 40px; 
          margin: -90px 0px 10px 50px;
          height: 31px;
          width: 20%;
          padding: 30px;  
    }
  
    .showSidebar {
      border: none;
      outline: none;
      background-color: transparent;

      position: absolute;
      z-index: 2;
      left: 2px;
      top: 20px;
      cursor: pointer;
    }

    .top {
      background-color: black;
        width: 90%;
        box-shadow: 4px 1px 7px #c3c1c1;
        input {
          border: none;
          outline: none;
          background-color: #232429;
          border-radius: 10px; 
          margin: 15px 0px 30px 30px;
          height: 31px;
          width: 40%;
          color: #fff;
          font-size: 18px;
          padding: 10px;
        }
        .searchh1 {
          margin-left: 10px;
          font-size: 32px;
          color:white;
        }
    }
      
    @media only screen and (max-width: 820px) {
      .top {
        height: 86vh;
        
        .title {
          margin: 10px 10px;
          text-align: center; 
      }        
      .divSongs {
        width: 100vw;
        position: relative;
        right: -5px;
      }
      input {
        margin-left: 13%;
        width: 250px;
      }
    }
`;

export const Music = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
`;
export const Wrapper = styled.div`
  position: relative;
`;

export const ActivatorButton = styled.button`
  align-items: center;
  background-color: inherit;
  border: 1px solid transparent;
  border-radius: 3px;
  border-color: #ccc;
  color: inherit;
  display: flex;
  font-size: inherit;
  max-width: 160px;
  padding: 1em;

  &:after {
    content: "";
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    height: 0.5em;
    margin-left: 0.75em;
    width: 0.5em;
    transform: rotate(45deg);
  }
`;


