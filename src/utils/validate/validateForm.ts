
const ValidateForm = () => {
    const validateUsername = (username: string | undefined) => {
        const usernameRegExp = /^[A-Za-z]+$/;
        return username && !usernameRegExp.test(username) ? 'Использовать латинские буквы' : undefined;
    };
    const validatePassword = (password: string | undefined) => {
        return password && password.length > 5 ? 'Не более 5 символов' : undefined;
    };

    return { validateUsername, validatePassword };
}

export default ValidateForm;