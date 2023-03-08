import React from "react";
import { Text, Card, Image, Badge, Button } from "@mantine/core";

function ResourcePage() {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <section className="resource-section">
        <Image
          src="../../public/images/home-reading.jpg"
          alt="reading-people"
          width={1400}
          className="image-resource"
        />
      </section>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            maxWidth: 1100,
            color: "black",
            textAlign: "center",
            fontSize: "20px",
            lineHeight: "1.3",
          }}
        >
          Welcome to our resources page, where you can find a wide range of
          materials to help you learn more about sex education and health. We've
          curated a list of resources to ensure that you're getting accurate and
          up-to-date information.
        </Text>
      </div>
      <div style={{ maxWidth: 700, margin: "auto" }}>
        {/* BOOKS */}
        <Card shadow="xl" style={{ marginTop: "60px" }}>
          <Text
            weight={500}
            style={{
              marginLeft: "40px",
              marginBottom: "-30px",
              fontSize: "20px",
            }}
          >
            BOOKS
          </Text>
          <ul style={{ padding: "20px", listStyle: "none" }}>
            <li style={{ padding: "20px" }}>
              <a
                href="https://www.amazon.com/Its-Perfectly-Normal-Changing-Growing/dp/0763668729"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://m.media-amazon.com/images/I/A1pp7rvuN4L.jpg"
                  width={80}
                  alt="It's Perfectly Normal book cover"
                />

                <div>
                  <Text weight={500}>It's Perfectly Normal</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    by Robie H. Harris and Michael Emberley
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Puberty, sex, and relationships
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://www.amazon.com/Sexual-Intelligence-Marty-Klein/dp/0062026062"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://m.media-amazon.com/images/P/0062026062.01._SCLZZZZZZZ_SX500_.jpg"
                  width={80}
                  alt="Sexual Intelligence book cover"
                />

                <div>
                  <Text weight={500}>Sexual Intelligence</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    by Marty Klein
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Healthy and fulfilling sex life
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://www.amazon.com/Guide-Getting-Paul-Joannides/dp/1885535457"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://m.media-amazon.com/images/I/512bCyJrRmL._SX387_BO1,204,203,200_.jpg"
                  width={80}
                  alt="The Guide to Getting it On book cover"
                />
                <div>
                  <Text weight={500}>The Guide to Getting it On</Text>
                  <Text size="sm" style={{ marginTop: "5px" }}>
                    by Paul Joannides
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    An inclusive and humorous guide to all aspects of sex
                  </Badge>
                </div>
              </a>
            </li>
          </ul>
        </Card>

        {/* PODCASTS */}
        <Card shadow="xl" style={{ marginTop: "60px" }}>
          <Text
            weight={500}
            style={{
              marginLeft: "40px",
              marginBottom: "-20px",
              fontSize: "20px",
            }}
          >
            APPLE PODCASTS
          </Text>

          <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
            <li style={{ padding: "20px" }}>
              <a
                href="https://podcasts.apple.com/us/podcast/sex-with-emily/id467599648"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://i.podnews.network/r/t/396/11221-2b1ef06c.webp"
                  width={80}
                  alt="Sex with Emily podcast cover"
                />
                <div>
                  <Text weight={500} style={{ marginBottom: "5px" }}>
                    "Sex with Emily"
                  </Text>
                  <Text size="sm" style={{ marginBottom: "5px" }}>
                    by Emily Morse
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                  
                  Explores sex, relationships, and intimacy</Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://podcasts.apple.com/us/podcast/savage-lovecast/id135784124"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://m.media-amazon.com/images/I/51N-kQCITjL._SL500_.jpg"
                  width={80}
                  alt="Savage Lovecast podcast cover"
                />
                <div>
                  <Text weight={500} style={{ marginBottom: "5px" }}>
                    "Savage Lovecast"
                  </Text>
                  <Text size="sm" style={{ marginBottom: "5px" }}>
                    by Dan Savage
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Offers advice and insights on sex and relationships
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://podcasts.apple.com/us/podcast/whoreible-decisions/id1291914299"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://podsauce.com/wp-content/uploads/2022/03/WhoreibleDecisions-Logo-FINAL3000x3000-V2.png"
                  width={80}
                  alt="Whoreible Decisions podcast cover"
                />
                <div>
                  <Text weight={500} style={{ marginBottom: "5px" }}>
                    "Whoreible Decisions"
                  </Text>
                  <Text size="sm" style={{ marginBottom: "5px" }}>
                    by Mandii B and WeezyWTF
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Discusses sex and dating from a frank and humorous
                    perspective
                  </Badge>
                </div>
              </a>
            </li>
          </ul>
        </Card>

        {/* WEBSITES */}
        <Card shadow="xl" style={{ marginTop: "60px" }}>
          <Text
            weight={500}
            style={{
              marginLeft: "40px",
              marginBottom: "-20px",
              fontSize: "20px",
            }}
          >
            WEBSITES
          </Text>
          <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
            <li style={{ padding: "20px" }}>
              <a
                href="https://www.plannedparenthood.org/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://www.plannedparenthood.org/static/assets/img/logos/planned-parenthood-logo-484x60.png"
                  width={80}
                  alt="Planned Parenthood logo"
                />
                <div>
                  <Text weight={500}>Planned Parenthood</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    A national organization that provides reproductive health
                    services and sex education resources to individuals of all
                    ages and genders
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Reproductive health and sex education
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://www.scarleteen.com/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="http://www.scarleteen.com/sites/all/themes/scarleteen/images/logo.png"
                  width={80}
                  alt="Scarleteen logo"
                />
                <div>
                  <Text weight={500}>Scarleteen</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    A website that offers comprehensive sex education and advice
                    to young people, including LGBTQ+ individuals and survivors
                    of sexual assault
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Comprehensive sex education and advice
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://goaskalice.columbia.edu/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://hips.hearstapps.com/hmg-prod/images/index-13-1654538886.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
                  width={80}
                  alt="Go Ask Alice! logo"
                />
                <div>
                  <Text weight={500}>Go Ask Alice!</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    A health Q&amp;A website run by Columbia University that
                    covers a wide range of topics, including sexual health and
                    relationships
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Health Q&A run by Columbia University
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://www.theguardian.com/education/sexeducation"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                              <Image
                  src="https://yt3.googleusercontent.com/ytc/AL5GRJWlS0Y_Lg53IzsRrZ6fpd_JbwKr66I1cF-dYHx8Y9k=s900-c-k-c0x00ffffff-no-rj"
                  width={80}
                  alt="Guardian logo"
                />
                <div>
                  <Text weight={500}>Relationships and sex Education</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    by The Guardian
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Articles on different aspects of sex education and relationships
                  </Badge>
                </div>
              </a>
            </li>
          </ul>
        </Card>

        {/* VIDEOS */}
        <Card shadow="xl" style={{ marginTop: "60px" }}>
          <Text
            weight={500}
            style={{
              marginLeft: "40px",
              marginBottom: "-20px",
              fontSize: "20px",
            }}
          >
            VIDEOS
          </Text>
          <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
            <li style={{ padding: "20px" }}>
              <a
                href="https://www.youtube.com/c/AdvocatesforYouth"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://yt3.googleusercontent.com/ytc/AL5GRJUNzsOnYSfXeKgE7ZttEopUaXmz-MAwnEzm8--9HA=s176-c-k-c0x00ffffff-no-rj"
                  width={80}
                  alt="Advocates for Youth logo"
                />
                <div>
                  <Text weight={500}>Amaze.org</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    by Advocates for Youth
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Engaging and accessible sex education videos
                  </Badge>
                </div>
              </a>
            </li>



            <li style={{ padding: "20px" }}>
              <a
                href="https://www.youtube.com/user/sexplanations"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://i.ytimg.com/vi/7FA9aqw1wag/maxresdefault.jpg"
                  width={80}
                  alt="Sexplanations channel preview"
                />
                <div>
                  <Text weight={500}>Sexplanations</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    by Dr. Lindsey Doe
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Wide range of sex education topics
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://www.ted.com/talks/al_vernacchio_sex_needs_a_new_metaphor_here_s_one"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUMmmnfqZH1Kzh0HtynlP0vQ1ET23jnyoLFbpTIFQ-xRtRQSJ21DR0568CXmqa-5SVqc&usqp=CAU"
                  width={80}
                  alt="Let's Talk About Sex TEDx Talk preview"
                />
                <div>
                  <Text weight={500}>Let's Talk About Sex</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    by Al Vernacchio
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Comprehensive sex education
                  </Badge>
                </div>
              </a>
            </li>
          </ul>
        </Card>

        {/* TOOLS */}
        <Card shadow="xl" style={{ marginTop: "50px" }}>
          <Text
            weight={500}
            style={{
              marginLeft: "40px",
              marginBottom: "-20px",
              fontSize: "20px",
            }}
          >
            TOOLS
          </Text>
          <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
            <li style={{ padding: "20px" }}>
              <a
                href="https://www.bedsider.org/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
              <Image
                  src="https://www.bedsider.org/assets/twentyone/action_promo_explorer_small-d788ee8243acf9c93c0e5c49313cb2ff6217219620acc6ce898193dd23211ac5.webp"
                  width={80}
                  alt="birth control"
                />
                <div>
                  <Text weight={500}>Bedsider</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    A website that provides information on birth control options
                    and helps users find a method that works for them
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Birth control information and support
                  </Badge>
                </div>
              </a>
            </li>
            <li style={{ padding: "20px" }}>
              <a
                href="https://www.condomfinder.org/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                              <Image
                  src="https://condomfinder.org/wp-content/uploads/2021/02/condoms.png"
                  width={80}
                  alt="condoms"
                />
                <div>
                  <Text weight={500}>Condom Finder</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    An app that helps users find free condoms near their
                    location
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                  Free condom locator</Badge>
                </div>
              </a>
            </li>
            <li style={{ padding: "20px" }}>
              <a
                href="https://helloclue.com/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                              <Image
                  src="https://images.ctfassets.net/juauvlea4rbf/3ESGywBoB2CS66QGeaysY8/6f62f759f40f5aefb5d5f940f8604f6e/Contenful.svg"
                  width={80}
                  alt="cycle"
                />
                <div>
                  <Text weight={500}>Clue</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>
                    A period and fertility tracking app that helps users
                    understand their menstrual cycle and reproductive health
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Period and fertility tracker
                  </Badge>
                </div>
              </a>
            </li>
          </ul>
        </Card>

        {/* quizzes */}
        <Card shadow="xl" style={{ marginTop: "60px" }}>
          <Text
            weight={500}
            style={{
              marginLeft: "40px",
              marginBottom: "-20px",
              fontSize: "20px",
            }}
          >
            QUIZZES
          </Text>
          <ul style={{ paddingLeft: "20px", listStyle: "none" }}>
            <li style={{ padding: "20px" }}>
              <a
                href="https://www.ashasexualhealth.org/hpv-and-men-take-the-quiz/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://cdn.riddle.com/embeds/v2/images/q_80,c_fill,w_960,h_540/fa8/fa8ffcb228c3503a4bbcb5d8e40078fb.png"
                  width={80}
                  alt="ASHA Sexual Health Quiz"
                />
                <div>
                  <Text weight={500}>
                     What do you know about HPV and men? 
                  </Text>
                  <Text size="sm" style={{ marginTop: 5 }}></Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Test your knowledge of how HPV infection affects men
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://www.plannedparenthood.org/online-tools/am-i-pregnant"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://cdn.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/28/b9/28b9e83b-4ab5-4cae-8cbf-9e39e1bc1a92/08_pp_website_quiz-5-660x400.jpg__1200x900_q75_subsampling-2.jpg"
                  width={80}
                  alt="Planned Parenthood Sexual and Reproductive Health Quiz"
                />
                <div>
                  <Text weight={500}>
                    Am I Pregnant? 
                  </Text>
                  <Text size="sm" style={{ marginTop: 5 }}></Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Test your knowledge of pregnancy and taking a pregnancy test
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://www.cdc.gov/std/saw/pbyt/quiz.htm#question-1"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://www.cdc.gov/std/saw/pbyt/images/PBYT_container_Campaign_Materials.png?_=00189"
                  width={80}
                  alt="sex ed"
                />
                <div>
                  <Text weight={500}>
                  Are you at risk for an STI?
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    check the risk for a sexually transmitted infection
                  </Badge>
                </div>
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="https://www.healthshots.com/quiz/how-much-do-you-know-about-sex-find-out-here/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src="https://images.healthshots.com/healthshots/en/uploads/2021/12/18161853/sex-education-770x433.jpg"
                  width={80}
                  alt="sex ed"
                />
                <div>
                  <Text weight={500}>
                  Do you know everything about sex? 
                  </Text>
                  <Badge style={{ marginTop: 20 }} color="indigo">
                    Yes/ No quiz - basic sex education
                  </Badge>
                </div>
              </a>
            </li>


          </ul>
        </Card>

        <Text style={{ marginTop: "100px" }}>
          We hope that these resources are helpful to you, and we encourage you
          to explore them further. If you have any suggestions for resources
          that we should include on this page, please don't hesitate to contact
          us.
        </Text>

        <Button 
          style={{ position: "fixed", bottom: "20px", right: "20px" }} 
          onClick={scrollToTop}
          variant="gradient" 
          gradient={{ from: '#ed6ea0', to: 'indigo', deg: 35 }}
        >
            scroll to top
        </Button>

      </div>
    </>
  );
}

export default ResourcePage;
