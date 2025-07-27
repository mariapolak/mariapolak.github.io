import { Metadata } from "next";
import LongProjectPage from "@/components/long_project_page";

export const metadata: Metadata = {
  title: 'Spacer',
};

export default function Spacer() {
    const title = "Spacer";
    const why = "After delivering of two successful plugins, Spectral wanted to extend their product line with a new plugin that offers a set of special effects. Spacer is a powerful audio plugin that consists of 6 unique spacial modules: Reverb, Convolution, Grain Reverb, Delay, Grain Delay, and Utilities. The goal was to create a versatile tool that could be used in various music production scenarios, providing users with the ability to shape the spatial characteristics of their sounds effectively.";
    const achieved = "As a principal audio developer, I implemented the core audio processing algorithms of Spacer. I have worked extensively on the design of the artificial reverb, convolution, and pitch shifting used in both granular effects. In collaboration with music producers and through many prototyping iterations I have developed high quality audio effects. The biggest challenge was to ensure that the plugin is lightweight and real-time. I have gained knowledge of optimization techniques, compiler settings, and profiling tools to achieve this goal.";
    const extra = "Spacer was by far the most complex plugin I have worked on. It introduced me to advanced audio processing algorithms and techniques, such as granular synthesis and convolution reverb. During the development, I have extensively researched audio algorithms, designed equations for coefficients generation, and experimented with various approaches to achieve the desired sound quality.";
    const skills = ["JUCE Framework", "C++17", "Python", "Prototyping", "Optimization", "C++ Compiler", "Signal Processing", "Multi-OS Development", "Product Release", "Code Review", "Microsoft Azure", "Git"];
    const links = [
        { name: "Official Website", href: "https://spectral-plugins.com/" }, 
        { name: "YouTube Demo", href: "https://www.youtube.com/watch?v=QtNnskjqnQ8&t=853s&ab_channel=SpectralPlugins"},
        { name: "KVR Audio", href: "https://www.kvraudio.com/product/spacer-by-spectral-plugins"}];

    const galleryImages = [
        "/plugins/spacer/1.png",
        "/plugins/spacer/2.png",
        "/plugins/spacer/3.png",
        "/plugins/spacer/4.png",
        "/plugins/spacer/5.png",
        "/plugins/spacer/6.png"
    ];

    return (
        <LongProjectPage
            title={title}
            image="/plugins/plugin3.png"
            why={why}
            achieved={achieved}
            extra={extra}
            skills={skills}
            links={links}
            galleryImages={galleryImages}
        />
    );
}