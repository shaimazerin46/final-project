

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div>
             <p className='text-center mb-5 text-sm text-[#D99904]'>{subHeading}</p>
            <div className='border-y w-60 mx-auto mb-20 border-[#E8E8E8]' >
            <p className='text-center text-2xl py-5'>{heading}</p>
            </div>
        </div>
    );
};

export default SectionTitle;