import React from 'react';
import { Text, Card, Image } from '@mantine/core';

function ResourcePage() {
  return (

      <div style={{ maxWidth: 700, margin: 'auto' }}>
        <Text>
          Welcome to our resources page, where you can find a wide range of materials to help you learn more about sex education and health. We've curated a list of resources from credible organizations and experts in the field to ensure that you're getting accurate and up-to-date information. 
        </Text>


{/* BOOKS */}

        <Card shadow="sm" style={{ marginTop: '20px' }}>
          <Text weight={500} style={{ marginBottom: '10px' }}>Books</Text>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              <a href="https://www.amazon.com/Its-Perfectly-Normal-Changing-Growing/dp/0763668729" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image src="https://images-na.ssl-images-amazon.com/images/I/61JeJ3q1BbL._SX258_BO1,204,203,200_.jpg" width={80} alt="It's Perfectly Normal book cover" />
                <span>"It's Perfectly Normal" by Robie H. Harris and Michael Emberley</span>
              </a>: A comprehensive guide to puberty, sex, and relationships for young people
            </li>
            <li>
              <a href="https://www.amazon.com/Sexual-Intelligence-Marty-Klein/dp/0062026062" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image src="https://images-na.ssl-images-amazon.com/images/I/41U6rOVrDDL._SX331_BO1,204,203,200_.jpg" width={80} alt="Sexual Intelligence book cover" />
                <span>"Sexual Intelligence" by Marty Klein</span>
              </a>: A guide to developing a healthy and fulfilling sex life, including tips for communication and consent
            </li>
            <li>
              <a href="https://www.amazon.com/Guide-Getting-Paul-Joannides/dp/1885535457" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image src="https://images-na.ssl-images-amazon.com/images/I/61c%2BvP%2BCVGL._SX390_BO1,204,203,200_.jpg" width={80} alt="The Guide to Getting it On book cover" />
                <span>"The Guide to Getting it On" by Paul Joannides</span>
              </a>: An inclusive and humorous guide to all aspects of sex, from anatomy to technique
            </li>
          </ul>
        </Card>


{/* PODCASTS */}
      <Card shadow="sm" style={{ marginTop: '20px' }}>
      <Text weight={500} style={{ marginBottom: '10px' }}>Podcasts</Text>

        <ul style={{ paddingLeft: '20px' }}>
          <li>
            <a href="https://podcasts.apple.com/us/podcast/sex-with-emily/id467599648" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/55/86/68/558668f6-293c-d208-ba6e-9de34be85138/mza_6269178118943447448.jpg/600x600bb.jpg" width={80} alt="Sex with Emily podcast cover" />
              <span>"Sex with Emily" by Emily Morse</span>
            </a>: A podcast that explores sex, relationships, and intimacy with experts and everyday people
          </li>
          <li>
            <a href="https://podcasts.apple.com/us/podcast/savage-lovecast/id135784124" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src="https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/45/37/41/45374158-a69a-41be-9ef9-faa03fb3c7d3/mza_10088103378438428554.png/600x600bb.jpg" width={80} alt="Savage Lovecast podcast cover" />
              <span>"Savage Lovecast" by Dan Savage</span>
            </a>: A podcast that offers advice and insights on sex and relationships, with a focus on LGBTQ+ issues
          </li>
          <li>
            <a href="https://podcasts.apple.com/us/podcast/whoreible-decisions/id1291914299" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src="https://is5-ssl.mzstatic.com/image/thumb/Podcasts124/v4/e3/3a/f3/e33af3c6-c935-107f-4726-70643f33b1d1/mza_14171921489650631752.jpg/600x600bb.jpg" width={80} alt="Whoreible Decisions podcast cover" />
              <span>"Whoreible Decisions" by Mandii B and WeezyWTF</span>
            </a>: A podcast that discusses sex and dating from a frank and humorous perspective
          </li>
        </ul>
      </Card>



{/* WEBSITES */}
<Card shadow="sm" style={{ marginTop: '20px' }}>
  <Text weight={500} style={{ marginBottom: '10px' }}>Websites</Text>
  <ul style={{ paddingLeft: '20px' }}>
    <li>
      <a href="https://www.plannedparenthood.org/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src="https://www.plannedparenthood.org/themes/custom/pp/images/pp-logo.png" width={80} alt="Planned Parenthood logo" />
        <span>Planned Parenthood</span>
      </a>: A national organization that provides reproductive health services and sex education resources to individuals of all ages and genders
    </li>
    <li>
      <a href="https://www.scarleteen.com/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src="https://www.scarleteen.com/sites/all/themes/scarleteen/logo.svg" width={80} alt="Scarleteen logo" />
        <span>Scarleteen</span>
      </a>: A website that offers comprehensive sex education and advice to young people, including LGBTQ+ individuals and survivors of sexual assault
    </li>
    <li>
      <a href="https://goaskalice.columbia.edu/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src="https://goaskalice.columbia.edu/themes/custom/goaskalice/logo.svg" width={80} alt="Go Ask Alice! logo" />
        <span>Go Ask Alice!</span>
      </a>: A health Q&A website run by Columbia University that covers a wide range of topics, including sexual health and relationships
    </li>
  </ul>
</Card>





{/* VIDEOS */}
<Card shadow="sm" style={{ marginTop: '20px' }}>
<Text weight={500} style={{ marginBottom: '10px' }}>Videos</Text>

  <ul style={{ paddingLeft: '20px' }}>
    <li>
      <a href="https://www.youtube.com/user/sexplanations">"Sexplanations" by Dr. Lindsey Doe</a>: A YouTube channel that covers a wide range of sex education topics, from consent to sexual dysfunction
    </li>
    <li>
      <a href="https://www.youtube.com/user/amazeorg">"Amaze.org" by Advocates for Youth</a>: A YouTube channel that provides engaging and accessible sex education videos for young people
    </li>
    <li>
      <a href="https://www.theguardian.com/world/series/the-sex-ed">"The Sex Ed" by The Guardian</a>: A documentary series that explores different aspects of sex education and reproductive health around the world
    </li>
  </ul>
</Card>



{/* TOOLS */}
      <Card shadow="sm" style={{ marginTop: '20px' }}>
      <Text weight={500} style={{ marginBottom: '10px' }}>Tools</Text>

        <ul style={{ paddingLeft: '20px' }}>
          <li>
            <a href="https://www.bedsider.org/">Bedsider</a>: A website that provides information on birth control options and helps users find a method that works for them
          </li>
          <li>
            <a href="https://www.condomfinder.org/">Condom Finder</a>: An app that helps users find free condoms near their location
          </li>
          <li>
            <a href="https://helloclue.com/">Clue</a>: A period and fertility tracking app that helps users understand their menstrual cycle and reproductive health
          </li>
        </ul>
      </Card>



{/* OTHER VIDEOS */}
      <Card shadow="sm" style={{ marginTop: '20px' }}>
        <Text weight={500} style={{ marginBottom: '10px' }}>Videos or podcasts on sex education and health topics</Text>
        <ul style={{ paddingLeft: '20px' }}>
          <li>
            <a href="https://www.youtube.com/c/sexplanations" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src="https://i.ytimg.com/vi/37vU6pt3zV0/hqdefault.jpg" width={80} alt="Sexplanations channel preview" />
              <span>Sexplanations</span>
            </a>: A popular YouTube channel hosted by sex educator Dr. Lindsey Doe. The channel covers a wide range of topics related to sex education and health, including anatomy, sexual pleasure, and sexual health. Each video is well-researched and includes expert insights, personal stories, and clear explanations.
          </li>
          <li>
            <a href="https://sexedpodcast.com/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/07/17/e4/0717e4fa-0e0c-e1a9-37e1-2845d5cfdcef/mza_14748872627942447113.png/1200x1200bb.jpg" width={80} alt="Sex Ed Podcast preview" />
              <span>The Sex Ed Podcast</span>
            </a>: A podcast hosted by Liz Walker, a sex educator and therapist. The podcast covers a range of topics related to sex education and health, including consent, healthy relationships, and sexual pleasure. Each episode features interviews with experts in the field and personal stories from individuals.
          </li>
          <li>
            <a href="https://www.ted.com/talks/al_vernacchio_sex_needs_a_new_metaphor_here_s_one" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src="https://pe.tedcdn.com/images/ted/6ad9d6ee88c0d31f507b417fcb7520d334c66e47_1600x1200.jpg" width={80} alt="Let's Talk About Sex TEDx Talk preview" />
              <span>Let's Talk About Sex</span>
            </a>: A TEDx Talk by sex educator Al Vernacchio. In his talk, Vernacchio discusses the importance of comprehensive sex education and the need for a more nuanced and inclusive approach to teaching about sex and relationships.
          </li>
        </ul>
      </Card>




{/* Interactive tools or quizzes that can help users assess their knowledge of sex education and health: */}
<Card shadow="sm" style={{ marginTop: '20px' }}>
  <Text weight={500} style={{ marginBottom: '10px' }}>Interactive Tools and Quizzes</Text>
  <ul style={{ paddingLeft: '20px' }}>
    <li>
      <a href="https://www.ashasexualhealth.org/sexual-health-quiz/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src="https://www.ashasexualhealth.org/wp-content/uploads/2021/06/ASHA_Quiz_Social-share.png" width={80} alt="ASHA Sexual Health Quiz" />
        <div>
          <span>ASHA Sexual Health Quiz</span>
          <br />
          <span>A comprehensive quiz to assess your knowledge of sexual health topics, including contraception, STIs, and sexual pleasure.</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://www.plannedparenthood.org/get-care/our-services/quiz" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src="https://www.plannedparenthood.org/-/media/PPEN/PPFW/events/2021/lets-talk-sex/quiz.png" width={80} alt="Planned Parenthood Sexual and Reproductive Health Quiz" />
        <div>
          <span>Planned Parenthood Sexual and Reproductive Health Quiz</span>
          <br />
          <span>An interactive quiz to test your knowledge on a range of sexual and reproductive health topics, including birth control, STIs, and pregnancy.</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://www.scarleteen.com/article/sexuality_readiness_checklist" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src="https://www.scarleteen.com/sites/default/files/styles/teaser_half_1x/public/Quiz_0.png?itok=1bckE2rR" width={80} alt="Scarleteen Sexual Readiness Checklist" />
        <div>
          <span>Scarleteen Sexual Readiness Checklist</span>
          <br />
          <span>An interactive tool to help you assess your readiness for sexual activity.</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://www.scarleteen.com/quiz/healthy_relationships_quiz" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src="https://www.scarleteen.com/sites/default/files/styles/teaser_half_1x/public/quiz_cover.png?itok=gsWEk63h" width={80} alt="Scarleteen Healthy Relationships Quiz" />
        <div>
          <span>Scarleteen Healthy Relationships Quiz</span>
          <br />
          <span>An interactive quiz to help you learn more about healthy relationships and improve your communication skills.</span>
        </div>
      </a>
    </li>
  </ul>
</Card>






            <Text>
            We hope that these resources are helpful to you, and we encourage you to explore them further. If you have any suggestions for resources that we should include on this page, please don't hesitate to contact us.
            </Text>



    </div>
  )
}

export default ResourcePage