import styled from "styled-components";


export const FooterStyled = styled.footer`
  position: relative;
  padding:  40px 0 40px 0;
  width: 100%;
  line-height: 150%;
  max-width: 1500px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    height: 3px;
    background-color: var(--primary-color);
  }

  .logo {
    position: absolute;
    top: 120px;
    right: 0;

    img {
        width: clamp(300px, 20vw, 400px);
    }
  }
`;