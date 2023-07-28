import React from 'react'

const ModalComp = ({ id, title, body, handle }) => {
  return (
    <dialog id={id} className="modal p-2">
        <form method="dialog" className="w-full m-2 xs:w-[300px] rounded-lg px-8 py-3 bg-white">
            <h3 className="font-bold text-lg">{ title }</h3>
            <p className="py-4">{ body }</p>
            <div className='flex justify-end'>
            <div className="">
                <button className="px-3 py-1 rounded hover:bg-yellow-600 bg-yellow-400">Cancel</button>
            </div>
            <div onClick={handle} className=" ml-2">
                <button className="px-3 py-1 rounded hover:bg-red-600 bg-red-400">Yes</button>
            </div>
            </div>
        </form>
    </dialog>
  )
}

export default ModalComp