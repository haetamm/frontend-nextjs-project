import Layout from '../../../components/layout';
import SponsorComp from '../../../components/landingPage/SponsorComp';
import CounterpartComp from '../../../components/guest/CounterpartComp';
import useBackgroundChange from '../../../utils/changeBackground';
import { useRouter } from 'next/router';
import { useForm } from '../../../utils/validationUser';
import FormComp from '../../../components/guest/FormComp';
import endpoint from '../../../utils/api-endpoint';
import { useDispatch } from 'react-redux'; 
import Cookies from 'js-cookie';
import cookieCutter from 'cookie-cutter';


const LoginPage = () => {
    const siteTitle = 'Login | The North';
    const siteDescription = 'sit amet consectetur adipisicing elit. At similique itaque, error eum optio tempora aspernatur animi?';
    const router = useRouter();
    const dispatch = useDispatch();

    const { isFormValid, showPassword, formData, errorMessages, handleInputChange, toggleShowPassword, setFormData, setErrorMessages, setIsFormValid, handleErrorResponse } = useForm();

    const bgColor = useBackgroundChange('bg-gradient-to-tr from-blue-300 to-slate-300', 400);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isFormValid) {
            try {
                const response = await endpoint.post('auth', formData, {
                    withCredentials: true, 
                });
                
                localStorage.setItem('loginSuccess', formData.username);
                dispatch({ type: 'LOGIN' });
                router.push('/home');        
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
            <div className="h-full mt-10 mb-6 md:flex">
                
                <CounterpartComp />
                <FormComp
                    namePage='Login' 
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