import WorkExperience from "./WorkExperience";

function Summary() {
    return (
        <div className='p-0 sm:p-11 h-screen'>
            <div className="container mx-auto my-auto bg-gray-700 sm:rounded-xl sm:shadow sm:border p-8 m-10 space-y-4">
                <div className="bg-pink-100 p-5 rounded-xl outline outline-4  outline-white">
                    <h1 className="font-bold">WORK EXPERIENCE</h1>
                </div>
                <WorkExperience image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeiEmU8DMRbKLXDaDcutA-pX0ud0wXa_bFomS6WEhQA&s' job='WEB DEVELOPER' company='PT BALEOMOL' from="2022" until="Present" jobdesk={['Developing project with Laravel framework.', 'Merancang query baru untuk menampilkan data dan membuat query eloquent jika diperlukan.', 'Membuat fitur baru sesuai task dari project manager.', 'Memperbaiki jika ditemukan error pada project.']} />
                <div className="bg-pink-100 p-5 rounded-xl outline outline-4  outline-white">
                    <h1 className="font-bold">PROJECTS</h1>
                </div>
                <WorkExperience image='https://i0.wp.com/semaker.id/wp-content/uploads/2022/09/PT.-FOREVER-ONE-INTERNATIONAL.jpg?fit=419%2C288&ssl=1' job='WEB DEVELOPER' company='FOI - Warehouse Management System' from="2023" until="Present" jobdesk={['Developing project with CodeIgneter.', 'Merancang query baru untuk menampilkan data dan membuat query eloquent jika diperlukan.', 'Membuat fitur baru sesuai task dari project manager.', 'Memperbaiki jika ditemukan error pada project.']} />
                
            </div>
        </div>
    )
}

export default Summary;