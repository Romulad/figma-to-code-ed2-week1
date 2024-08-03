import { 
    FirstSection,
    Footer,
    NavBar,
    SecondSection,
    ThirdSection
} from "../../components";

export default function HomePage(){
    return(
        <div className={`my-6`}>
            <NavBar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <Footer />
        </div>
    )
}