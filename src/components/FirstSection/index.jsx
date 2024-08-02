
import monkeyImg from "../../assets/monkeyNft.svg";
import aiNftImg from "../../assets/aiNft.svg";

export default function FirstSection(){
    return(
        <div className="flex gap-4 mt-24 mb-16 justify-between flex-wrap md:flex-nowrap">
            <div className="grow">
                <h1 className="text-6xl mb-8">
                    See the NFT new world
                </h1>
                <p className="max-w-[400px] font-medium text-gray-700 mb-6 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quos, ipsum
                </p>

                <div className="flex font-semi-bold items-center gap-3 text-sm">
                    <span>Discover now</span>
                    <button className="border border-black rounded-full p-4">
                    </button>
                </div>
            </div>

            <div className="flex gap-3">
                <div>
                    <div className="pt-24">
                        <div className="h-[250px] w-[150px] rounded-full">
                            <img src={aiNftImg} alt="Face Nft" 
                            className="rounded-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="h-[250px] w-[150px] bg-red-500 rounded-full
                ">
                    <img src={monkeyImg} alt="Monkey Nft" 
                    className="rounded-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}