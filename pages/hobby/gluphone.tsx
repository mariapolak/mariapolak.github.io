import ShortProjectPage from "@/components/short_project_page";

export default function Gluphone() {
    const title = "Gluphone";
    const why = "I aimed to create a digital musical instrument that overcomes the expressive limitations of traditional instruments. Inspired by the strengths and constraints of the trombone, theremin, piano, and bowed strings, I sought to develop a device that allows continuous control over pitch and volume, while enabling polyphony and sustained notes. The challenge was to design an intuitive yet novel interface that encourages new musical gestures and offers a playful, expressive experience.";
    const achieved = "I co-developed a prototype using a Daisy Seed board, ultrasonic sensors, and elastic bands to capture gestural input. The instrument features two handles—each controlling pitch and volume respectively—along with buttons and knobs for effects and interval layering. I implemented a frequency modulation synthesis algorithm and designed a custom mapping system to translate handle distance into musical parameters. The physical design was realized through laser-cut MDF and 3D-printed components, with careful attention to ergonomics and modularity. Throughout the process, I iterated on sensor selection, ultimately modifying ultrasonic sensors for reliable gesture tracking.";
    const extra = "The final prototype successfully demonstrated the Gluphone’s potential as an expressive and engaging instrument. It allows for glissando, vibrato, and harmonic layering, offering a unique performance experience. While the first iteration revealed areas for improvement—such as pitch stability and structural weight—it validated the core interaction model and opened up exciting possibilities for future development. The project was both a technical and artistic exploration, blending hardware design, digital signal processing, and user-centered interaction.";
    const skills = ["Embedded Programming", "C/C++", "Daisy", "Audio DSP", "Real-Time Systems"];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/NIME" }];

    return (
        <ShortProjectPage
            title={title}
            image="/hobby/gluphone/main.jpg"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}