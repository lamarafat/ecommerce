import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';

export const handleRegistrationResponse = (response, navigate, page) => {
  if (response.status == 201) {
    toast.success('Check your email, please!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: toast.Bounce,
    });
    navigate(page);
  }
  <ToastContainer/>
};

export const handleLoginResponse = (response, navigate, page) => {
  if (response.status == 200) {
    localStorage.setItem("userToken", response.data.token); 
    navigate(page);
  }
};