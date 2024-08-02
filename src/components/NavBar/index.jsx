import { useRef } from "react";

import {
    Logo
} from "../../components";
import openMobileNav from "../../assets/mobileOpenNav.svg";
import closeMobileNav from "../../assets/mobileCloseNav.svg";

export default function NavBar(){
    const mobileNavRef = useRef()

    function toggleMobileNavBar(show){
        if(show){
            mobileNavRef.current.classList.remove('-top-full');
            mobileNavRef.current.classList.add('top-0') 
        }else{
            mobileNavRef.current.classList.add('-top-full');
            mobileNavRef.current.classList.remove('top-0')
        }
    }

    const headUrlList = [
        "Home", "Top sales", "Collections", "Our blog", "About us"
    ].map((headLinkName, index)=>(
        <li key={`${index}${headLinkName}`}>
            <a href="/">
                {headLinkName}
            </a>
        </li>
    ))

    const headActionLink = (
        <>
            <a href="/">
                Sign up
            </a>
            <div className="h-8 bg-black w-[2px]">
            </div>
            <a href="/" className="bg-black text-white px-5 py-2 rounded-full">
                Connect Wallet
            </a>
        </>
    )
    

    return(
        <nav className="flex justify-between items-center font-semi-bold 
        text-sm mb-5">
            <a href="/">
                <Logo />
            </a>

            <ul className="hidden lg:flex gap-x-5">
                {headUrlList}
            </ul>

            <div className="hidden lg:flex gap-x-5 items-center">
                {headActionLink}
            </div>

            <div className="lg:hidden fixed -top-full left-0 w-full h-full bg-gray-50
            min-[350px]:px-8 sm:px-16 px-5 pt-6 transition-all duration-500 overflow-auto" 
            ref={mobileNavRef}>
                
                <div className="flex justify-end">
                    <button className="p-2 bg-slate-200 rounded-lg mb-16"
                    onClick={()=>{toggleMobileNavBar(false)}}>
                        <img src={closeMobileNav} alt="Close Navbar" className="size-5"/>
                    </button>
                </div>

                <ul className="block *:pb-6">
                    {headUrlList}
                </ul>

                <div className="flex gap-x-5 items-center mt-10">
                    {headActionLink}
                </div>
            </div>

            <button className="lg:hidden p-2 bg-slate-200 rounded-lg"
            onClick={()=>{toggleMobileNavBar(true)}}>
                <img src={openMobileNav} alt="Open Navbar" className="size-5"/>
            </button>
        </nav>
    )
}