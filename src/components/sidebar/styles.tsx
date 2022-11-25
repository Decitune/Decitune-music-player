import styled from "styled-components";

export const Container = styled.div<{ isSidebar: boolean }>`
    box-shadow: 0px 0px 7px #c3c1c1;
    height: 86vh;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

      ul {
        list-style: circle;
        padding: 5;
        margin: 0;
      }
      li {
        padding: 8px 12px;
      }
      
      li:hover {
        background-color: maroon;
        cursor: pointer;
      }
      .button {
        background-color: black;
        border: none;
        color: white;
        padding: 5px 8px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 25px;
      }
      
    .inicialSearch {
      background-color: black;
        width: 100%;
        margin-bottom: 5px;
        border-bottom: 1px solid #16171a;
       color:white;

        div {
            display: flex;
            align-items: center;
            height: 60px;
            padding-left: 10px;
            cursor: pointer;
            font-size: 18px;

            p {
                margin-right: 5px;
            }
        }
        
    }

    .Playlist {
        width: 100%;
        height:2500px;
        margin-top : -5px;
        background-color: black;
        color:white;
        margin-bottom:auto;
   
        div {
          display: flex;
            align-items: center;
            background-color: black;
            height:50px;
    padding-left: 1px;
           
            cursor: pointer;
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 820px) {
        position: absolute;
        z-index: 2;
        display: ${props => props.isSidebar ? 'block' : 'none'};
        background-color: black;
        width: 250px;

        .inicialSearch {
            margin-top: 5px;
        }
      }
    
`;