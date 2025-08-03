import { Metadata } from "next";
import LongProjectPage from "@/components/long_project_page";

export const metadata: Metadata = {
  title: 'Pancz',
};

export default function Pancz() {
    const title = "Pancz";
    const why = "After initial success with OCS-45, Spectral Plugins aimed to expand its product line. Pancz is a transient shaper plugin designed to enhance the dynamic range of audio signals, especially for drums and percussion. The goal was to create a versatile tool that could be used in various music production scenarios, providing users with the ability to shape the attack and sustain of their sounds effectively.";
    const what = "I played a key role in the development of Pancz, focusing on the design and implementation of the transient shaping algorithms, and working closely with the UX designer to create an intuitive user interface. Transient shaping algorithm - the heart of the project - was first heavily prototyped in Python, allowing for rapid iteration and testing of ideas. Once the algorithm was finalized, it was integrated in the core audio processing codebase using C++ and the JUCE framework. Pancz's interface introduces a unique clipping control allowing users to adjust the value by dragging a 'threshold' line on the audio waveform, providing a visual and intuitive way to control the parameter.";
    const results = "Pancz achieved extremely positive feedback from users. Spectral Plugins received praise for its innovative approach to transient shaping and the user-friendly interface. The plugin has been featured in various audio production communities, from forums through Youtube channels ending in big commercial music production studios. ";
    const skills = ["JUCE Framework", "C++17", "Python", "Prototyping", "Signal Processing", "Multi-OS Development", "Product Release", "Code Review", "Microsoft Azure", "Git"];
    const links = [
        { name: "Official Website", href: "https://spectral-plugins.com/" }, 
        { name: "YouTube Demo", href: "https://www.youtube.com/watch?v=b1ZPGlupFGI"},
        { name: "KVR Audio", href: "https://www.kvraudio.com/product/pancz-by-spectral-plugins"}];

    const galleryImages = [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Pancz%2F1.webp?alt=media&token=dab1c506-53f6-4aaf-b1de-fa593abe50e7",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Pancz%2F2.webp?alt=media&token=439cf8b7-6d1f-4e92-a4d3-f8f10f73d57c"
    ];

    return (
        <LongProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Pancz%2Fplugin2.webp?alt=media&token=d6f10f40-1827-4eac-a6fb-e853aeabbec6"
            why={why}
            what={what}
            results={results}
            skills={skills}
            links={links}
            galleryImages={galleryImages}
        />
    );
}