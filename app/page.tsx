import SelectCareer from "@/utils/selectCareer"
import Image from 'next/image';

export default function Home() {

  return (
    <main>
      <div className="codepic-container">
      <SelectCareer />
      </div>

      <div className="introduction">
        <div className="intro-block">
          <h1 className="intro-line">Hey, I&apos;m Maaha - A CS Graduate looking for exciting roles in tech.</h1>
          <p className="intro-para">Through university, I&apos;ve gained knowledge in Software Engineering and Machine Learning, 
          and I&apos;ve also developed Cloud Computing skills through self-study. My interest lies at the 
            intersection of these three fields, and I&apos;m looking for roles that allow me to work with technologies from all of them.</p>
        </div>

        <div className="contact-block">
          <a href="mailto:maahaahmad99@gmail.com"><Image className="mail" src="images/mail.svg" alt="mail-icon"/></a>
          <a href="https://github.com/maahma" target="_blank"><Image className="github" src="images/github.svg" alt="git-icon"/></a>
          <a href="https://www.linkedin.com/in/maaha-ahmad/" target="_blank"><Image className="linkedin" src="images/linkedin.svg" alt="linkedin-icon" /></a>
          <a href="/docs/MaahaCV.pdf" target="_blank" rel="noopener noreferrer"><Image className="cv-view" src="images/viewcv.svg" alt="cv-icon" /></a>
        </div>
      </div>
    </main>
  );
}
