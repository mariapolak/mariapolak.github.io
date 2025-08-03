import { Metadata } from "next";
import ShortProjectPage from "@/components/short_project_page";

export const metadata: Metadata = {
  title: 'Banjo PM',
};

export default function Banjo() {
    const title = "Banjo";
    const why = "I wanted to address the challenge of realistically simulating the sound of a banjo using physical modeling techniques. Traditional digital synthesis often falls short in capturing the nuanced interactions between a banjo’s string and its drum-like membrane. My goal was to create a model that could replicate these dynamics with greater fidelity, focusing on the physical behavior of the instrument rather than relying on sampled sounds or abstract synthesis methods.";
    const achieved = " I implemented a Finite-Difference Time-Domain (FDTD) model in Python, simulating both the string and membrane components of the banjo. I derived the mathematical framework from established research and discretized the equations to fit a computational grid. The string was excited using a Hanning window, while the membrane started in a zero-state. I carefully tuned physical parameters based on real-world materials—using a thick metal string and Mylar membrane—and ensured stability through appropriate boundary conditions and grid sizing. The connection between string and membrane was modeled as a rigid link to reflect realistic energy transfer.";
    const extra = "The result was a three-second simulation of a G5 note that closely resembles the sound of a real banjo. While the model lacks the airy resonance produced by the soundbox, it successfully captures the core tonal characteristics of the instrument. The simulation also outputs separate audio files for the string and membrane, along with animations of their movements. Despite limitations in grid size and boundary conditions, the project demonstrates a promising approach to physical modeling of string instruments and opens avenues for further refinement and realism.";
    const skills = ["Python", "Physical Modeling", "Finite-Difference Schemes", "Digital Signal Processing"];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/banjo-physical-model" }];

    return (
        <ShortProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Fbanjo.webp?alt=media&token=8b45c890-f5a3-45b9-87ce-401938f8165f"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}