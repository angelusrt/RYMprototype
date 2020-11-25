import React from 'react';

function LogIn(prop){
    return(
        <div className="Login">
            <div className="Login--card">
                <h1>Let’s advance your experience!</h1>

                <h3>Email</h3>
                <form><input type="textarea"/></form>
        
                <h3>Senha</h3>
                <form><input type="textarea"/></form>
                
                <button>Log In!</button>
                <span onClick={ () => prop.login(false)}>Cancel</span>
            </div>
        </div>    
    );
}

export default LogIn;