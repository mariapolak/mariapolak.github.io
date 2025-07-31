import { ProjectDev, ProjectDevDescription, ProjectDevHeader } from "@/components/project_dev"
import Image from "next/image"
import Link from "next/link";


export default function CommercialProjects() {
    const style = {
        oneColProjectDevStyle: "col-span-2 sm:col-span-1",
        oneColProjectImgStyle: "w-full aspect-4/3 object-cover rounded-xl"
    }

    const descriptions = {
        intakewise: `A full-stack multi-tenant web app using ASP.NET MVC which allows users to monitor the state of wells and water tanks, and alerts about sudden changes. 
        The app is designed to be used by multiple companies, each with its own set of users and data. It includes features such as user management, data visualization, and real-time notifications. `,
        flashsoft: `A desktop application designed to streamline the process of analyzing PDF product cards and extracting relevant information to excel files. The application uses advanced algorithms to parse the PDF files and extract the necessary data. `,
    }

    return (
        <div className="grid sm:grid-2 md:grid-cols-2 gap-x-5 gap-y-5 w-6/7">
            <ProjectDev
                id="intakewise"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/commercial/intakewise">
                    <Image
                        className={style.oneColProjectImgStyle}
                        src="/commercial/intakewise/main.png"
                        alt="intakewise"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectDevHeader title="ıntakewıse" link="/projects/commercial/intakewise" />
                <ProjectDevDescription
                    description={descriptions.intakewise}
                    link="/projects/commercial/intakewise"
                />
            </ProjectDev>

            <ProjectDev
                id="flashsoft"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/commercial/flashsoft">
                    <Image
                        className={style.oneColProjectImgStyle}
                        src="/commercial/flashsoft/main.png"
                        alt="flashsoft"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectDevHeader title="Flashsoft" link="/projects/commercial/flashsoft" />
                <ProjectDevDescription
                    description={descriptions.flashsoft}
                    link="/projects/commercial/flashsoft"
                />
            </ProjectDev>
        </div>
    );
}