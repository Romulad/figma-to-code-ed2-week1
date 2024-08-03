
import monkeyImg from "../../assets/monkeyNft.svg";
import aiNftImg from "../../assets/aiNft.svg";
import rightArrow from "../../assets/rightArrow.svg";
import circle from "../../assets/circle.svg";

export default function FirstSection(){
    return(
        <section>
            <div className={`flex gap-y-4 gap-x-1 mt-24 mb-16 flex-wrap lg:flex-nowrap
            `}>
                <div className="ms-5 sm:ms-10 lg:ms-16 xl:ms-28 me-5 sm:me-10 md:me-0">
                    <h1 className="text-7xl mb-8 max-w-[500px]">
                        See the NFT new world
                    </h1>
                    <p className="max-w-[400px] font-medium text-gray-700 mb-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit. 
                    </p>

                    <div className="flex font-semi-bold items-center gap-3 text-sm">
                        <span>Discover now</span>
                        <button className="border border-black rounded-full p-2">
                            <img src={rightArrow} alt="Arrow right"/>
                        </button>
                    </div>
                </div>

                <div className="flex gap-3 w-full lg:w-auto lg:me-16 xl:me-28
                overflow-hidden ms-5 min-[400px]:ms-0 min-[400px]:justify-center">
                    <div className="shrink-0">
                        <div className="text-end">
                            <img src={circle} alt="Circle" className="size-24 inline-block"/>
                        </div>
                        <div className="">
                            <div className="h-[270px] w-[170px] rounded-full">
                                <img src={aiNftImg} alt="Face Nft" 
                                className="rounded-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-[270px] w-[170px] bg-red-500 rounded-full
                    shrink-0">
                        <img src={monkeyImg} alt="Monkey Nft" 
                        className="rounded-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}