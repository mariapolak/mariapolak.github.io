import { Metadata } from "next";
import ShortProjectPage from "@/components/short_project_page";

export const metadata: Metadata = {
  title: 'Vocal Distortion',
};

export default function Roughness() {
    const title = "Vocal Distortion";
    const why = "I wanted to implement a real-time vocal distortion effect that introduces roughness to voice recordings using amplitude modulation techniques. The goal was to replicate and expand upon the method described by Gentilucci et al., which enhances vocal expressiveness by adding subharmonics and noise characteristics to otherwise clean vocal signals. This effect is particularly relevant in musical and experimental audio contexts where a raw, textured vocal quality is desired.";
    const achieved = "I developed an audio plugin using the JUCE framework, implementing the core algorithm in C++. The process involved real-time pitch detection using a custom implementation of the Yin algorithm, followed by amplitude modulation based on the detected pitch. I then applied high-pass filtering to isolate and reintroduce subharmonics into the original signal, allowing users to control parameters such as modulation depth, number of subharmonics, and filter frequency. The plugin was designed for compatibility with macOS DAWs supporting AU and VST3 formats, and includes a user-friendly interface for real-time control.";
    const extra = "The final plugin successfully produces the intended vocal roughness, as confirmed by spectral analysis and listening tests. Subharmonics are clearly visible in the frequency domain, and the effect introduces a controlled amount of noise and jitter, aligning with the characteristics of rough voice described in the literature. The Yin-based pitch detection proved highly accurate, with minimal error even in complex signals. Overall, the project demonstrates a robust and musically useful implementation of time-domain vocal distortion.";
    const skills = ["C++", "JUCE Framework",  "Digital Signal Processing", "Real-time Audio Effects"];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/vocal-distortion" }];

    return (
        <ShortProjectPage
            title={title}
            image="/hobby/roughness/main.png"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}