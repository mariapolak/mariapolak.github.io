import { Metadata } from "next";
import ShortProjectPage from "@/components/short_project_page";

export const metadata: Metadata = {
  title: 'PS-TSM Comparison',
};

export default function PSTSM() {
    const title = "Pitch-Shifting and Time-Stretching in Speech Data Augmentation";
    const why = "In this project, I set out to explore the limitations and potential of pitch-shifting and time-stretching (PS/TSM) algorithms in the context of speech data augmentation. Although these audio processing techniques are widely used in music and voice applications, their effectiveness and impact on machine learning models—especially for tasks like speech separation—had not been thoroughly evaluated. A central challenge was the trade-off between audio quality and computational efficiency, as many existing methods introduce perceptual artifacts or fail to scale well in real-time and data augmentation scenarios.";
    const achieved = "To address this, I implemented and evaluated a range of both classical and state-of-the-art PS/TSM algorithms, including time-domain, frequency-domain, hybrid, and deep learning-based methods. I developed a unified Python framework for consistent algorithm integration and performance benchmarking. Using both subjective listening tests and objective metrics, I assessed the naturalness, computational cost, and artifact presence of each method. I then tested the effects of these augmentations on a speech separation model, training multiple variants with different augmentation strategies to analyze their impact on model generalization and perceptual quality.";
    const extra = "The evaluation revealed that certain algorithms, notably Phase Vocoder and its improved versions, consistently achieved high perceptual quality while maintaining reasonable performance trade-offs. Surprisingly, even simple resampling methods occasionally outperformed more advanced techniques in specific learning scenarios. The findings emphasized that data augmentation is not just a preprocessing step but a modeling decision that can shape outcomes. This work not only contributed practical insights into PS/TSM effectiveness but also proposed an informed strategy for selecting augmentation methods in audio-based machine learning pipelines.";
    const skills = ["Machine Learning", "Model Design", "Research", "Python", "Audio Processing", "Data Augmentation"];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/SMC10" }];

    return (
        <ShortProjectPage
            title={title}
            image="/hobby/pstsm/main.png"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}