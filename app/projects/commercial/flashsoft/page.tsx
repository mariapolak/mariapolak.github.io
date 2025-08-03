import { Metadata } from "next";
import ShortProjectPage from "@/components/short_project_page";

export const metadata: Metadata = {
  title: 'Flashsoft',
};

export default function Flashsoft() {
    const title = "Flashsoft";
    const why = "I addressed a challenge faced by a client who regularly processes large volumes of PDF documents containing detailed product and material specifications. These PDFs, typically received in batches, contained essential information about products' inflammability that the client needed to extract and consolidate into a structured Excel format. The manual process was time-consuming, error-prone, and inefficient, especially given the need to maintain accuracy across diverse document layouts and ensure compatibility with both Windows and macOS platforms.";
    const what = "I designed and developed a cross-platform desktop application using JavaFX, which allowed for a consistent and native user experience across operating systems. Leveraging Java's libraries for document parsing and Excel generation, I built a robust pipeline that sequentially processed PDF files, extracted relevant data fields, and compiled the output into a single Excel workbook. The interface supported intuitive batch uploads, progress tracking, and error feedback, ensuring transparency and control for end users. Where needed, I implemented pattern recognition and rule-based logic to accurately map semi-structured text into predefined schema formats.";
    const results = "As a result, the client was able to automate a previously manual workflow, significantly reducing processing time and minimizing human error. The solution provided a scalable and maintainable framework that could adapt to new document formats or business rules in the future. The deployment of a native desktop app ensured complete offline capability, maintaining data privacy while enhancing operational efficiency for users on both macOS and Windows environments.";
    const skills = [
        "Java 8",
        "JavaFX",
        "PDF and Excel Processing",
    ];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/" }];

    return (
        <ShortProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Fflashsoft.webp?alt=media&token=8c70c794-80df-4727-be91-2ad2e1bb87a7"
            why={why}
            what={what}
            results={results}
            skills={skills}
            links={links}
        />
    );
}