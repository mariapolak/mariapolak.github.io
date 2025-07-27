import ShortProjectPage from "@/components/short_project_page";

export default function MLME() {
    const title = "CNN-based Instrument Recognition";
    const why = "I tackled the challenge of identifying prominent musical instruments in polyphonic audio using a machine learning approach. Traditional DSP methods often fall short in such complex auditory environments, so I designed a convolutional neural network (CNN) to classify instruments based on spectrogram representations. The goal was to create a lightweight, efficient model suitable for real-time applications, such as mobile apps or embedded systems, where fast inference and low memory usage are critical.";
    const achieved = "I used the IRMAS dataset, preprocessing audio into spectrogram images and applying one-hot encoding to labels. I experimented with two CNN architectures—one simple and one advanced—ultimately selecting the simpler model due to its superior performance. I incorporated data augmentation techniques like translation and contrast adjustment to improve generalization and mitigate overfitting. The model was trained using both Adam and SGD optimizers, with the best results achieved using SGD over 300 epochs. Evaluation metrics included accuracy, F1 score, precision, and recall, and I also tested the model on a custom dataset to assess real-world performance.";
    const extra = "The final model achieved over 56% accuracy and demonstrated consistent performance across multiple evaluation sets. It processed batches of 32 spectrograms in just 40 milliseconds, confirming its suitability for real-time use. This project not only validated the effectiveness of a compact CNN for instrument recognition but also highlighted the potential for deploying such models in edge computing scenarios. The system opens up possibilities for interactive music applications, educational tools, and audio analysis platforms.";
    const skills = ["Python", "TensorFlow", "Keras", "CNNs", "Machine Learning"];
    const links = [{ name: "GitHub", href: "https://github.com/mariapolak/MLME" }];

    return (
        <ShortProjectPage
            title={title}
            image="/hobby/mlme/main.png"
            why={why}
            what={achieved}
            results={extra}
            skills={skills}
            links={links}
        />
    );
}