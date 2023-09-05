import endpoint from '../utils/api-endpoint';

const handleLogout = async (router, id) => {
    try {
      const response = await endpoint.delete(`auth/${id}`);
       document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      console.log(response)
      // router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default handleLogout;