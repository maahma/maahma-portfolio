import SelectCareer from "@/utils/selectCareer"
import Image from 'next/image';

export default function Home() {

  return (
    <main className="home-page">
      <div className="codepic-container">
        <SelectCareer />
        <figure className="profile-pic-container">
          <Image className="profile-img" src="images/profile-pic.jpg" alt="profile-img" width={1000} height={1000}/>
          <figcaption className="profile-pic-caption">
            From my graduation day!
          </figcaption>
        </figure>
      </div>

      <div className="introduction">
        <div className="intro-block">
          <h1 className="intro-line">Hey, I&apos;m Maaha - A CS Graduate looking for exciting roles in tech.</h1>
          <p className="intro-para">Through university, I&apos;ve gained knowledge in Software Engineering and Machine Learning, 
          and I&apos;ve also developed Cloud Computing skills through self-study. My interest lies at the 
            intersection of these three fields, and I&apos;m looking for roles that allow me to work with technologies from all of them.</p>
        </div>

        <div className="contact-block">
          <a href="mailto:maahaahmad99@gmail.com"><Image className="mail" src="images/mail.svg" alt="mail-icon" width={35} height={35} /></a>
          <a href="https://github.com/maahma" target="_blank"><Image className="github" src="images/github.svg" alt="git-icon" width={35} height={35}/></a>
          <a href="https://www.linkedin.com/in/maaha-ahmad/" target="_blank"><Image className="linkedin" src="images/linkedin.svg" alt="linkedin-icon" width={35} height={35} /></a>
          <a href="docs/MaahaCV.pdf" target="_blank" rel="noopener noreferrer"><Image className="cv-view" src="images/viewcv.svg" alt="cv-icon" width={35} height={35} /></a>
        </div>
      </div>
    </main>
  );
}
