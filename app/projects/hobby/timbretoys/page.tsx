import { Metadata } from "next";
import ShortProjectPage from "@/components/short_project_page";

export const metadata: Metadata = {
  title: 'Timbre Toys',
};

export default function TimbreToys() {
    const title = "Timbre Toys";
    const why = "For the Timbre Tools Hackathon 2024, my team and I developed Timbre Toys, an interactive audio tool designed to manipulate timbre using visual input from a webcam. The core idea was to treat timbre as a tangible object—something users could shape and play with in real time. We were inspired by the concept of sonic interaction and live performance, aiming to create a system where visual elements like color and brightness could directly influence the sound, making the experience both intuitive and performative";
    const achieved = "I contributed to building a real-time system that captures video input, extracts visual features, and maps them to audio effects. We used a custom JUCE plugin to process webcam frames, extracting features such as color presence, brightness, and texture (crunchiness). These features were then transformed using FFT and convolved with audio input to create dynamic, unpredictable sound textures. The plugin communicated with a MaxMSP patch, where the extracted features controlled various audio effects like reverb, pitch shifting, and comb filtering. This allowed for a seamless integration of visual and sonic elements.";
    const extra = "The result was a playful and expressive tool that responded to movement and color in the environment, turning everyday visuals into rich sonic textures. Despite the time constraints of the hackathon, we successfully implemented a working prototype that demonstrated the potential of visual-audio interaction. The project was well-received for its creativity and technical execution, and it opened up exciting possibilities for future exploration in audiovisual performance tools.";
    const skills = ["C++",
        "JUCE Framework",
        "Python",
        "Creative Exploration"];
    const links = [
        { name: "GitHub", href: "https://github.com/SPIS-Girls/timbre-tools" },
        { name: "Video", href: "https://www.youtube.com/watch?v=V_v8tUOVORY&ab_channel=LevinSch" }
    ];

    return (
        <ShortProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Ftimbretoys.webp?alt=media&token=42d42ce5-735f-4439-ad95-943c03cb140d"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}