import Layout from "../../components/layout";
import SideBarUser from "../../components/layout/SideBarUser";
import useUserStore from "@/store/user";

import FormProfile from "@/components/profile/FormProfile";

const ProfilePage = () => {
  const { username, loading } = useUserStore();
  const siteTitle = `${loading ? "loading" : `${username} | The North`} `;
  const siteDescription =
    "Lorem ipsum dolor sit amet consectetur a doloremque fugit cumque eaque impedit nesciunt quidem obcaecati?";

  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <div className="flex w-full justify-center gap-0 h-screen md:mt-[-30px]">
        <SideBarUser />

        <div className="bg-slate-200 flex min-h-screen w-full max-w-full flex-col mx-auto pb-[18rem]">
          <section className="bg-slate-200 py-4 md:py-0">
            <div className="mx-auto max-w-screen-xl px-2 md:px-8">
              <div className="mb-5 md:mb-10 mt-6 md:mt-1">
                <div className="mx-auto">
                  <div className="min-h-screen p-0 xs:p-6 bg-gray-100 flex justify-center">
                    <div className="xs:container max-w-screen-lg mx-auto">
                      <h2 className="font-semibold text-xl text-gray-600">
                        The North
                      </h2>
                      <p className="text-gray-500 mb-6">
                        Stay fit, All day, every day.
                      </p>

                      <FormProfile />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
