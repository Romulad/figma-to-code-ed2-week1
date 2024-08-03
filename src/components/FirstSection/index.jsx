
import monkeyImg from "../../assets/monkeyNft.svg";
import aiNftImg from "../../assets/aiNft.svg";
import rightArrow from "../../assets/rightArrow.svg";
import circle from "../../assets/circle.svg";

export default function FirstSection(){
    return(
        <div className="flex gap-y-4 gap-x-1 mt-24 mb-16 flex-wrap min-[868px]:flex-nowrap">
            <div className="">
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

            <div className="flex gap-3 justify-center w-full min-[868px]:w-auto 
            overflow-hidden">
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
    )
}