import endpoint from '../utils/api-endpoint';

const handleLogout = async (router) => {
    try {
      const response = await endpoint.delete('auth');
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default handleLogout;