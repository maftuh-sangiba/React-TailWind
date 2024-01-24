import * as Unicons from '@iconscout/react-unicons';

export default function Footer() {
    return (
        <div className='flex bg-gray-600 md:bg-gray-700 sm:rounded-t-xl shadow-md text-white md:p-10'>
            <div className="container mx-auto my-auto p-11 md:p-0">
                <div className="flex flex-row justify-center space-x-5">
                    <div className="basis-auto md:basis-1/4 grid justify-items-start">
                        <div className="flex flex-row space-x-5 my-auto">
                            <div className='hover:text-gray-900 hover:stroke-gray-400'><Unicons.UilGithub /></div>
                            <div className='hover:text-blue-900 hover:stroke-gray-400'><Unicons.UilLinkedin /></div>
                            <div className='hover:text-blue-300 hover:stroke-gray-400'><Unicons.UilTwitter /></div>
                        </div>
                    </div>
                    <div className="basis-auto md:basis-1/2 grid justify-items-end">
                        <p className="text-sm md:text-lg">© 2024 - Designed & developed by Maftuh Sangiba.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}