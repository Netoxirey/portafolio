
function Footer() {
    return (
        <footer className='w-full mt-96 py-20 bg-[#4ca8cd]'>
            <div className='container-content flex justify-between'>
                <div>
                    <p className='text-2xl font-bold'>Created By Ernesto Serna</p>
                    <p>@2023. All Rights Reserved</p>
                </div>
                <div className='flex flex-col items-center text-lg'>
                    <p>Email: <span className='font-bold'>ernestoserna94<br />@gmail.com</span></p>
                    <p>Phone: <span className='font-bold'>+52 834 254 7065</span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
