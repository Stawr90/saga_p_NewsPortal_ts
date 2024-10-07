import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginGetChar, inpItems, useLog } from './loginSlice';
import { IFormData } from 'types/TypesBase';
import ValidateForm from '../../utils/validate/validateForm';

import './loginForm.scss';

const LoginForm = () => {
    const {validateUsername, validatePassword} = ValidateForm();
    const signIn = useSelector(useLog);
    const inputItems = useSelector(inpItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (signIn) {
            navigate('/profile')
        } 
    }, [signIn])

    const submitLogin = (values: IFormData, form) => {
        dispatch(loginGetChar(values));
        form.reset();
    }

    const validateLogin = (values: IFormData) => {
        const errors: Partial<IFormData> = {};
        
        errors.username = validateUsername(values.username);
        errors.password = validatePassword(values.password);

        return errors;
    }

    return (
        <Form
            onSubmit={submitLogin}
            validate={validateLogin}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="login">
                    <h1 className="login__title">News Portal</h1>
                    <h2 className="login__subtitle">Sign In</h2>
                    {inputItems.map(item => (
                        <Field name={item.name} key={item.name}>
                            {({ input, meta }) => (
                                <div>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                    <input type="text" {...input} placeholder={item.placeholder} className={meta.error ? "input_error" : null}/>
                                </div>
                            )}
                        </Field>
                    ))}
                    <button type="submit" className="login__btn">Sign In</button>
                </form>
            )}
        />
    )
}

export default LoginForm;