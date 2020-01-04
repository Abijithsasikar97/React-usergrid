import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    background: #0c4160;
    height: 100vh;
        h2 {
            text-align: center;
            color: #fff;
        }
        .load-wrapp {
            width: 100%;
            height: 100px;
        }
        .griddiv {
            background-color: #ccc;
            width: 340px;
            height: 230px;
            margin: 0 auto;
        }
        .sort {
            margin-bottom: 40px;
        }
        label {
            color: #fff;
        }
        TextField {
            background: #fff;
        }
        p {
            text-shadow: 0 0 3px #FF0000;
            margin: 0;
            padding: 10px;
            position:absolute;
            left:0;
            bottom:0;
            font-size: 12px;
        }
        .grid {
            float: left;
            width: 100px;
            height: 100px;
            margin: 10px 0 0 10px;
            color: #fff;
            position: relative;
            overflow: hidden;
        }
        
        .bar {
            float: left;
            width: 100%;
            height: 6px;
            border-radius: 2px;
            background-color: #4b9cdb;
        }
        .load-10 .bar {animation: loadingJ 2s cubic-bezier(.17,.37,.43,.67) infinite;}
        
        @keyframes loadingJ {
            0%,100% {transform: translate(0,0);}
            
            50% {
                transform: translate(80px,0);
                background-color: #f5634a;
                width: 25px;
            }
          }
          img {
              cursor: pointer;
          }
`;