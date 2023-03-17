import './Profile.css';
import * as Unicons from '@iconscout/react-unicons';

function Profile() {
    return (
        <div>
            <div className='p-0 md:p-11 h-screen'>
                <div className="container mx-auto my-auto bg-gray-700 md:rounded-xl md:shadow lg:border p-8 m-10">
                    <div className='object-cover bg-gray-50 w-64 h-64 rounded-full mx-auto mb-5 mt-5 shadow-xl'>
                        <img className='object-cover h-64 w-64 rounded-full mx-auto p-2' src='https://planetanft.com/wp-content/uploads/2021/12/Doodles-1.png'></img>
                    </div>
                    <div className='mb-10 px-0 md:px-32 lg:px-40 xl:px-60'>
                        <p className='text-center text-gray-100 text-lg'>Hello i'am Alex Jhon</p>
                        <p className="text-3xl text-gray-100 font-bold mb-5 mt-5 text-center">
                            Fullstack Developer
                        </p>
                        <p className="text-gray-300 text-lg text-center px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='flex gap-2 justify-center mb-5'>
                        <button className='bg-slate-200 rounded-full px-5 py-2 border-4 border-white w-auto flex items-center'><Unicons.UilGithub /> Github</button>
                        <button className='bg-slate-200 rounded-full px-5 py-2 border-4 border-white w-auto flex items-center'><Unicons.UilLinkedin color='#0077b5' /> LinkedIn</button>
                    </div>
                </div>
            </div>
            <Detail />
        </div>
    )
}

function Detail() {
    return (
        <div className='p-0 md:p-11 h-screen'>
            <div className="container mx-auto my-auto bg-gray-700 md:rounded-xl md:shadow lg:border p-8 m-10">
                <div className='object-cover bg-gray-50 w-64 h-64 rounded-full mx-auto mb-5 mt-5 shadow-xl'>
                    <img className='object-cover h-64 w-64 rounded-full mx-auto p-2' src='https://planetanft.com/wp-content/uploads/2021/12/Doodles-1.png'></img>
                </div>
                <div className='mb-10 px-0 md:px-32 lg:px-40 xl:px-60'>
                    <p className='text-center text-gray-100 text-lg'>Hello i'am Alex Jhon</p>
                    <p className="text-3xl text-gray-100 font-bold mb-5 mt-5 text-center">
                        Fullstack Developer
                    </p>
                    <p className="text-gray-300 text-lg text-center px-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className='flex gap-2 justify-center mb-5'>
                    <button className='bg-slate-200 rounded-full px-5 py-2 border-4 border-white w-auto flex items-center'><Unicons.UilGithub /> Github</button>
                    <button className='bg-slate-200 rounded-full px-5 py-2 border-4 border-white w-auto flex items-center'><Unicons.UilLinkedin color='#0077b5' /> LinkedIn</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;