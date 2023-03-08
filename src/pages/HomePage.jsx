import { Image, Button, Anchor } from "@mantine/core";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  IconGenderIntergender,
  IconGenderAndrogyne,
  IconGenderBigender,
  IconGenderFemale,
  IconGenderMale,
  IconGenderTransgender,
  IconGenderGenderfluid,
  IconGenderGenderqueer,
  IconGenderGenderless,
  IconGenderDemiboy,
  IconGenderDemigirl,
  IconGenderHermaphrodite,
  IconGenderNeutrois,
  IconGenderTrasvesti,
  IconMessages,
  IconSchool,
  IconRocket,
} from "@tabler/icons-react";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateLogin = () => {
    navigate("/login");
  };
  const handleNavigateInfo = () => {
    navigate("/info");
  };
  const handleNavigateResource = () => {
    navigate("/resources");
  };

  return (
    <>
      <section className="home-section-1">
        <div className="homepage-header">
          <div>
            <h1> Let's talk about Sexuality & Relationships</h1>

            <div className="button-homepage">
              <Button
                type="submit"
                onClick={handleNavigateLogin}
                className="button-home-margin"
                variant="outline"
                color="indigo"
              >
                JOIN THE COMMUNITY
              </Button>

              <Button
                type="submit"
                onClick={handleNavigateInfo}
                className="button-home-margin"
                variant="outline"
                color="indigo"
              >
                READ AND INFORM YOURSELF
              </Button>

              <Button
                type="submit"
                onClick={handleNavigateResource}
                className="button-home-margin"
                variant="outline"
                color="indigo"
              >
                RESOURCE RECOMMENDATIONS
              </Button>
            </div>
          </div>
          {/*}
          <Image
            className="image-speech-bubble"
            src="../../images/speech-bubble.png"
            alt=""
            width={130}
          />
          <span className="bubble-link">
            <Link to="/quiz">
              <p className="quiz-bg">QUIZ</p>
              <p className="quiz-md">QUIZ</p>
              <p className="quiz-sm">QUIZ</p>
            </Link>
          </span>
*/}
          <Image
            className="image-group-home"
            max-width={100}
            height={"auto"}
            fit="contain"
            mx="auto"
            src="../../images/home-group.png"
            alt="Random image"
          />
        </div>
      </section>

      <section className="home-section-2">
        <div className="background-section-2">
          <div>
            <h1>
              <IconGenderIntergender /> <IconGenderAndrogyne />
              <IconGenderBigender />
              <IconGenderFemale />
              <IconGenderTransgender />
              <IconGenderDemiboy />
              <IconGenderDemigirl />
              <IconGenderGenderfluid />
              <IconGenderGenderqueer />
              <IconGenderGenderless />
              <IconGenderHermaphrodite />
              <IconGenderNeutrois />
              <IconGenderMale />
              <IconGenderTrasvesti />
              <br />
              <p className="text-community">
                an online community and information platform for your unique
                journey
              </p>
              <Link to='/about'>
                <Button variant="filled" className="button-about">
                  About us
                </Button>
              </Link>
              <br />
              {/* <IconHeart width={500} className="icon-heart" />*/}
            </h1>
          </div>
        </div>
      </section>

      <section className="home-section-3">
        <div className="container-section-3">
          <div className="box-3">
            <h2>interactive</h2> <IconMessages />
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Vestibulum vehicula erat non congue
              cursus. Aenean auctor nulla quis augue dictum, sed sagittis odio
              varius. Duis tempus leo vitae ipsum viverra, blandit condimentum
              sapien porttitor. Duis porttitor sed metus eget mollis. Curabitur
              bibendum imperdiet tortor, ut pulvinar purus elementum nspendisse
              at erat luctus.
            </p>
          </div>
          <div className="box-3">
            <h2>educational</h2> <IconSchool />
            <p>
              Duis tempus leo vitae ipsum viverra, blandit condimentum sapien
              porttitor. Duis porttitor sed metus eget mollis. Curabitur
              bibendum imperdiet tortor, ut pulvinar purus elementum nspendisse
              at erat luctus. Duis tempus leo vitae ipsum viverra, blandit
              condimentum sapien porttitor. Duis porttitor sed metus eget
              mollis. Curabitur bibendum imperdiet tortor, ut pulvinar purus
              elementum nspendisse at erat luctus.
            </p>
          </div>
          <div className="box-3">
            <Image />
            <h2>empowering</h2> <IconRocket />
            <p>
              Cras aliquet venenatis porttitor. Donec rutrum sapien et sapien
              dignissim, eu dapibus mi molestie. Suspendisse dictum convallis
              quam et sodales. Praesent non enim et magna congue gravida.Duis
              tempus leo vitae ipsum viverra, blandit condimentum sapien
              porttitor. Duis porttitor sed metus eget mollis. Curabitur
              bibendum imperdiet tortor, ut pulvinar purus elementum nspendisse
              at erat luctus.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Image
          className="image-reading-home"
          fit="contain"
          width={1000}
          height={350}
          mx="auto"
          src="../../images/home-reading.jpg"
          alt="reading people"
        />
      </section>
    </>
  );
};

export default HomePage;
