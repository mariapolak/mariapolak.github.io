import { ProjectUni, ProjectUniDescription, ProjectUniHeader } from "@/components/project_uni"
import Image from "next/image";
import Link from "next/link";

export default function HobbyProjects() {
    const style = {
        oneColProjectDevStyle: "col-span-2 sm:col-span-1",
        oneColProjectImgStyle: "w-full aspect-4/3 object-cover rounded-xl"
    }

    const descriptions = {
        pstsm: `Comprehensive evaluation of PS and TSM algorithms, focusing on their perceptual quality, computational performance, and impact on machine learning tasks, particularly speech separation. `,
        stn: `A novel real-time pitch-shifting algorithm designed for complex audio signals. The project integrates fuzzy STN decomposition with specialized processing pipelines for sines, transient, and noise components. `,
        greverb: `Hand movement controlled grain delay effect. The system leverages MediaPipe's real-time hand tracking capabilities, the system interprets hand movements and maps geometric descriptors to manipulate audio effect parameters. `,
        banjo: `A finite difference physical model of a banjo. Implemented in Python, it uses the string equation to simulate the string's vibrations and the membrane's response, creating a realistic banjo sound. `,
        timbretoys: `A timbre manipulation tool that allows the users to interact with a timbre the same way they would interact with a physical object. The main inspiration behind the project was a sonic interaction and a live performance. `,
        gluphone: `A new digital musical instrument - the Gluphone. The instrument design tries to overcome limitations of classical instruments, by providing continuous control over pitch and volume. `,
        roughness: `A real-time implementation of a vocal distortion and roughness effect, described in detail in a paper by Gentilucci, Marta, Luc Ardaillon, and Marco Liuni. The effect was implemented as an audio effect plugin using the JUCE framework. `,
        emotions: `Experiment which compares emotions induced through music composed by two different types of composers, namely AI and human. The experiment was conducted in a form of an online survey and the participants were recruited through social-media. `,
        mlme: `A lightweight CNN for musical instrument recognition in polyphonic audio signals. Utilizing the IRMAS dataset, a subset of seven instruments was selected for classification using spectrogram-based image inputs. `
    }

    return (
        <div className="grid sm:grid-2 md:grid-cols-3 gap-x-5 gap-y-5 w-6/7">
            {/* PS-TSM */}
            <ProjectUni
                id="PSTSM"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/hobby/pstsm">
                    <Image
                        placeholder="blur"
                        blurDataURL="/blur.webp"
                        className={style.oneColProjectImgStyle}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Fpstsm.webp?alt=media&token=4b80fef8-d7f5-4bce-94b0-adfa4789d539"
                        alt="pstsm"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectUniHeader title="PS and TSM in Speech Data Augmentation" link="/projects/hobby/pstsm" />
                <ProjectUniDescription
                    description={descriptions.pstsm}
                    link="/projects/hobby/pstsm"
                />

            </ProjectUni>
            {/* STN */}
            <ProjectUni
                id="STN-PS"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/hobby/stn">
                    <Image
                        placeholder="blur"
                        blurDataURL="/blur.webp"
                        className={style.oneColProjectImgStyle}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/STN%2Fmain.webp?alt=media&token=bb7e7176-211f-4834-9c45-0d935b7ca4e9"
                        alt="stn"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectUniHeader title="STN-based Pitch-Shifting" link="/projects/hobby/stn" />
                <ProjectUniDescription
                    description={descriptions.stn}
                    link="/projects/hobby/stn"
                />

            </ProjectUni>
            {/* Hand-Controlled GReverb */}
            <ProjectUni
                id="Hand-GReverb"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/hobby/greverb">
                    <Image
                        placeholder="blur"
                        blurDataURL="/blur.webp"
                        className={style.oneColProjectImgStyle}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Greverb%2FHandDetection.webp?alt=media&token=4a70d963-a02d-443c-8175-b330bacda771"
                        alt="greverb"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectUniHeader title="Granular Hands" link="/projects/hobby/greverb" />
                <ProjectUniDescription
                    description={descriptions.greverb}
                    link="/projects/hobby/greverb"
                />

            </ProjectUni>



            {/* Banjo */}
            <ProjectUni
                id="Banjo"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/hobby/banjo">
                    <Image
                        placeholder="blur"
                        blurDataURL="/blur.webp"
                        className={style.oneColProjectImgStyle}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Fbanjo.webp?alt=media&token=8b45c890-f5a3-45b9-87ce-401938f8165f"
                        alt="banjo"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectUniHeader title="Banjo Physical Model" link="/projects/hobby/banjo" />
                <ProjectUniDescription
                    description={descriptions.banjo}
                    link="/projects/hobby/banjo"
                />
            </ProjectUni>


            {/* Timbre Toys */}
            <ProjectUni
                id="TimbreToys"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/hobby/timbretoys">
                    <Image
                        placeholder="blur"
                        blurDataURL="/blur.webp"
                        className={style.oneColProjectImgStyle}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Ftimbretoys.webp?alt=media&token=42d42ce5-735f-4439-ad95-943c03cb140d"
                        alt="timbretoys"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectUniHeader title="Timbre Toys" link="/projects/hobby/timbretoys" />
                <ProjectUniDescription
                    description={descriptions.timbretoys}
                    link="/projects/hobby/timbretoys"
                />

            </ProjectUni>
            {/* Gluphone */}
            <ProjectUni
                id="Gluphone"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/hobby/gluphone">
                    <Image
                        placeholder="blur"
                        blurDataURL="/blur.webp"
                        className={style.oneColProjectImgStyle}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Gluphone%2Fmain.webp?alt=media&token=fc2f6c22-fe00-4994-be06-232ea575e476"
                        alt="gluphone"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectUniHeader title="Gluphone" link="/projects/hobby/gluphone" />
                <ProjectUniDescription
                    description={descriptions.gluphone}
                    link="/projects/hobby/gluphone"
                />

            </ProjectUni>

            {/* Roughness */}
            <ProjectUni
                id="Roughness"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/hobby/roughness">
                    <Image
                        className={style.oneColProjectImgStyle}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Froughness.webp?alt=media&token=811ffe7d-14f9-4ca3-85da-5b39362b4046"
                        alt="roughness"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectUniHeader title="Vocal Distortion" link="/projects/hobby/roughness" />
                <ProjectUniDescription
                    description={descriptions.roughness}
                    link="/projects/hobby/roughness"
                />

            </ProjectUni>


            {/* AIvsHuman Emotions */}
            <ProjectUni
                id="Emotions"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/hobby/ai_hum">
                    <Image
                        placeholder="blur"
                        blurDataURL="/blur.webp"
                        className={style.oneColProjectImgStyle}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Faihum.webp?alt=media&token=8be2e9c1-af0e-4c5a-8331-3629bddb02ab"
                        alt="emotions"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectUniHeader title="Emotions in AI-generated music" link="/projects/hobby/ai_hum" />
                <ProjectUniDescription
                    description={descriptions.emotions}
                    link="/projects/hobby/ai_hum"
                />

            </ProjectUni>
            {/* Convolutional Instrument Recognition System */}
            <ProjectUni
                id="MLME"
                className={style.oneColProjectDevStyle}
            >
                <Link href="/projects/hobby/mlme">
                    <Image
                        placeholder="blur"
                        blurDataURL="/blur.webp"
                        className={style.oneColProjectImgStyle}
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-assets-91518.firebasestorage.app/o/Others%2Fmlme.webp?alt=media&token=fabd6a13-28af-4a22-89b9-a58bcf870b4d"
                        alt="mlme"
                        width={1}
                        height={1}
                    />
                </Link>
                <ProjectUniHeader title="Instrument Recognition" link="/projects/hobby/mlme" />
                <ProjectUniDescription
                    description={descriptions.mlme}
                    link="/projects/hobby/mlme"
                />
            </ProjectUni>
        </div>
    )
}