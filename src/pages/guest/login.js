import Layout from '../../../components/layout';
import SponsorComp from '../../../components/landingPage/SponsorComp';
import CounterpartComp from '../../../components/guest/CounterpartComp';
import useBackgroundChange from '../../../utils/changeBackground';
import { useRouter } from 'next/router';
import { useForm } from '../../../utils/validationUser';
import FormComp from '../../../components/guest/FormComp';
import endpoint from '../../../utils/api-endpoint';
import { useContext } from 'react';
import StateContext from '../../../utils/StateContext';
import Cookies from "js-cookie";



const LoginPage = () => {
    const siteTitle = 'Login | The North';
    const siteDescription = 'sit amet consectetur adipisicing elit. At similique itaque, error eum optio tempora aspernatur animi?';
    const router = useRouter();

    const { isFormValid, showPassword, formData, errorMessages, handleInputChange, toggleShowPassword, setFormData, setErrorMessages, setIsFormValid, handleErrorResponse } = useForm();

    const bgColor = useBackgroundChange('bg-gradient-to-tr from-blue-300 to-slate-300', 400);

    // const { setToken } = useContext(StateContext);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isFormValid) {
            try {
                const response = await endpoint.post('auth', formData, {
                    withCredentials: true, 
                });
                Cookies.set("token", response.data.token, { expires: 10080 });
                // setToken(response.data.token)
                
                sessionStorage.setItem('loginSuccess', formData.username);
                router.reload();
                setFormData({
                    username: '',
                    password: ''
                });
                setErrorMessages({
                    username: '',
                    password: ''
                });
                setIsFormValid(false);
            } catch (error) {
                if (error.response) {
                    const { status, data } = error.response;
                    if (status === 401) {
                        setFormData({
                            username: '',
                            password: ''
                        });
                        setErrorMessages({
                            username: 'username atau password salah',
                            password: 'username atau password salah'
                        });
                    } else if (status === 422) {
                        console.log('Error 422:', data.errors);
                        handleErrorResponse(error.response.data);
                    } else {
                        console.error('Error:', error);
                    }
                } else {
                    console.error('Error:', error);
                }
            }
        }
    };

    

    return (
        <Layout guest={true} siteTitle={siteTitle} siteDescription={siteDescription}>
            <div className="h-full mt-10 md:flex">       
                <CounterpartComp />
                <FormComp
                    namePage='Sign In' 
                    isFormValid={isFormValid} 
                    showPassword={showPassword} 
                    formData={formData} 
                    errorMessages={errorMessages} 
                    handleInputChange={handleInputChange} 
                    toggleShowPassword={toggleShowPassword} 
                    bgColor={bgColor} 
                    handleSubmit={handleSubmit} 
                />
            </div>
            <SponsorComp />
        </Layout>
    )
}

export default LoginPage;