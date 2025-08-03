import { Metadata } from "next";
import LongProjectPage from "@/components/long_project_page";

export const metadata: Metadata = {
  title: 'STN-Based Pitch-Shifting',
};

export default function STN() {
    const title = "STN-Based Pitch-Shifting";
    const why = "I set out to design and implement a low-latency pitch-shifting audio plugin capable of real-time performance. Traditional pitch-shifting methods often face a trade-off between latency and quality, particularly in online applications. Many frequency-domain (FD) algorithms, while high in fidelity, suffer from transient smearing and phasiness—issues that degrade the naturalness of the sound. My goal was to overcome these challenges by applying STN (Sines, Transients, Noise) decomposition and using specialized processing strategies for each component to enhance real-time pitch-shifting quality.";
    const achieved = "I developed a pitch-shifting pipeline that integrates fuzzy STN decomposition with state-of-the-art processing techniques like Noise Morphing and the Vase-Phocoder. Each component—sines, transients, and noise—was handled independently to reduce artifacts and optimize pitch clarity. I implemented the system as a VST plugin, adapting offline algorithms for real-time constraints by modifying median filtering and frame interpolation mechanisms. To assess the system, I conducted a blind listening test comparing it to both commercial and open-source solutions, using a MUSHRA-inspired setup and qualitative interviews for feedback.";
    const extra = "The evaluation showed that while the plugin did not match the perceived quality of commercial alternatives, it performed comparably to open-source solutions and revealed potential for creative or genre-specific applications. Participant feedback suggested that some perceived artifacts were even desirable in specific musical contexts. These findings point to unique opportunities for artistic use and further development. Future improvements will focus on enhancing decomposition quality, optimizing computational efficiency, and exploring higher pitch-shifting ranges where the system may outperform competitors. The paper detailing this work was published in Conference Proceedings of the 2025 DAS | DAGA Conference";
    const skills = ["C++", "Python", "Audio Processing", "Evaluation", "JUCE Framework", "Prototyping"];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/STN-based-Pitch-Shifting" }, { name: "Publication", href: "https://doi.org/10.71568/dasdaga2025.635"}];
    const images = [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2FSoft%20Spot.webp?alt=media&token=c15ea4c8-80f4-4e08-8136-53c39d7783ee",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2FDrum%20Loop.webp?alt=media&token=a5df4e14-6792-4cd5-aa25-fb14943983c0",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2FGuitar%20Loop.webp?alt=media&token=025b26b7-563a-41bb-962c-8b5dbbd37d1f",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2FAudio%20Separation.webp?alt=media&token=9ac27f14-69e4-4b08-a5cc-924255eeb7d7",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2FFD.webp?alt=media&token=e1a5b894-9a45-4a89-ba5f-38cf48e354b6",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2FMOS%20Results.webp?alt=media&token=9fec910c-7d18-4aab-aace-d5fc1c3baf17",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2FOLA.webp?alt=media&token=2cd6c271-a8e4-429b-9e9e-40ff2faecf58",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2FSTN%20Pitch%20Shifting.webp?alt=media&token=bd505737-6d8e-4219-92c6-c2bc95bd4b5a"
    ]

    return (
        <LongProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2Fmain.webp?alt=media&token=bb7e7176-211f-4834-9c45-0d935b7ca4e9"
            galleryImages={images}
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}