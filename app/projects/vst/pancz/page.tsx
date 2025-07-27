import { Metadata } from "next";
import LongProjectPage from "@/components/long_project_page";

export const metadata: Metadata = {
  title: 'Pancz',
};

export default function Pancz() {
    const title = "Pancz";
    const why = "After initial success with OCS-45, Spectral Plugins aimed to expand its product line. Pancz is a transient shaper plugin designed to enhance the dynamic range of audio signals, especially for drums and percussion. The goal was to create a versatile tool that could be used in various music production scenarios, providing users with the ability to shape the attack and sustain of their sounds effectively.";
    const achieved = "I played a key role in the development of Pancz, focusing on the design and implementation of the transient shaping algorithms, and working closely with the UX designer to create an intuitive user interface. Transient shaping algorithm - the heart of the project - was first heavily prototyped in Python, allowing for rapid iteration and testing of ideas. Once the algorithm was finalized, it was integrated in the core audio processing codebase using C++ and the JUCE framework. Pancz's interface introduces a unique clipping control allowing users to adjust the value by dragging a 'threshold' line on the audio waveform, providing a visual and intuitive way to control the parameter.";
    const extra = "Pancz achieved extremely positive feedback from users. Spectral Plugins received praise for its innovative approach to transient shaping and the user-friendly interface. The plugin has been featured in various audio production communities, from forums through Youtube channels ending in big commercial music production studios. ";
    const skills = ["JUCE Framework", "C++17", "Python", "Prototyping", "Signal Processing", "Multi-OS Development", "Product Release", "Code Review", "Microsoft Azure", "Git"];
    const links = [
        { name: "Official Website", href: "https://spectral-plugins.com/" }, 
        { name: "YouTube Demo", href: "https://www.youtube.com/watch?v=b1ZPGlupFGI"},
        { name: "KVR Audio", href: "https://www.kvraudio.com/product/pancz-by-spectral-plugins"}];

    const galleryImages = [
        "/plugins/pancz/1.png",
        "/plugins/pancz/2.png"
    ];

    return (
        <LongProjectPage
            title={title}
            image="/plugins/plugin2.png"
            why={why}
            achieved={achieved}
            extra={extra}
            skills={skills}
            links={links}
            galleryImages={galleryImages}
        />
    );
}