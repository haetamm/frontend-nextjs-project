
const NotFoundComp = () => {
  return (
    <>
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"/>
        <div className="mt-6 md:mt-0">
            <div className="flex flex-col">
                <span className="text-center font-bold my-10 opacity-30 hidden md:block">
                    MDI (npm i @mdi/font) reuqired for all icons
                    <hr className="my-4"/>
                    <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank" className="text-blue-600">
                        Convetert to SASS
                    </a>
                </span>
                <div className="flex flex-col items-center">
                    <div className="text-indigo-500 font-bold text-7xl">
                        404
                    </div>

                    <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                        This page does not exist
                    </div>

                    <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                        The page you are looking for could not be found.
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NotFoundComp