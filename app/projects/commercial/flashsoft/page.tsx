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
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Fflashsoft.webp?alt=media&token=8c70c794-80df-4727-be91-2ad2e1bb87a7"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}