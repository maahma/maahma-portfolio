import SelectCareer from "@/utils/selectCareer"

export default function Home() {

  return (
    <main>
      <SelectCareer />

      <div className="introduction">
        <div className="intro-block">
          <h1 className="intro-line">Hey, I'm Maaha - A CS Graduate looking for exciting roles in tech.</h1>
          <p className="intro-para">Through university, I've gained knowledge in Software Engineering and Machine Learning, 
          and I've also developed Cloud Computing skills through self-study. My interest lies at the 
            intersection of these three fields, and I'm looking for roles that allow me to work with technologies from all of them.</p>
        </div>

        <div className="contact-block">
          <a href="mailto:maahaahmad99@gmail.com"><img className="mail" src="images/mail.svg" /></a>
          <a href="https://github.com/maahma" target="_blank"><img className="github" src="images/github.svg" /></a>
          <a href="https://www.linkedin.com/in/maaha-ahmad/" target="_blank"><img className="linkedin" src="images/linkedin.svg" /></a>
        </div>
      </div>
    </main>
  );
}
