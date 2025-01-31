import Link from "next/link";

const NotifComp = ({ id }) => {
  return (
    <section className="bg-slate-200 mt-3">
      <div className="mx-auto max-w-screen-xl">
        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current hidden xs:block shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            <Link
              className="cursor-pointer hover:underline"
              href={`/thread/${id}`}
            >
              Klik untuk melihat Thrad anda
            </Link>{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default NotifComp;
