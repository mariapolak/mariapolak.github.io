import { Metadata } from "next";
import LongProjectPage from "@/components/long_project_page";

export const metadata: Metadata = {
  title: 'OCS-45',
};

export default function OCS_45() {
    const title = "OCS-45";
    const why = "Spectral Plugins is a company that specializes in creating high-quality audio plugins for music production. Spectral's first plugin, OCS-45, is a cassette tape simulator that emulates the sound of classic cassette tapes. The plugin is designed to add warmth and character to digital recordings, making them sound more analog and less sterile. The plugins was designed to be highly reliable, real-time, and lightweight, while delivering professional-grade audio quality.";
    const what = "I, as the company's owner, was a principal contributor and developer to the OCS-45 plugin, responsible for implementing the core audio processing algorithms and ensuring the plugin's performance and stability. I worked closely with audio producers and musicians to refine the plugin's sound and usability. I implemented sound processing algorithms using C++ and the JUCE framework, which is widely used in the audio industry for developing plugins and applications. I played a key role in system architecture design, collaborated with a UX designer to create an intuitive user interface, built universal binaries for macOS, and developed macOS installers.";
    const results = "The plugin brought initial recognition to Spectral Plugins, and it has been well-received by the audio community. The success of OCS-45 has paved the way for future plugin development. This was an important milestone in my career as a DSP developer, it introduced me to the world of audio plugin development and inspired a long lasting passion.";
    const skills = ["JUCE Framework", "C++14", "Signal Processing", "Multi-OS Development", "Product Release", "Code Review", "Microsoft Azure", "Git"];
    const links = [
        { name: "Official Website", href: "https://spectral-plugins.com/" }, 
        { name: "YouTube Demo", href: "https://www.youtube.com/watch?v=rUU5xXXdtAM&ab_channel=SpectralPlugins"},
        { name: "KVR Audio", href: "https://www.kvraudio.com/product/ocs-45-cassette-simulation-by-spectral-plugins"}];

    const galleryImages = [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F1.webp?alt=media&token=1d155c2a-1222-41d7-ba32-62c7bae0eef3",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F10.webp?alt=media&token=eb6bdc82-30d3-4154-af88-284bc6846941",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F11.webp?alt=media&token=1a87d864-6791-4ac8-a655-0537cc946160",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F12.webp?alt=media&token=95048b0b-4570-460d-a9da-99958b08881c",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F2.webp?alt=media&token=ee102bbc-126f-4a48-9c16-0cc711888c42",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F3.webp?alt=media&token=c66b724c-7c19-41f1-b6d8-8fdf795181c5",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F4.webp?alt=media&token=d2df175e-49a2-4d8d-8c41-1276379b2083",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F5.webp?alt=media&token=89de8efd-4a23-485e-9e6e-cd5a91789d27",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F6.webp?alt=media&token=59854d54-3562-4fa3-95d1-3c7b649b9f40",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F7.webp?alt=media&token=9817221a-b687-4a50-9053-0153afeda140",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F8.webp?alt=media&token=577fc6da-15c6-4aa4-be1c-135dd22661f1",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2F9.webp?alt=media&token=a8de8776-06ac-4fc9-b395-2a0c90d3b791",
    ];

    return (
        <LongProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/OCS-45%2Fplugin1.webp?alt=media&token=97399db7-c29c-4ca8-a5f6-36c75eee370e"
            why={why}
            what={what}
            results={results}
            skills={skills}
            links={links}
            galleryImages={galleryImages}
        />
    );
}