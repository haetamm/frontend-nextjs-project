import SponsorComp from "../../components/landingPage/SponsorComp";
import CounterpartComp from "../../components/guest/CounterpartComp";
import { useForm } from "react-hook-form";
import FormComp from "../../components/guest/FormComp";
import useRegisterStore from "@/store/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldsLogin } from "../../../utils/fields";
import { schemaRegister } from "../../../utils/validation";
import { useRouter } from "next/router";
import Layout from "../../components/layout/index";

const RegisterPage = () => {
  const { loading, regisUser } = useRegisterStore();
  const router = useRouter();
  const siteTitle = "Register | The North";
  const siteDescription =
    "At similique itaque, error eum optio tempora aspernatur animi?";

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    resolver: zodResolver(schemaRegister),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    await regisUser(formData, setError, router);
  };

  return (
    <Layout
      siteTitle={siteTitle}
      siteDescription={siteDescription}
      guestToken={true}
    >
      <div className="h-full container mx-auto mt-4 md:flex">
        <CounterpartComp />
        <FormComp
          control={control}
          namePage="Sign Up"
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

export default RegisterPage;
