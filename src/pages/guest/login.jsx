import SponsorComp from "../../components/landingPage/SponsorComp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormComp from "../../components/guest/FormComp";
import { schemaLogin } from "../../../utils/validation";
import CounterpartComp from "../../components/guest/CounterpartComp";
import { fieldsLogin } from "../../../utils/fields";
import useUserStore from "@/store/user";
import Layout from "../../components/layout/index";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { loginUser, loading } = useUserStore();
  const router = useRouter();
  const siteTitle = "Login | The North";
  const siteDescription =
    "sit amet consectetur adipisicing elit. At similique itaque, error eum optio tempora aspernatur animi?";

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    resolver: zodResolver(schemaLogin),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    await loginUser(formData, setError, router);
  };

  return (
    <Layout
      siteTitle={siteTitle}
      siteDescription={siteDescription}
      guestToken={true}
    >
      <div className=" container mx-auto mt-4 md:flex">
        <CounterpartComp />
        <FormComp
          control={control}
          namePage="Sign In"
          fields={fieldsLogin}
          isFormValid={isValid}
          errors={errors}
          handleSubmit={handleSubmit(onSubmit)}
          loading={loading}
        />
      </div>
      <SponsorComp />
    </Layout>
  );
};

export default LoginPage;
