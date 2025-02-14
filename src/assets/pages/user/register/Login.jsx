import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useFetch from '../../../../component/user/hooks/useFetch';
import { handleLoginResponse } from '../../../../component/user/hooks/responseHandler';
import FASCO from '../../../image/FASCO.png';
import signin from '../../../image/sign.png';
import googleLogo from '../../../image/google.png';
import emailLogo from '../../../image/email.png';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { error, isLoading, fetchData } = useFetch(
    `${import.meta.env.VITE_BURL}/auth/signin`,
    handleLoginResponse
  );

  const onSubmit = (data) => {
    fetchData(data, '/home');
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex flex-lg-row flex-column align-items-center">
              <div className="text-center mb-4 mb-lg-0 me-lg-4">
                <img className="img-fluid" src={signin} alt="Sign In" style={{ maxWidth: '400px' }} />
              </div>

              <div className="card card-signin my-5" style={{ flex: 1 }}>
                <div className="card-body">
                  <div className="mb-4">
                    <img src={FASCO} alt="Logo" style={{ maxWidth: '100px' }} />
                  </div>
                  <h5 className="card-title text-center">Sign In</h5>

                  <div className="container mb-4">
                    <div className="row justify-content-center text-center">
                      <div className="col">
                        <Button variant="light" className="me-2" href="https://myaccount.google.com/">
                          <img src={googleLogo} alt="Google logo" style={{ maxWidth: '20px' }} /> Sign In via Google
                        </Button>
                        <Button variant="light" href="https://accounts.google.com/AccountChooser">
                          <img src={emailLogo} alt="Email logo" style={{ maxWidth: '20px' }} /> Sign In via Email
                        </Button>
                        <p className="text-muted text-center mt-3">or</p>
                      </div>
                    </div>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email Address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder=""
                        {...register('email', { required: "Email is required !!" })}
                      />
                      {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Password"
                      className="mb-3"
                    >
                      <Form.Control
                        type="password"
                        placeholder=""
                        {...register('password', { required: "Password is required !!" })}
                      />
                      {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </FloatingLabel>

                    {error && <p className="text-danger">{error}</p>}

                    <Button type="submit" variant="primary" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Login"}
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}