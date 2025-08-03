import { Metadata } from "next";
import LongProjectPage from "@/components/long_project_page";   

export const metadata: Metadata = {
  title: 'Gluphone',
};

export default function Gluphone() {
    const title = "Gluphone";
    const why = "I aimed to create a digital musical instrument that overcomes the expressive limitations of traditional instruments. Inspired by the strengths and constraints of the trombone, theremin, piano, and bowed strings, I sought to develop a device that allows continuous control over pitch and volume, while enabling polyphony and sustained notes. The challenge was to design an intuitive yet novel interface that encourages new musical gestures and offers a playful, expressive experience.";
    const achieved = "I co-developed a prototype using a Daisy Seed board, ultrasonic sensors, and elastic bands to capture gestural input. The instrument features two handles—each controlling pitch and volume respectively—along with buttons and knobs for effects and interval layering. I implemented a frequency modulation synthesis algorithm and designed a custom mapping system to translate handle distance into musical parameters. The physical design was realized through laser-cut MDF and 3D-printed components, with careful attention to ergonomics and modularity. Throughout the process, I iterated on sensor selection, ultimately modifying ultrasonic sensors for reliable gesture tracking.";
    const extra = "The final prototype successfully demonstrated the Gluphone’s potential as an expressive and engaging instrument. It allows for glissando, vibrato, and harmonic layering, offering a unique performance experience. While the first iteration revealed areas for improvement—such as pitch stability and structural weight—it validated the core interaction model and opened up exciting possibilities for future development. The project was both a technical and artistic exploration, blending hardware design, digital signal processing, and user-centered interaction.";
    const skills = ["Embedded Programming", "C/C++", "Daisy", "Audio DSP", "Real-Time Systems"];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/NIME" }];
    const images = [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Gluphone%2Fcontrols_detail.webp?alt=media&token=6fb74352-53b2-4d91-ae8d-36507d42637b",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Gluphone%2Fergonomic_test.webp?alt=media&token=3f36f6a2-4c4e-41db-8b0f-4c6988c6cbd0",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Gluphone%2Ffront_details.webp?alt=media&token=140cddcd-2989-4c38-84cc-e279c4b3dd11",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Gluphone%2Fhandle_detail.webp?alt=media&token=271c9cf4-6f5c-417b-914a-1c5e2705ce1c",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Gluphone%2Ftop_detail2.webp?alt=media&token=054fceb0-6780-4f7a-a0cc-a0ecf02e8dca", 
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Gluphone%2Fside_detail.webp?alt=media&token=e3f51038-9482-459d-9079-54204ed7905f",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Gluphone%2Ftop_detail1.webp?alt=media&token=b580e5e4-5157-49fa-b81c-94a02fdea6af"
        ];

    return (
        <LongProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Gluphone%2Fmain.webp?alt=media&token=fc2f6c22-fe00-4994-be06-232ea575e476"
            galleryImages={images}
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}