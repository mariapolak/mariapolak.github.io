import { Metadata } from "next";
import ShortProjectPage from "@/components/short_project_page";

export const metadata: Metadata = {
  title: 'ıntakewıse',
};

export default function intakewise() {
    const title = "ıntakewıse";
    const why = "I was invited by a university acquaintance to help develop a web platform for monitoring groundwater intakes. The goal was to build a system capable of aggregating and analyzing data from sensors installed in wells, tanks, and water intakes, providing users with real-time visibility into water levels and quality. One of the core challenges was ensuring the platform could promptly detect and alert users to critical changes, helping them better manage their water resources.";
    const what = "Working in a small team, I developed the platform using ASP.NET MVC, translating physics-based algorithms from Excel to C# in close collaboration with domain experts. I was responsible for major aspects of the system, including frontend development, backend alarm logic, and SQL database design. I also implemented a multi-tenant architecture, enabling different organizations to use the platform independently with separate data, users, and permissions.";
    const results = "The system is now actively used by several companies and has significantly enhanced how they monitor and manage groundwater resources. Over time, I extended the platform to support well quality classification and audit features, further improving its value to users. This project demonstrated my ability to deliver scalable, domain-specific solutions with real-world impact.";
    const skills = [
        ".NET MVC",
        "Razor Pages",
        "ASP.NET Core",
        "Entity Framework",
        "SQL Server",
        "JavaScript",
        "Microsoft Azure",
    ];
    const links = [{ name: "Website", href: "https://www.intakewise.pl/" }];

    return (
        <ShortProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Fintakewise_ui.webp?alt=media&token=695002c9-9d32-4c3b-806e-24c159a0ca98"
            why={why}
            what={what}
            results={results}
            skills={skills}
            links={links}
        />
    );
}