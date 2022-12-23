import styled from "styled-components";

const LoginStyled = styled.div`
    margin: 150px auto;
    width: 600px;
    height: 400px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    overflow: hidden;
    form {
        width: 50%;
        height: 100%;
    }
    .container-logo {
        background-color: #e11d48;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        width: 100px;
        height: 100px;
        margin: 20px auto;
        border-radius: 100%;
        text-align: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container-logo h3 {
        font-size: 17px;
        transform: translateY(-8px);
    }
    fieldset {
        margin: 10px auto;
        width: 80%;
        min-height: 200px;
        border-radius: 10px;
        border: .5px solid #111827;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    fieldset legend {
        color: #111827;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 13px;
    }
    fieldset label {
        margin: 10px auto;
        width: 80%;
        display: flex;
        font-family: 'Oxygen Mono', monospace;
        font-weight: bold;
        font-size: 15px;
        color: #111827;
    }
    fieldset label:nth-child(2) {
        margin-top: 30px;
    }
    .container-inputs {
        width: 120px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .container-inputs .icon {
        position: absolute;
        left: 4px;
        font-size: 10px;
        transition: all .5s ease-in
    }
    .container-inputs input {
        border: none;
        width: 100%;
        padding: 5px 30px;
        font-weight: bold;
        background-color: #f4f4f5;
        border-bottom: 1px solid #111827;
        outline: none;
    }
    .container-inputs input:focus {
        background-color: #e7e5e4;
    }
    fieldset label:nth-child(2) .container-inputs {
        transform: translate(10px, -10px);
    }
    fieldset label:nth-child(3) .container-inputs {
        transform: translate(27px, -10px);
    }
    .container-btns {
        min-height: 50px;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .container-btns button {
        width: 100%;
        padding: 2px;
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
    }    
    .container-btns button:nth-child(2) {
        background-color: #111827;
    }
    .container-btns button:nth-child(2):hover {
        background-color: #475569;
    }
    .offFocus {
        color: #94a3b8;
    }
    .focus {
        color: #e11d48;
    }
    .banner-logo {
        width: 50%;
        height: 100%;
        background-color: yellow;
        overflow: hidden;
    }
    .banner-logo img {
        transform: translateX(-75px);
    }
    .disabledOff {
        background-color: #e11d48;
    }
    .disabledOn {
        background-color: #f87171;
    }
  

`
export default LoginStyled;