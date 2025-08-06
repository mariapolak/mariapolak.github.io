import { Metadata } from "next";
import LongProjectPage from "@/components/long_project_page";

export const metadata: Metadata = {
  title: 'Spacer',
};

export default function Spacer() {
    const title = "Spacer";
    const why = "After delivering of two successful plugins, Spectral wanted to extend their product line with a new plugin that offers a set of special effects. Spacer is a powerful audio plugin that consists of 6 unique spacial modules: Reverb, Convolution, Grain Reverb, Delay, Grain Delay, and Utilities. The goal was to create a versatile tool that could be used in various music production scenarios, providing users with the ability to shape the spatial characteristics of their sounds effectively.";
    const what = "As a principal audio developer, I implemented the core audio processing algorithms of Spacer. I have worked extensively on the design of the artificial reverb, convolution, and pitch shifting used in both granular effects. In collaboration with music producers and through many prototyping iterations I have developed high quality audio effects. The biggest challenge was to ensure that the plugin is lightweight and real-time. I have gained knowledge of optimization techniques, compiler settings, and profiling tools to achieve this goal.";
    const results = "Spacer was by far the most complex plugin I have worked on. It introduced me to advanced audio processing algorithms and techniques, such as granular synthesis and convolution reverb. During the development, I have extensively researched audio algorithms, designed equations for coefficients generation, and experimented with various approaches to achieve the desired sound quality.";
    const skills = ["JUCE Framework", "C++17", "Python", "Prototyping", "Optimization", "C++ Compiler", "Signal Processing", "Multi-OS Development", "Product Release", "Code Review", "Microsoft Azure", "Git"];
    const links = [
        { name: "Official Website", href: "https://spectral-plugins.com/" }, 
        { name: "YouTube Demo", href: "https://www.youtube.com/watch?v=QtNnskjqnQ8&t=853s&ab_channel=SpectralPlugins"},
        { name: "KVR Audio", href: "https://www.kvraudio.com/product/spacer-by-spectral-plugins"}];

    const galleryImages = [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2F1.webp?alt=media&token=5f931b67-9c4e-48a4-bce9-2d280b35294b",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2F2.webp?alt=media&token=a68821e7-2dd5-48d4-830c-18ec7fe3d6db",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2F5.webp?alt=media&token=f669487f-9ea3-4284-9d54-fd6763b821b1",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2F6.webp?alt=media&token=f564d379-3983-47d0-bbd6-ffa2edaf2620",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2Fs2.webp?alt=media&token=c2298c70-d754-4c87-a6aa-3d088aa4ebb9",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2Fs3.webp?alt=media&token=4c8c0a9c-acb0-4391-b28b-cf7dee586455",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2Fs4.webp?alt=media&token=78cd4bcb-e634-46f4-83cf-f51445af24ad",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2Fs5.webp?alt=media&token=6471cd5c-32bd-4a0a-8939-664b94a45522",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2Fs6.webp?alt=media&token=e71e1ff8-cded-4486-9189-17431ee1d6a3",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2Fs1.webp?alt=media&token=bddcb3ef-4a47-4478-ae31-ee8c7f19e791",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2Fplugin3.webp?alt=media&token=2635ce2b-1e6c-4ac1-a2ec-4d75c6815091",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2F4.webp?alt=media&token=9e03120a-ebd9-481b-b6ae-e327cd976741",
    ];

    return (
        <LongProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Spacer%2F3.webp?alt=media&token=3abb6505-330e-4b38-9d92-a381a3690d32"
            why={why}
            what={what}
            results={results}
            skills={skills}
            links={links}
            galleryImages={galleryImages}
        />
    );
}