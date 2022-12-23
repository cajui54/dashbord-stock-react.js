import {useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import imageBeer from  '../../assets/images/imgBeer.jpg'
import LoginStyled from './LoginStyled';

const Login = () => {
    const[styledBtn, setStyled] = useState('disabledOn');

    const [inputs, setInput] = useState({});

    const [disabledBtn, setDisabled] = useState(true);
    const iconLogin = useRef('');
    const iconPassword = useRef('');
    const refButton = useRef('')

    const handleSubmit = (event) => event.preventDefault();
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
    const handleBlur = (refAction) => {
        refAction.current.classList.remove('focus');
        refAction.current.classList.add('offFocus');
    }
    const handleFocus = (refAction) => {
        refAction.current.classList.add('focus');
        refAction.current.classList.remove('offFocus');
    }
    const handleChange = ({target}) => {
        setInput({...inputs, [target.name]: target.value});
        buttonEnabled(inputs)
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
                             name='user'
                             onFocus={ () => handleFocus(iconLogin)}
                             onBlur={ () => handleBlur(iconLogin)}
                             onChange={handleChange}
                         />
                    </div>
                </label>

                <label>
                    <span>Senha:</span>
                    <div className="container-inputs">
                        <FontAwesomeIcon ref={iconPassword} className='icon' icon={faLock} />
                        <input type="password"
                             name='password'
                             onFocus={() => handleFocus(iconPassword)}
                             onBlur={() => handleBlur(iconPassword)}
                             onChange={handleChange}
                         />
                    </div>
                </label>

                <div className="container-btns">
                    <button disabled={disabledBtn} className={`${styledBtn}`}>Entrar</button>
                    <button type="reset">Cancelar</button>
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
