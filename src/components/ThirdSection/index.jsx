import { boxClasses, flexCardContainerClasses, flexCardWidthClasses } from "../../lib/classes";
import SectionAbout from "../SectionAbout";

import wallet from "../../assets/wallet.svg";
import addNft from "../../assets/addNft.svg";
import promoteNft from "../../assets/promoteNft.svg";
import sellNft from "../../assets/sellNft.svg";
import animalNftImg from "../../assets/animalNft.svg";

export default function ThirdSection(){
    const createSellProcess = [
        {
            iconSrc: wallet,
            title: "Set up your wallet",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facere exercitationem assumenda rerum repellendus`
        },
        {
            iconSrc: addNft,
            title: "Add your NFT's",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facere exercitationem assumenda rerum repellendus`
        },
        {
            iconSrc: promoteNft,
            title: "Promote your NFT's",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facere exercitationem assumenda rerum repellendus`
        },
        {
            iconSrc: sellNft,
            title: "Sell your NFT's",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facere exercitationem assumenda rerum repellendus`
        },
    ]
    return(
        <section className="mb-16">
            <SectionAbout 
            sectionName={"Create and sell now"}/>

            <div className={flexCardContainerClasses}>
                {
                    createSellProcess
                    .map((data, index) =>(
                        <div key={index}
                        className={`${flexCardWidthClasses} flex flex-col gap-4 rounded-[20px] p-5
                        bg-gray-200`}>
                            <div>
                                <div className="bg-black p-2 rounded-lg text-white inline-block">
                                    <img src={data.iconSrc} alt={data.title} 
                                    className="size-8 text-white"/>
                                </div>
                                <h2 className="text-lg mt-3 font-semi-bold">
                                    {data.title}
                                </h2>
                            </div>

                            <div>
                                <p className="text-sm text-gray-600 font-semi-bold">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={`${boxClasses} mt-16`}>
                <div className={`w-full rounded-[20px] h-[300px] last-section 
                    bg-no-repeat bg-cover bg-center flex flex-col gap-5 text-white 
                    justify-center items-center brightness-50`}>
                        <h2 className="text-5xl font-semi-bold">
                            Build your NFT profile
                        </h2>
                        <p className="font-semi-bold text-lg">
                            Join almost <span className="text-xl">10</span>k NFT profiles on Digit !
                        </p>
                        <a href="/" className="font-medium bg-white px-6 py-2 text-black rounded-full">
                            Sign up now
                        </a>
                </div>
            </div>
        </section>
    )
}