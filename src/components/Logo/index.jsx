import logo from "../../assets/logo.svg";

export default function Logo({className=null}){
    return(
        <img src={logo} alt={"Nft website"} 
        className={className || "lg:size-8 size-6"}/>
    )
}