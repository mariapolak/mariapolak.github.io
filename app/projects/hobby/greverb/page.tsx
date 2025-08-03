import { Metadata } from "next";
import ShortProjectPage from "@/components/short_project_page";

export const metadata: Metadata = {
  title: 'Granular Hands',
};

export default function GReverb() {
    const title = "Granular Hands";
    const why = "This project explored how intuitive hand gestures could be used to control digital audio effects in real time, aiming to enhance expressiveness in musical performance without relying on traditional hardware controllers. The challenge was to create a system that could interpret natural hand movements and translate them into meaningful audio manipulations, all while maintaining accessibility and responsiveness. I wanted to bridge the gap between human-computer interaction and digital music creation by leveraging computer vision technologies.";
    const achieved = "I developed a system that uses a standard webcam and Google’s MediaPipe framework to detect and interpret hand gestures. I implemented geometric movement descriptors—such as displacement and rotation—to extract expressive features from the hand motion. These descriptors were then mapped to parameters of a granular delay audio effect, such as grain size, pitch, and feedback. The system was built using Python for gesture recognition and Max MSP for real-time audio processing, with communication between the two handled via the OSC protocol. I also fine-tuned the parameter mappings through iterative testing to ensure smooth and expressive control.";
    const extra = "The final result was a responsive and engaging system that allowed users to manipulate sound in real time using only their hands. The interaction felt natural and expressive, with minimal latency and a short learning curve. Whether used for precise control or freeform exploration, the system enabled a unique and enjoyable musical experience. This project not only demonstrated the potential of computer vision in music technology but also highlighted the creative possibilities of gesture-based audio interaction.";
    const skills = ["Python", "Max MSP", "MediaPipe", "Computer Vision", "Audio Processing", "OSC Protocol"];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/GranularHands" }];

    return (
        <ShortProjectPage
            title={title}
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Greverb%2Fmain.webp?alt=media&token=9e4f55e5-ce0a-436c-9ed3-3d6e4bdaf760"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}