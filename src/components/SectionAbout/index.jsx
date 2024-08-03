import { boxClasses } from "../../lib/classes";

export default function SectionAbout({sectionName}){
    return(
        <div className={`mb-5 ${boxClasses}`}>
            <h2 className="capitalize font-bold text-xl">
                {sectionName}
            </h2>
        </div>
    )
}