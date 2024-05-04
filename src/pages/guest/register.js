import Layout from '../../../components/layout';
import SponsorComp from '../../../components/landingPage/SponsorComp';
import CounterpartComp from '../../../components/guest/CounterpartComp';
import useBackgroundChange from '../../../utils/changeBackground';
import { useRouter } from 'next/router';
import { useForm } from '../../../utils/validationUser';
import FormComp from '../../../components/guest/FormComp';
import endpoint from '../../../utils/api-endpoint';


const RegisterPage = () => {
    const siteTitle = 'Register | The North';
    const siteDescription = 'At similique itaque, error eum optio tempora aspernatur animi?';
    const { isFormValid, showPassword, formData, errorMessages, handleInputChange, toggleShowPassword, setFormData, setErrorMessages, setIsFormValid, handleErrorResponse } = useForm();
    const router = useRouter();
    const bgColor = useBackgroundChange('bg-gradient-to-tr from-blue-300 to-slate-300', 400);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isFormValid) {
            try {
                const response = await endpoint.post('users', formData);
                const client = response.data.addedUser.username
                
                sessionStorage.setItem('registrationSuccess', client);
                router.push('/guest/login');        
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
                if (error.response && error.response.data && error.response.data.errors) {
                    handleErrorResponse(error.response.data);
                } else {
                console.error(error);
                }
            }
        }
    };

    return (
        <Layout guest={true} siteTitle={siteTitle} siteDescription={siteDescription}>
            <div className="h-full mt-10 md:flex">
                <CounterpartComp />
                <FormComp 
                    namePage='Sign Up'
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

export default RegisterPage;