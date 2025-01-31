import React, { useEffect } from "react";
import InputTitle from "../thread/InputTitle";
import InputBody from "../thread/InputBody";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useThreadStore from "@/store/thread";
import { schemaThread } from "../../../utils/validation";
import { useRouter } from "next/router";

const FormThread = ({ setNotifId }) => {
  const {
    loading,
    addThread,
    thread,
    getThreadBySlug,
    updateThread,
    resetThread,
  } = useThreadStore();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      getThreadBySlug(slug);
    }
  }, [getThreadBySlug, slug]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(schemaThread),
    mode: "onChange",
    defaultValues: {
      title: thread?.title || "",
      body: thread?.body || "",
    },
  });

  useEffect(() => {
    if (slug) {
      getThreadBySlug(slug);
    } else {
      resetThread();
      reset({ title: "", body: "" });
    }
  }, [slug, getThreadBySlug, reset, resetThread]);

  const onSubmit = async (formData) => {
    if (slug) {
      await updateThread(thread.id, formData, setError, router, slug);
    } else {
      await addThread(formData, setError, reset, setNotifId);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTitle control={control} errors={errors} />
        <InputBody control={control} errors={errors} />
        <button
          type="submit"
          disabled={loading || !isValid}
          className="w-full px-4 py-2 mt-12 disabled:bg-blue-400 disabled:cursor-not-allowed cursor-pointer text-white bg-blue-600 rounded-md hover:bg-blue-600r"
        >
          {loading ? "Loading" : slug ? "Update" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default FormThread;
