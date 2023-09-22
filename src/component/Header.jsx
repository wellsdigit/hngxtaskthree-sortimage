import React from 'react'

function Header({nameImg}) {
    const logoutHandler = (e) =>{
        sessionStorage.removeItem('token');
        window.location.reload();
    }
  return (
    <header className=''>
        <nav className='shadow-xl shadow-[#00000018] flex items-center justify-between p-5 px-8 md:px-16'>
            <div className="navbar-brand text-lg md:text-2xl font-black flex items-center gap-1">
                <div className='bg-blue-700 p-1 text-white rounded-md'>
                    IMG
                </div>
                <p>Gallery</p>
            </div>
            <div className='flex items-center'>
                <a href="#" onClick={logoutHandler} className='flex font-semibold items-center gap-2 justify-center border-2 py-1 ps-1.5 pe-3 rounded-full'>
                    <span className='flex items-center text-lg font-bold justify-center w-9 h-9 text-white rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% uppercase'>{nameImg}</span>
                    Logout
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Header;