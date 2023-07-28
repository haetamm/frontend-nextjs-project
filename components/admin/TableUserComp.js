import Image from "next/image";
import { formatDate } from "../../utils/articleHelper";
import ModalCustom from "../utils/ModalCustom";
import { useState } from "react";
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import endpoint from '../../utils/api-endpoint';


const TableUserComp = ({ users, totalCount, currentPage, handleNextPage, handlePrevPage, handlePageChange, totalPages, getUsers }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState(null);
    const [username, setUsername] = useState(null);
    const router = useRouter();
    const { page } = router.query;

    const handleModalOpen = (status, username, id) => {
        setModalVisible(true);
        setTitle(`${status} !!`);
        setBody(`User '${username}' akan di ${status} ?`);
        setUsername(username);
        setId(id);
    };

    const handleDeactive = async (e) => {
        try {
            const response = await endpoint.delete(`users/${id}`);
            handleModalClose()
            toast.info(`user ${username} berhasil di nonaktifkan`);
            getUsers(page)
        } catch (error) {
              console.error(error);
        }
    }

    const handleActive = async (e) => {
        try {
            const response = await endpoint.post(`users/${username}/active`);
            handleModalClose()
            toast.info(`user ${username} berhasil di aktifkan`);
            getUsers(page)
        } catch (error) {
              console.error(error);
        }
    }

    const handleModalClose = () => {
        setModalVisible(false);
    };

    return (
        <>
        <div className="mx-auto max-w-screen-xl px-3 md:px-6 mb-20">
            <section className=" text-gray-800">
                <div className="my-2 flex flex-row">
                    <div className="relative">
                        <select
                            className="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={currentPage}
                            onChange={(e) => handlePageChange(parseInt(e.target.value))}
                        >
                            {(() => {
                                const options = [];
                                for (let i = 1; i <= totalPages; i++) {
                                options.push(
                                    <option key={i} value={i}>
                                    {i}
                                    </option>
                                );
                                }
                                return options;
                            })()}
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input placeholder="Search"
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="block rounded-lg shadow-lg bg-white">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">                                                   
                                    <table className="min-w-full mb-0">
                                        <thead className="border-b bg-gray-50 rounded-t-lg text-left">
                                            <tr>
                                                <th scope="col" className="rounded-tl-lg text-sm font-medium px-6 py-4">USER</th>
                                                <th scope="col" className="text-sm font-medium px-6 py-4">JOINED</th>
                                                <th scope="col" className="text-sm font-medium px-6 py-4">STATUS</th>
                                                <th scope="col" className="rounded-tr-lg text-sm font-medium px-6 py-4">ACTION</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            { users.map((user) => (
                                                <tr key={user.id} className="border-b">
                                                    <th scope="row" className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                        <div className="flex flex-row items-center">
                                                            <Image
                                                                className="rounded-full w-12"
                                                                src="/image/noimage.png"
                                                                alt="Avatar"
                                                                width={48}
                                                                height={48}
                                                            />
                                                            <div className="ml-4">
                                                                <p className="mb-0.5 font-medium">{user.username}</p>
                                                                <p className="mb-0.5 text-gray-500">x@example.com</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                        <div className="flex flex-col">
                                                            <p className="mb-0.5">{formatDate(user.created_at)}</p>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                        <span className={`text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium ${user.deleted_at === null ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}  rounded-full`}>{ user.deleted_at === null ? 'Active' : 'Inactive'}</span>
                                                    </td>
                                                    <td  className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                                        <span onClick={() => handleModalOpen(user.deleted_at === null ? 'Deactivated' : 'Activated', user.username, user.id)} className={`${user.deleted_at !== null ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}  py-1 px-2.5 cursor-pointer font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out rounded-full`}>{user.deleted_at === null ? 'Deactivated' : 'Activated'}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <ModalCustom 
                                        title={title}
                                        visible={modalVisible}
                                        onClose={handleModalClose}
                                        body={body}
                                        handleDeactive={handleDeactive}
                                        handleActive={handleActive}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                            <span className="text-xs xs:text-sm text-gray-900">
                                {`Showing 1 to 10 of ${totalCount} Entries on Page ${currentPage}`}
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default TableUserComp