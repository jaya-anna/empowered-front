import { Image, Button, Anchor } from "@mantine/core";
import { NavLink } from "react-router-dom";
import {
  IconGenderIntergender,
  IconGenderAndrogyne, IconGenderBigender, IconGenderFemale, IconGenderMale, IconGenderTransgender, IconGenderGenderfluid, IconGenderGenderqueer, IconGenderGenderless, IconGenderDemiboy, IconGenderDemigirl, IconGenderHermaphrodite, IconGenderNeutrois,  IconGenderTrasvesti 
} from "@tabler/icons-react";

const HomePage = () => {
  return (
    <>
      <section className="home-section-1">
        <div className="homepage-header">
          <div>
            <h1> Let's talk about Sexuality & Relationships</h1>

            <div className="button-homepage">
              <NavLink>
                <Button
                  className="button-home-margin"
                  variant="outline"
                  color="indigo"
                  to="/login"
                >
                  Share your question
                </Button>
              </NavLink>

              <NavLink>
                <Button
                  className="button-home-margin"
                  variant="outline"
                  color="indigo"
                  to="/info"
                >
                  Inform yourself
                </Button>
              </NavLink>
            </div>
          </div>

          <Image
            className="image-group-home"
            width={1500}
            height={600}
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
          
              <IconGenderIntergender /> <IconGenderAndrogyne /><IconGenderBigender/><IconGenderFemale/><IconGenderTransgender/><IconGenderDemiboy/><IconGenderDemigirl /><IconGenderGenderfluid /><IconGenderGenderqueer/><IconGenderGenderless/><IconGenderHermaphrodite/><IconGenderNeutrois/><IconGenderMale/><IconGenderTrasvesti/><br/>
              an online community and information platform for your unique
              journey
            </h1>
          </div>
        </div>
      </section>
      <section className="home-section-3"></section>
    </>
  );
};

export default HomePage;
