import { create } from "zustand";
import axiosInstance from "../../utils/api";
import { handleFormErrors } from "../../utils/errorHandling";
import { toast } from "react-toastify";

const useRegisterStore = create((set) => ({
  loading: false,
  error: null,

  regisUser: async (data, setError, router) => {
    set({ loading: true, error: null });
    try {
      const { data: response } = await axiosInstance.post("users", data);
      const { data: user } = response;
      const { username } = user;
      toast.success(`selamat ${username}, silahkan login!!`);
      router.push("/guest/login");
    } catch (error) {
      handleFormErrors(error, setError);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useRegisterStore;
