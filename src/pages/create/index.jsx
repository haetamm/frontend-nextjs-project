import Layout from "../../components/layout";
import SideBarUser from "../../components/layout/SideBarUser";
import FormThread from "@/components/home/FormThread";
import { useState } from "react";
import NotifComp from "@/components/thread/NotifComp";

const CreateThreadPage = () => {
  const [notifId, setNotifId] = useState("");
  const siteTitle = "Add Thread | The North";
  const siteDescription =
    "Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?";

  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0">
        <SideBarUser />

        <div className="bg-slate-200 rounded-none hover-animation flex w-full max-w-full flex-col mx-auto md:mt-[-30px] pb-16 xs:pb-4">
          <section className="bg-slate-200 py-5 md:py-0">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Add Thread
              </h2>
              <FormThread setNotifId={setNotifId} />
              {notifId && <NotifComp id={notifId} />}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CreateThreadPage;
