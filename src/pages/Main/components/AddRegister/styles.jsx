import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  font-family: "Rubik", sans-serif;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(61, 61, 61, 0.48);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 56px 64px 45px 64px;

    background-color: #ffffff;
    border-radius: 20px;

    .title-close {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 0 0 22px 0;

      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 2.6rem;
        line-height: 4.3rem;
      }

      img {
        cursor: pointer;
      }
    }

    .btn-entry-exit button {
      all: unset;

      width: 50%;
      height: 56px;

      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.7rem;

      text-align: center;
      color: #ffffff;
      cursor: pointer;
    }

    .btn-entry-exit button:first-child {
      background-color: #3a9ff1;
      border-radius: 10px 5px 5px 5px;
    }

    .btn-entry-exit button:last-child {
      background-color: #b9b9b9;
      border-radius: 5px 10px 5px 5px;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        margin: 26px 0 8px 0;

        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.8rem;

        color: #484848;
      }

      input {
        width: 450px;
        height: 50px;

        padding: 0 10px;

        border: 1px solid #555555;
        border-radius: 5px;
      }

      select {
        all: unset;

        width: 450px;
        height: 50px;

        border: 1px solid #555555;
        border-radius: 5px;
      }
    }

    button {
      all: unset;

      width: 236px;
      height: 42px;

      margin: 43px 0 0 0;

      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.7rem;
      text-align: center;

      background-color: #7978d9;
      color: #ffffff;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      width: 100vw;

      padding: 56px 20px 45px 20px;

      .container-form {
        width: 100%;
      }

      form {
        input {
          width: 100%;
        }

        select {
          width: 100%;
        }
      }
    }
  }
`;
