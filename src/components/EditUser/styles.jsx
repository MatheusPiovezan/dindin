import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    font-family: 'Rubik', sans-serif;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(61, 61, 61, 0.48);
    
    .container {

        padding: 56px 64px 45px 64px;

        background-color: #FFFFFF;
        border-radius: 20px;
    
        .title-close {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin: 0 0 22px 0;

            h1 {
                font-style: normal;
                font-weight: 700;
                font-size: 26px;
                line-height: 43px;              
            }

            img {
                cursor: pointer;
            }
        }

        form {
            display: flex;
            flex-direction: column;

            label {
                margin: 26px 0 8px 0;

                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 28px;

                color: #484848;
            }

            input {
                width: 450px;
                height: 50px;

                padding: 0 10px;

                border: 1px solid #555555;
                border-radius: 5px;
            }
        }

        button {
            all: unset;

            width: 100%;
            height: 42px;

            margin: 45px 0 0 0;

            font-weight: 700;
            font-size: 14px;
            line-height: 17px;

            text-align: center;
            background-color: #7978D9;
            color: #FFFFFF;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`