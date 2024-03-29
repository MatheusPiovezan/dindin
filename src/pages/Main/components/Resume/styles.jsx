import styled from "styled-components";

export const Container = styled.div`
  .container {
    width: 236px;

    margin-top: 54px;
    padding: 26px 33px 31px 33px;

    font-family: "Rubik", sans-serif;

    background-color: #fafafa;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.1rem;

      color: #2f2f2f;
    }

    .entrie-exit {
      display: flex;
      flex-direction: column;

      margin: 23px 0 20px 0;
      gap: 10px;

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 1.5rem;

        color: #2f2f2f;
      }

      .span-entrie {
        color: #645ffb;
      }

      .span-exit {
        color: #fa8c10;
      }
    }

    .spans-spaces {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .balance {
      padding-top: 16px;

      border-top: 1px solid #eaeaea;

      span:first-child {
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.7rem;

        color: #2f2f2f;
      }

      span:last-child {
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.7rem;

        color: #3a9ff1;
      }
    }
  }

  button {
    all: unset;

    width: 236px;
    height: 42px;

    margin: 16px 0 0 0;

    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-align: center;

    color: #ffffff;
    background-color: #7978d9;
    border-radius: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    .container {
      width: 100%;
      margin: 0;

      .spans-spaces {
        justify-content: start;

        gap: 50px;
      }
    }
  }
`;
