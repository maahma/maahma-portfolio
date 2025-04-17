import IntroBlock from "@/utils/introBlock"
import ProfileImgBlock from "@/utils/profileImgBlock"

export default function Home() {

  return (
    <main className="home-page">
      <div className="codepic-container">
        
        <IntroBlock />

        <ProfileImgBlock />

      </div>
    </main>
  );
}
