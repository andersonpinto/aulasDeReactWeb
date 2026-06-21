import SubmitButton from './submit-button.jsx';

function AuthForm(){
    return (
        <form>
            <label for='inText'>Teste de input: </label>
            <input type = 'text' name = 'inText' />
            <SubmitButton />
        </form>
    );
};

export default AuthForm;