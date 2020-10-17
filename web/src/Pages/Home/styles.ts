import styled from 'styled-components';

export const Container = styled.div`
    #page-landing {
      width: 100vw;
      height: 100vh;
      background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

      display: flex;
      justify-content: center;
      align-items: center;
    }

    #page-landing .content-wrapper {
      position: relative;

      width: 100%;
      max-width: 1100px;

      height: 100%;
      max-height: 680px;

      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
    }

    #page-landing .content-wrapper .landing-img {
      position: absolute;
      top: 0;
      right: 0;

      margin-right: 10 0px;
    }

    #page-landing .content-wrapper main {
      max-width: 350px;
    }

    #page-landing .content-wrapper main h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    #page-landing .content-wrapper main p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }

    .content-wrapper .location {
      position: absolute;
      right: 0;
      top: 0;

      font-size: 24px;
      line-height: 34px;

      display: flex;
      flex-direction: column;

      text-align: right;
    }
    
    .content-wrapper .location strong {
      font-weight: 800;
    }

    .content-wrapper .enter-app {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 80px;
      height: 80px;
      background: #ffd666;
      border-radius: 30px;
      
      display: flex;
      align-items: center;
      justify-content: center;

      transition: background 0.2s;
    }

    .content-wrapper .enter-app:hover {
      background: #96FEFE;
    }
`;
