import { 
    FirstSection,
    Footer,
    NavBar
} from "../../components";


export default function HomePage(){
    return(
        <div className="my-6 mx-5 sm:mx-10 lg:mx-16 xl:mx-28">
            <NavBar />
            <FirstSection />
            <Footer />
        </div>
    )
}