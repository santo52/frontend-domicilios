import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import { FormContainer } from './styles';
import mascota from "./mascota.svg";

function Register() {

    const svgContainerRef = useRef(null);
    const loginEmailRef = useRef(null);
    const emailLabelRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <FormContainer>
            <form>
                <div className="svgContainer" ref={svgContainerRef} >
                    <div>
                        <img src={mascota} />
                    </div>
                </div>

                <div className="inputGroup inputGroup1">
                    <label htmlFor="loginEmail" id="loginEmailLabel" ref={emailLabelRef}>Correo electrónico</label>
                    <input type="email" id="loginEmail" ref={loginEmailRef} maxLength="254" />
                    {/* <p className="helper helper1">email@domain.com</p> */}
                </div>
                <div className="inputGroup inputGroup2">
                    <label htmlFor="loginPassword" id="loginPasswordLabel">Contraseña</label>
                    <input type="password" ref={passwordRef} id="loginPassword" />
                    {/* <label id="showPasswordToggle" ref={showPasswordToggleRef} htmlFor="showPasswordCheck">Show
                        <input id="showPasswordCheck" ref={showPasswordCheckRef} type="checkbox"/>
                        <div className="indicator"></div>
                    </label> */}
                </div>
                <div className="inputGroup inputGroup2">
                    <label htmlFor="loginPassword" id="loginPasswordLabel">Confirmar contraseña</label>
                    <input type="password" ref={passwordRef} id="loginPassword" />
                    {/* <label id="showPasswordToggle" ref={showPasswordToggleRef} htmlFor="showPasswordCheck">Show
                        <input id="showPasswordCheck" ref={showPasswordCheckRef} type="checkbox"/>
                        <div className="indicator"></div>
                    </label> */}
                </div>
                <div className="inputGroup inputGroup3">
                    <button id="login">Registrarse</button>
                </div>
            </form>
        </FormContainer>
    );
}

export default withRouter(Register);
