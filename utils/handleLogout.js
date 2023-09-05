import endpoint from '../utils/api-endpoint';

const handleLogout = async (router, id) => {
    try {
      const response = await endpoint.delete(`auth/${id}`);
      console.log(response)
      // router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default handleLogout;