import Logo from "../Logo"


export default function Footer(){
    return(
        <footer>
            <div className="pb-2 border-b mb-6">
                <Logo />
            </div>

            <div className="flex flex-wrap gap-5 justify-between items-center">
                <div>
                    <p className="font-semi-bold capitalize text-lg">
                        Create explore & collect digital nfts
                    </p>
                </div>

                <ul className="flex gap-4 text-sm font-medium justify-center min-[360px]:w-auto w-full">
                    {
                        ['Privacy', "Terms & Conditions", "About Us"]
                        .map((footerLinkName, index)=>(
                            <li key={index}>
                                <a href="/">
                                    {footerLinkName}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}