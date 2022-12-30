import {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import imageBeer from  '../../assets/images/imgBeer.jpg'
import LoginStyled from './LoginStyled';
import useUserContext from '../../hooks/useUserContext';


const Login = () => {
    const url = 'http://localhost:3000/users';
    const navegation = useNavigate();
    const[styledBtn, setStyled] = useState('disabledOn');
    const [message, setMessage] = useState(true)
    const [inputs, setInput] = useState({});
    const [textBox, setTextBox] = useState({});
    const {useFetch} = useUserContext();
    const [disabledBtn, setDisabled] = useState(true);
    const iconLogin = useRef('');
    const iconPassword = useRef('');
    const { datas : users} = useFetch(url);

    console.log(users);
    
    const findUsers = () => {
        return  users.find((login) => login.user === inputs.user && login.password === inputs.password);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(findUsers()) {
            setMessage(true);
            checkLogin(true);
            navegation(`/home/${findUsers().id}`);
        }else {
            checkLogin(false);
            setMessage(false);
        }
    }
    const checkLogin = (status) => {
        if(status) {
            iconLogin.current.classList.remove('focus');
            iconPassword.current.classList.remove('focus');
            textBoxError(status);
        } else {
            iconLogin.current.classList.add('focus');
            iconPassword.current.classList.add('focus');
            textBoxError(status);
        }
    }
      const textBoxError = (status) => {
        Object.values(textBox).forEach((text) => {
            if(!status) {
                text.classList.remove('defaultTextBox');
                text.classList.add('textBoxError');
            }
            else {
                text.classList.add('defaultTextBox');
                text.classList.remove('textBoxError');
            }
            
            
        })
      }
    const buttonEnabled = (_inputs) => {
        let lengthObj = Object.keys(_inputs).length;
        if(lengthObj === 2) {
            if(_inputs.user.length >= 6 && _inputs.password.length >= 5 ) {
                setStyled('disabledOff');
                setDisabled(false);
            }
            else {
                setStyled('disabledOn');
                setDisabled(true);
            }
        }
        
    }
    const handleBlur = (event ,refAction) => {
        setTextBox({...textBox, [event.target.name]: event.target});
        refAction.current.classList.remove('focus');
        refAction.current.classList.add('offFocus');
    }
    const handleFocus = (refAction) => {
        refAction.current.classList.add('focus');
        refAction.current.classList.remove('offFocus');
    }
    const handleChange = ({target}) => {
        setInput({...inputs, [target.name]: target.value});
        buttonEnabled(inputs);
    }
    const resetAll = () => {
        setMessage(true);
        checkLogin(true);
        
    }
  return (
    <LoginStyled>
      
        <form onSubmit={handleSubmit}>
            <div className="container-logo">
                <h2>24hrs</h2>
                <h3>Adega's </h3>
            </div>

            <fieldset>
                <legend>Login para entrar no sistema</legend>
                <label>
                    <span>Usuário:</span>
                    <div className="container-inputs">
                        <FontAwesomeIcon 
                            className='icon'
                            icon={faUser}
                            ref={iconLogin}
                         />
                        <input type="text"
                            className='defaultTextBox'
                             name='user'
                             onFocus={ () => handleFocus(iconLogin)}
                             onBlur={ (event) => handleBlur(event, iconLogin)}
                             onChange={handleChange}
                         />
                    </div>
                </label>

                <label>
                    <span>Senha:</span>
                    <div className="container-inputs">
                        <FontAwesomeIcon ref={iconPassword} className='icon' icon={faLock} />
                        <input type="password"
                            className='defaultTextBox'
                             name='password'
                             onFocus={() => handleFocus(iconPassword)}
                             onBlur={(event) => handleBlur(event, iconPassword)}
                             onChange={handleChange}
                         />
                    </div>
                </label>

                {
                    !message && (
                        <div className='msg-error'>
                            <p>Login ou Senha inválido!</p>
                        </div>
                    )
                }

                <div className="container-btns">
                    <button
                     disabled={disabledBtn}
                     className={`${styledBtn}`}>Entrar</button>

                    <button type="reset" onClick={resetAll}>Cancelar</button>
                </div>
            </fieldset>
        </form>

        <div className='banner-logo'>
            <img src={imageBeer} alt="cervejas no balcão" />
        </div>
    </LoginStyled>
  )
}

export default Login
