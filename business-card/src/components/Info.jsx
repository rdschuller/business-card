import rene from '../img/rene.jpg'
import email from '../img/mail-svgrepo-com.svg'
import linkedin from '../img/logo-linkedin.svg'

export default function Info() {
    return (
        <div className="bg-back flex flex-col items-center w-80 rounded-t-2xl">
            <img src={rene} alt="Picture of the author as an old man" className='w-80 rounded-t-2xl mb-5'/>
            <h1 className="text-2xl font-inter text-white mb-0.5 font-bold">René Schuller</h1>
            <h2 className="text-sm text-role">Fullstack Developer</h2>
            <h3 className="text-xs text-head mb-2">reneschuller.com</h3>
            <div className='flex justify-evenly w-full'>
                <div className='bg-white flex items-center gap-2 px-3.5 py-1 rounded-lg w-28'>
                    <img src={email} alt="Email icon" className='w-4'/>
                    <a href='mailto:renedschuller@gmail.com'>Email</a>
                </div>
                <div className='bg-link flex items-center gap-2 px-3.5 py-1 rounded-lg w-28'>
                    <img src={linkedin} alt="LinkedIn Logo" className='w-4'/>
                    <a href='https://www.linkedin.com/in/ren%C3%A9-schuller-817208265/' rel='noreferrer' target='_blank' className='text-white'>LinkedIn</a>
                </div>
                
            </div>
        </div>
    )
}