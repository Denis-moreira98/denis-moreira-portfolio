import { styled } from "styled-components";

export const StyledContact = styled.section`
  .contact-container {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    column-gap: 6rem;
    padding-bottom: 3rem;
  }

  .contact-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .contact-info {
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 300px;
  }

  .contact-card {
    background-color: ${({theme}) => theme.colors.containerBg};
    box-shadow: ${({theme}) => theme.effects.shadowAround};
    padding: 1rem;
    border-radius: 0.75rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    > svg {
      font-size: 2.5rem;
      color: ${({theme}) => theme.colors.main500};
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    span {
      font-size: 0.9rem;
      display: block;
      margin-bottom: 0.75rem;
      color: ${({theme}) => theme.colors.label};
    }
  }
  
  .contact-button {
    color: ${({theme}) => theme.colors.title};
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    column-gap: 0.25rem;
    cursor: pointer;

    &:hover {
      svg {
        color: ${({theme}) => theme.colors.main500};
        transform: translateX(0.25rem);
      }
    }

    svg {
      font-size: 1rem;
      transition: .3s;
    }
  }

  .contact-form {
    width: 380px;

    .btn-container {
      width: 100%;
      display: flex;

      button {
        margin-top: 2rem;
        background-color: ${({theme}) => theme.colors.main500};

        &:hover {
          background-color: ${({theme}) => theme.effects.hoverLight(theme.colors.main500)};
        }
      }
    }
  }

  /*=== Breakpoints ===*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .contact-container {
      column-gap: 3rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }

    .contact-info {
      justify-content: center;
    }

    .contact-form {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 576px) {
    .contact-info {
      grid-template-columns: 1fr;
    }

    .contact-form {
      width: 100%;
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;