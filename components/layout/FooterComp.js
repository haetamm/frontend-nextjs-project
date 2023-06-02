import { GiWorld } from 'react-icons/gi'

const FooterComp = () => {
  return (
    <div className=" bg-blue-300 select-none">
        <div className="max-w-2xl mx-auto text-white py-8">
            <div className="text-center">
                <div className="flex justify-center">
                    <h3 className="text-3xl mb-3 mr-1"> Download our North app </h3>
                    <GiWorld size={44} className='hidden sm:block'/>
                </div>
                <p> Stay fit. All day, every day. </p>
                <div className="flex justify-center my-10">
                    <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="default" className="w-7 md:w-8" width={44} height={44}/>
                        <div className="text-left ml-3">
                            <p className='text-xs text-gray-200'>Download on </p>
                            <p className="text-sm md:text-base"> Google Play Store </p>
                        </div>
                    </div>
                    <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="default" className="w-7 md:w-8" width={44} height={44}/>
                        <div className="text-left ml-3">
                            <p className='text-xs text-gray-200'>Download on </p>
                            <p className="text-sm md:text-base"> Apple Store </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-18 flex flex-col md:flex-row md:justify-between items-center text-sm text-black">
                <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2021. </p>
                <div className="order-1 md:order-2">
                    <span className="px-2">About us</span>
                    <span className="px-2 border-l">Contact us</span>
                    <span className="px-2 border-l">Privacy Policy</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterComp