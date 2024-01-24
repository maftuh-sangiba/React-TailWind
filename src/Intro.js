export default function Intro() {
    return (
        <div className='p-0 sm:p-11 h-auto bg-gray-700 md:bg-transparent'>
            <div className="container mx-auto my-auto bg-gray-700 sm:rounded-xl sm:shadow p-8 m-10">
                <div className="flex flex-col md:flex-row">
                    <div class="basis-auto md:basis-1/4">
                        <div className="relative">
                            <img class="absolute scale-50 blur-sm " src="https://planetanft.com/wp-content/uploads/2021/12/Doodles-1.png" alt="profilebg" />
                        </div>
                        <img className="rotate-12 scale-50 transition delay-150 hover:rotate-0 duration-500" src="https://planetanft.com/wp-content/uploads/2021/12/Doodles-1.png" alt="profile" />
                    </div>
                    <div class="basis-auto md:basis-3/4 bg-cyan-300">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}