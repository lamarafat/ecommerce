// import axios from 'axios';
// import React, { useState } from 'react'
// import { Form, Button, FloatingLabel } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import {  useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// export default function Signup() {
//     const {register, handleSubmit, formState:{errors}}= useForm();
//     const [loading, setLoading] = useState(false);
//     const [error, setError]= useState(null);
//     const navigate = useNavigate();
//     const registerUser = async (value)=> {
//         setLoading(true);
//         try{
//             const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/signup`,value);
//             if(response.status ==201){
//                 toast.success('Check your email, please!', {
//                     position: "bottom-center",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: false,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                     transition: toast.Bounce,
//                   });
//                   navigate('/auth/signin');
//                 }
//                 console.log(response);
//         }catch(error){
//             if (error.response.status ==409){
//                 setError("email already exists");
//             }else{
//                 setError("server error");
//             }
//         }finally{
//                 setLoading(false);
//             }
//         }
    
//   return (
//     <>
//       <Form onSubmit={handleSubmit(registerUser)}>
//         <FloatingLabel
//           controlId="floatingInput"
//           label="User Name"
//           className="mb-3"
//         >
//           <Form.Control
//             type="text"
//             placeholder=""
//             {...register('userName', { required: "User name is required !!" })}
//           />
//           {errors.userName && <span className="text-danger">{errors.userName.message}</span>}
//         </FloatingLabel>

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
//           {loading ? "Loading..." : "Register"}
//         </Button>
//       </Form>
//     </>
//   )
// }
