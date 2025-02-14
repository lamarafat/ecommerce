// import axios from 'axios';
// import React, { useState } from 'react'
// import { Form, Button, FloatingLabel } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// export default function Signin() {
//     const {register, handleSubmit, formState:{errors}}= useForm();
//     const [loading, setLoading] = useState(false);
//     const [error, setError]= useState(null);
//     const navigate = useNavigate();
//     const registerUser = async (value)=> {
//         setLoading(true);
//         try{
//             const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/signin`,value);
//             if(response.status ==200){
//                 localStorage.setItem("userToken", response.data.token);
//                   navigate('/home');
//                 }
//                 console.log(response);
//         }catch(error){
//             console.log(error);
//             setError(error.response.data.message);
//         }finally{
//                 setLoading(false);
//             }
//         }
    
//   return (
//     <>
//       <Form onSubmit={handleSubmit(registerUser)}>
        

//         <FloatingLabel
//           controlId="floatingInput"
//           label="Email Address"
//           className="mb-3"
//         >
//           <Form.Control
//             type="email"
//             placeholder=""
//             {...register('email', { required: "Email is required !!" })}
//           />
//           {errors.email && <span className="text-danger">{errors.email.message}</span>}
//         </FloatingLabel>

//         <FloatingLabel
//           controlId="floatingInput"
//           label="Password"
//           className="mb-3"
//         >
//           <Form.Control
//             type="password"
//             placeholder=""
//             {...register('password', { required: "Password is required !!" })}
//           />
//           {errors.password && <span className="text-danger">{errors.password.message}</span>}
//         </FloatingLabel>

//         {error && <p className="text-danger">{error}</p>}

//         <Button type="submit" variant="primary" disabled={loading}>
//           {loading ? "Loading..." : "Get Started"}
//         </Button>
//       </Form>
//     </>
//   )
// }
