import ShortProjectPage from "@/components/short_project_page";

export default function intakewise() {
    const title = "Intakewise";
    const why = "Because it's a great project";
    const achieved = "Achieved a lot";
    const extra = "Some extra information";
    const skills = ["Next.js", "React", "TypeScript"];
    const links = [{ name: "GitHub", href: "https://github.com" }];

    return (
        <ShortProjectPage
            title={title}
            image="/commercial/intakewise/main.png"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}