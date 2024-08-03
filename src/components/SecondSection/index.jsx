
import snoopDogNftImg from "../../assets/snoopDogNft.svg";
import monkey2NftImg from "../../assets/monkey2Nft.svg";
import astronautNftImg from "../../assets/astronautNft.svg";
import wiperNftImg from "../../assets/wiperNft.svg";
import etherIcon from "../../assets/etherCircle.svg";

import { useState } from "react";
import { 
    boxClasses, 
    flexCardContainerClasses, 
    flexCardWidthClasses 
} from "../../lib/classes";
import SectionAbout from "../SectionAbout";


export default function SecondSection(){
    const [currentTab, setCurrentTab] = useState("All categories");
    const collectionTabs = [
        {
            name: "All categories",
            isActive: false,
        },
        {
            name: "Art",
            isActive: false,
        },
        {
            name: "Celebreties",
            isActive: false,
        },
        {
            name: "Gaming",
            isActive: false,
        },
        {
            name: "Sport",
            isActive: false,
        },
    ]

    const categoriesData = [
        {
            catName:"CyberPunk",
            imageSrc: monkey2NftImg
        },
        {
            catName:"Durolost Boll - Upper",
            imageSrc: astronautNftImg
        },
        {
            catName:"Spaca X Wiper",
            imageSrc: wiperNftImg
        },
        {
            catName:"Snoop Dogg",
            imageSrc: snoopDogNftImg
        }
    ]

    return(
        <section className="mb-16">
            <SectionAbout 
            sectionName={"Our collections"}/>

            <div className={`mb-5 ${boxClasses} font-semi-bold text-sm
            flex items-center justify-between flex-wrap gap-4 max-[620px]:me-0`}>
                <ul className="flex gap-x-3 no-scrollbar overflow-auto">
                    {
                        collectionTabs
                        .map((collectionTab, index)=>(
                            <li key={index}
                            className={`px-6 py-2 rounded-xl shrink-0 last-of-type:me-3
                            ${currentTab === collectionTab.name ? 
                            "bg-black text-white" : "bg-gray-200 text-black"}`}>
                                <button onClick={()=>{setCurrentTab(collectionTab.name)}}>
                                    {collectionTab.name}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                
                <a href="/" className="text-sm underline">
                    View more
                </a>
            </div>

            <div className={flexCardContainerClasses}>
                    {
                        categoriesData
                        .map((data, index)=>(
                            <div key={index} className={`${flexCardWidthClasses} rounded-[20px] border-2 p-2 flex flex-col gap-3`}>
                                <div className="w-full rounded-[20px]">
                                    <img src={data.imageSrc} alt={data.catName} 
                                    className="h-[200px] rounded-[20px] w-full object-cover"/>
                                </div>

                                <div className="flex justify-between flex-wrap gap-2">
                                    <p className="font-semi-bold text-sm ">
                                        {data.catName}
                                    </p>

                                    <div className="flex items-center gap-1 flex-wrap">
                                        <img src={etherIcon} alt="Ether" 
                                        className="size-6 rounded-full border border-black p-1"/>
                                        <span className="text-sm font-semi-bold">68</span>
                                    </div>
                                </div>

                                <button className="w-full border-2 text-sm font-semi-bold 
                                border-black rounded-xl py-2">
                                    Place a Bid
                                </button>
                            </div>
                        ))
                    }
            </div>
        </section>
    )
}