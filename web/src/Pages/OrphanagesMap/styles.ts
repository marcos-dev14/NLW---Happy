import styled from 'styled-components';

export const Container = styled.div`
  #page-map {
    width: 100vw;
    height: 100vh;

    position: relative;
    display: flex;
  }

  #page-map aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #page-map aside h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  #page-map aside p {
    line-height: 28px;
    margin-top: 24px;
  }

  #page-map aside footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;
  }

  #page-map aside footer strong {
    font-weight: 800;
  }

  #page-map .leaflet-container {
    z-index: 5;
  }

  #page-map .create-orphanage {
    position: absolute;
    right: 40px;
    bottom: 40px;

    z-index: 10;

    width: 64px;
    height: 64px;
    background: #15c3d6;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 0.2s;
  }

  #page-map .create-orphanage:hover {
    background: #17d6eb;
  }

  #page-map .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  #page-map .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #page-map .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 0.2s;
  }

  #page-map .map-popup .leaflet-popup-content a:hover {
    background: #17d6eb;
  }

  #page-map .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
