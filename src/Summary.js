import WorkExperience from "./WorkExperience";
import * as Unicons from '@iconscout/react-unicons';

function Summary() {
    return (
        <div className='p-0 sm:p-11 h-auto bg-gray-700 md:bg-transparent'>
            <div className="container mx-auto my-auto bg-gray-700 sm:rounded-xl sm:shadow p-8 m-10 space-y-4">
                <div className="bg-gray-500 p-5 rounded-full border-4 border-white">
                    <h1 className="font-bold text-center">WORK EXPERIENCE</h1>
                </div>
                <WorkExperience image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeiEmU8DMRbKLXDaDcutA-pX0ud0wXa_bFomS6WEhQA&s' job='WEB DEVELOPER' company='PT BALEOMOL' from="2022" until="Present" jobdesk={['Developing project with Laravel framework.', 'Merancang query baru untuk menampilkan data dan membuat query eloquent jika diperlukan.', 'Membuat fitur baru sesuai task dari project manager.', 'Memperbaiki jika ditemukan error pada project.']} />
            </div>
        </div>
    )
}

export default Summary;