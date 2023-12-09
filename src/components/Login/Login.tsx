import  React from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import axios from "axios";

interface MyFormValues {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const initialValues: MyFormValues = {
        username: '',
        password: ''
    };
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log(values.username, values.password)
                    console.log({
                        "username": "a",
                        "password": "b",
                    });
                    axios.post('https://dummyjson.com/auth/login', {
                        "username": "a",
                        "password": "b",
                    }, {
                        withCredentials: false,
                        headers: {
                            'content-type': 'application/json',
                        }
                    }).then(response => console.log(response.data))
                    actions.setSubmitting(false);
                    actions.resetForm()
                }}
            >
                <Form>
                    <label htmlFor="username">Username</label>
                    <Field id="username" name="username" placeholder="username" />

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="password" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;