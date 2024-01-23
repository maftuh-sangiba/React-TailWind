export default function WorkExperience(props) {
    const { image, job, company, from, until, jobdesk } = props;
    let jobdeskElement = jobdesk.map((list, i) => {
        return <li key={i}>- {list}</li>
    })

    return (
        <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="lg:w-1/6 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="company" />
                <div className="lg:w-5/6 pt-6 md:p-8 text-center md:text-left space-y-4">
                    <p className="text-sm text-gray-700">{job}</p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{company} <span className="text-sm font-normal text-gray-600 italic">( {from} - {until} )</span></div>
                    <ul className="list-none text-gray-700 text-base text-left">
                        {jobdeskElement}
                    </ul>
                </div>
            </div>
        </div>
    );
}