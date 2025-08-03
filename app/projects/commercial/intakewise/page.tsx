import { Metadata } from "next";
import ShortProjectPage from "@/components/short_project_page";

export const metadata: Metadata = {
  title: 'ıntakewıse',
};

export default function intakewise() {
    const title = "ıntakewıse";
    const why = "Because it's a great project";
    const achieved = "Achieved a lot";
    const extra = "Some extra information";
    const skills = ["Next.js", "React", "TypeScript"];
    const links = [{ name: "GitHub", href: "https://github.com" }];

    return (
        <ShortProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Fintakewise.webp?alt=media&token=fcbe5414-0949-4a42-b5c1-82a16f3ea932"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}