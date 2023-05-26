import github from '../img/github.png'

export default function Footer() {
    return (
        <div className="bg-black flex flex-col items-center w-80 rounded-b-2xl pt-3">
            <a href="https://github.com/rdschuller">
                <img src={github} alt="github logo" className='w-8 pb-3'/>            
            </a>
        </div>
    )
}