import { Metadata } from "next";
import ShortProjectPage from "@/components/short_project_page";

export const metadata: Metadata = {
  title: 'Flashsoft',
};

export default function Flashsoft() {
    const title = "Flashsoft";
    const why = "Because it's a great project";
    const achieved = "Achieved a lot";
    const extra = "Some extra information";
    const skills = ["Next.js", "React", "TypeScript"];
    const links = [{ name: "GitHub", href: "https://github.com" }];

    return (
        <ShortProjectPage
            title={title}
            image="/commercial/flashsoft/main.png"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}