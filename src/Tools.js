export default function Tools(params) {
    const { toolsImg } = params;

    let showImage = toolsImg.map((data, i) => {
        let html = <div className="flex items-center justify-center scale-75 transition delay-75 hover:rotate-0 hover:scale-100 duration-100">
            <img src={data} key={i} alt="profile" />
        </div>

        return html
    });

    return (
        <div className='p-0 sm:p-11 h-auto bg-gray-700 md:bg-transparent space-y-10'>
            <div className="container mx-auto my-auto bg-gray-700 sm:rounded-xl sm:shadow p-8 m-10">
                <div className="flex flex-col md:flex-row">
                    <div class="basis-auto my-auto md:basis-3/4 space-y-4 pl-0 md:pl-10">
                        <h1 className="text-5xl text-white text-center md:text-right">
                            My Toolkit
                        </h1>
                        <p className="text-white text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div class="basis-auto md:basis-1/4">
                        <div class="grid grid-cols-4 p-8">
                            {showImage}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}