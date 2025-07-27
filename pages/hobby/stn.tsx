import ShortProjectPage from "@/components/short_project_page";

export default function STN() {
    const title = "STN-Based Pitch-Shifting";
    const why = "I set out to design and implement a low-latency pitch-shifting audio plugin capable of real-time performance. Traditional pitch-shifting methods often face a trade-off between latency and quality, particularly in online applications. Many frequency-domain (FD) algorithms, while high in fidelity, suffer from transient smearing and phasiness—issues that degrade the naturalness of the sound. My goal was to overcome these challenges by applying STN (Sines, Transients, Noise) decomposition and using specialized processing strategies for each component to enhance real-time pitch-shifting quality.";
    const achieved = "I developed a pitch-shifting pipeline that integrates fuzzy STN decomposition with state-of-the-art processing techniques like Noise Morphing and the Vase-Phocoder. Each component—sines, transients, and noise—was handled independently to reduce artifacts and optimize pitch clarity. I implemented the system as a VST plugin, adapting offline algorithms for real-time constraints by modifying median filtering and frame interpolation mechanisms. To assess the system, I conducted a blind listening test comparing it to both commercial and open-source solutions, using a MUSHRA-inspired setup and qualitative interviews for feedback.";
    const extra = "The evaluation showed that while the plugin did not match the perceived quality of commercial alternatives, it performed comparably to open-source solutions and revealed potential for creative or genre-specific applications. Participant feedback suggested that some perceived artifacts were even desirable in specific musical contexts. These findings point to unique opportunities for artistic use and further development. Future improvements will focus on enhancing decomposition quality, optimizing computational efficiency, and exploring higher pitch-shifting ranges where the system may outperform competitors. The paper detailing this work was published in Conference Proceedings of the 2025 DAS | DAGA Conference";
    const skills = ["C++", "Python", "Audio Processing", "Evaluation", "JUCE Framework", "Prototyping"];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/STN-based-Pitch-Shifting" }, { name: "Publication", href: "https://doi.org/10.71568/dasdaga2025.635"}];

    return (
        <ShortProjectPage
            title={title}
            image="/hobby/stn/main.png"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}