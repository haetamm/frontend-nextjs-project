
const ModalCustom = ({ title, body, visible, onClose, handle, handleDeactive, handleActive }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-black opacity-60" onClick={onClose}></div>
      <form method="dialog" className="w-full m-2 xs:w-[300px] rounded-lg px-8 py-3 bg-white relative z-10">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{body}</p>
        <div className='flex justify-end'>
          <div className="">
            <button onClick={onClose} className="px-3 py-1 rounded hover:bg-yellow-600 bg-yellow-400">Cancel</button>
          </div>
          <div className="ml-2">
            { handle && 
              <button onClick={handle} className="px-3 py-1 rounded hover:bg-red-600 bg-red-400">Yes</button>
            }
            { title === 'Deactivated !!' && 
              <button onClick={handleDeactive} className="px-3 py-1 rounded hover:bg-red-600 bg-red-400">Yes</button>
            }
            { title === 'Activated !!' && 
              <button onClick={handleActive} className="px-3 py-1 rounded hover:bg-red-600 bg-red-400">Yes</button>
            }
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalCustom;
