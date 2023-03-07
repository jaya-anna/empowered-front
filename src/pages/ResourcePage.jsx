import React from 'react';
import { Text, Card, Image, Badge } from '@mantine/core';

function ResourcePage() {
  return (

      <div style={{ maxWidth: 700, margin: 'auto' }}>
        <Text>
          Welcome to our resources page, where you can find a wide range of materials to help you learn more about sex education and health. We've curated a list of resources from credible organizations and experts in the field to ensure that you're getting accurate and up-to-date information. 
        </Text>


{/* BOOKS */}
      <Card shadow="sm" style={{ marginTop: '20px' }}>
        <Text weight={500} style={{ marginBottom: '10px' }}>Books</Text>
          <ul style={{ padding: '20px',  listStyle: "none" }}>

            <li style={{ padding: '20px' }} >
              <a href="https://www.amazon.com/Its-Perfectly-Normal-Changing-Growing/dp/0763668729" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Image src="https://m.media-amazon.com/images/I/A1pp7rvuN4L.jpg" width={80} alt="It's Perfectly Normal book cover" />

                  <div>
                    <Text weight={500}>It's Perfectly Normal</Text>
                    <Text size="sm" style={{ marginTop: 5 }}>by Robie H. Harris and Michael Emberley</Text>
                    <Badge style={{ marginTop: 10 }}>Puberty, sex, and relationships</Badge>
                </div>
              </a> 
            </li>

            <li style={{ padding: '20px' }} >
              <a href="https://www.amazon.com/Sexual-Intelligence-Marty-Klein/dp/0062026062" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Image src="https://m.media-amazon.com/images/P/0062026062.01._SCLZZZZZZZ_SX500_.jpg" width={80} alt="Sexual Intelligence book cover" />

                <div>
                  <Text weight={500}>Sexual Intelligence</Text>
                  <Text size="sm" style={{ marginTop: 5 }}>by Marty Klein</Text>
                  <Badge style={{ marginTop: 10 }}>Healthy and fulfilling sex life</Badge>
              </div>
              </a> 
            </li>

            <li style={{ padding: '20px' }}>
              <a href="https://www.amazon.com/Guide-Getting-Paul-Joannides/dp/1885535457" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Image src="https://m.media-amazon.com/images/I/512bCyJrRmL._SX387_BO1,204,203,200_.jpg" width={80} alt="The Guide to Getting it On book cover" />
                <div>
                  <Text weight={500}>The Guide to Getting it On</Text>
                  <Text size="sm" style={{ marginTop: '5px' }}>by Paul Joannides</Text>
                  <Badge style={{ marginTop: '10px' }}>An inclusive and humorous guide to all aspects of sex</Badge>
                </div>
              </a>
            </li>

        </ul>
      </Card>


{/* PODCASTS */}
      <Card shadow="sm" style={{ marginTop: '20px' }}>
      <Text weight={500} style={{ marginBottom: '10px' }}>Podcasts</Text>

        <ul style={{ paddingLeft: '20px', listStyle: "none" }}>
          <li style={{ padding: '20px' }}>
            <a href="https://podcasts.apple.com/us/podcast/sex-with-emily/id467599648" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Image src="https://i.podnews.network/r/t/396/11221-2b1ef06c.webp" width={80} alt="Sex with Emily podcast cover" />
              <div>
                <Text weight={500} style={{ marginBottom: '5px' }}>"Sex with Emily"</Text>
                <Text size="sm" style={{ marginBottom: '5px' }}>by Emily Morse</Text>
                <Badge>Explores sex, relationships, and intimacy</Badge>
              </div>
            </a> 
          </li>

          <li style={{ padding: '20px' }}>
            <a href="https://podcasts.apple.com/us/podcast/savage-lovecast/id135784124" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Image src="https://m.media-amazon.com/images/I/51N-kQCITjL._SL500_.jpg" width={80} alt="Savage Lovecast podcast cover" />
                <div>
                <Text weight={500} style={{ marginBottom: '5px' }}>"Savage Lovecast"</Text>
                <Text size="sm" style={{ marginBottom: '5px' }}>by Dan Savage</Text>
                <Badge>Offers advice and insights on sex and relationships</Badge>
              </div>
            </a> 
          </li>
          
          <li style={{ padding: '20px' }}>
            <a href="https://podcasts.apple.com/us/podcast/whoreible-decisions/id1291914299" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Image src="https://podsauce.com/wp-content/uploads/2022/03/WhoreibleDecisions-Logo-FINAL3000x3000-V2.png" width={80} alt="Whoreible Decisions podcast cover" />
              <div>
                <Text weight={500} style={{ marginBottom: '5px' }}>"Whoreible Decisions"</Text>
                <Text size="sm" style={{ marginBottom: '5px' }}>by Mandii B and WeezyWTF</Text>
                <Badge>Discusses sex and dating from a frank and humorous perspective</Badge>
              </div>
            </a> 
          </li>
        </ul>
      </Card>



{/* WEBSITES */}
<Card shadow="sm" style={{ marginTop: '20px' }}>
  <Text weight={500} style={{ marginBottom: '10px' }}>Websites</Text>
  <ul style={{ paddingLeft: '20px', listStyle: "none" }}>

        <li style={{ padding: '20px' }}>
        <a href="https://www.plannedparenthood.org/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Image src="https://www.plannedparenthood.org/static/assets/img/logos/planned-parenthood-logo-484x60.png" width={80} alt="Planned Parenthood logo" />
          <div>
            <Text weight={500}>Planned Parenthood</Text>
            <Text size="sm" style={{ marginTop: 5 }}>A national organization that provides reproductive health services and sex education resources to individuals of all ages and genders</Text>
            <Badge style={{ marginTop: 10 }}>Reproductive health and sex education</Badge>
          </div>
        </a>
      </li>

      <li style={{ padding: '20px' }}>
        <a href="https://www.scarleteen.com/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Image src="http://www.scarleteen.com/sites/all/themes/scarleteen/images/logo.png" width={80} alt="Scarleteen logo" />
          <div>
            <Text weight={500}>Scarleteen</Text>
            <Text size="sm" style={{ marginTop: 5 }}>A website that offers comprehensive sex education and advice to young people, including LGBTQ+ individuals and survivors of sexual assault</Text>
            <Badge style={{ marginTop: 10 }}>Comprehensive sex education and advice</Badge>
          </div>
        </a>
      </li>

      <li style={{ padding: '20px' }}>
        <a href="https://goaskalice.columbia.edu/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Image src="https://hips.hearstapps.com/hmg-prod/images/index-13-1654538886.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*" width={80} alt="Go Ask Alice! logo" />
          <div>
              <Text weight={500}>Go Ask Alice!</Text>
              <Text size="sm" style={{ marginTop: 5 }}>A health Q&amp;A website run by Columbia University that covers a wide range of topics, including sexual health and relationships</Text>
              <Badge style={{ marginTop: 10 }}>Health Q&A run by Columbia University</Badge>
            </div>
          </a>
        </li>

  </ul>
</Card>


{/* VIDEOS */}
<Card shadow="sm" style={{ marginTop: '20px' }}>
<Text weight={500} style={{ marginBottom: '10px' }}>Videos</Text>
  <ul style={{ paddingLeft: '20px', listStyle: "none" }}>

      <li style={{ padding: '20px' }}>
        <a href="https://www.youtube.com/user/amazeorg" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div>
            <Text weight={500}>Amaze.org</Text>
            <Text size="sm" style={{ marginTop: 5 }}>by Advocates for Youth</Text>
            <Badge style={{ marginTop: 10 }}>Engaging and accessible sex education videos</Badge>
          </div>
        </a>
      </li>

      <li style={{ padding: '20px' }}>
        <a href="https://www.theguardian.com/world/series/the-sex-ed" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div>
            <Text weight={500}>The Sex Ed</Text>
            <Text size="sm" style={{ marginTop: 5 }}>by The Guardian</Text>
            <Badge style={{ marginTop: 10 }}>Explores different aspects of sex education and reproductive health</Badge>
          </div>
        </a>
      </li>

      <li style={{ padding: '20px' }}>
        <a href="https://www.youtube.com/user/sexplanations" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Image src="https://i.ytimg.com/vi/7FA9aqw1wag/maxresdefault.jpg" width={80} alt="Sexplanations channel preview" />
          <div>
            <Text weight={500}>Sexplanations</Text>
            <Text size="sm" style={{ marginTop: 5 }}>by Dr. Lindsey Doe</Text>
            <Badge style={{ marginTop: 10 }}>Wide range of sex education topics</Badge>
          </div>
        </a>
      </li>

      <li style={{ padding: '20px' }}>
        <a href="https://sexedpodcast.com/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Image src="https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/33/db/c9/33dbc9d1-1198-5eb4-4027-eb757f1582e0/mza_4290841366370468815.jpg/552x0w.webp" width={80} alt="Sex Ed Podcast preview" />
          <div>
            <Text weight={500}>The Sex Ed Podcast</Text>
            <Text size="sm" style={{ marginTop: 5 }}>by Liz Walker</Text>
            <Badge style={{ marginTop: 10 }}>Sex education and health</Badge>
          </div>
        </a> 
      </li>
      
      <li style={{ padding: '20px' }}>
        <a href="https://www.ted.com/talks/al_vernacchio_sex_needs_a_new_metaphor_here_s_one" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUMmmnfqZH1Kzh0HtynlP0vQ1ET23jnyoLFbpTIFQ-xRtRQSJ21DR0568CXmqa-5SVqc&usqp=CAU" width={80} alt="Let's Talk About Sex TEDx Talk preview" />
          <div>
            <Text weight={500}>Let's Talk About Sex</Text>
            <Text size="sm" style={{ marginTop: 5 }}>by Al Vernacchio</Text>
            <Badge style={{ marginTop: 10 }}>Comprehensive sex education</Badge>
          </div>
        </a> 
      </li>


  </ul>
</Card>



{/* TOOLS */}
      <Card shadow="sm" style={{ marginTop: '20px' }}>
      <Text weight={500} style={{ marginBottom: '10px' }}>Tools</Text>
        <ul style={{ paddingLeft: '20px' , listStyle: "none" }}>

          <li style={{ padding: '20px' }}>
            <a href="https://www.bedsider.org/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div>
                <Text weight={500}>Bedsider</Text>
                <Text size="sm" style={{ marginTop: 5 }}>A website that provides information on birth control options and helps users find a method that works for them</Text>
                <Badge style={{ marginTop: 10 }}>Birth control information and support</Badge>
              </div>
            </a>
          </li>
          <li style={{ padding: '20px' }}>
            <a href="https://www.condomfinder.org/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div>
                <Text weight={500}>Condom Finder</Text>
                <Text size="sm" style={{ marginTop: 5 }}>An app that helps users find free condoms near their location</Text>
                <Badge style={{ marginTop: 10 }}>Free condom locator</Badge>
              </div>
            </a>
          </li>
          <li style={{ padding: '20px' }}>
            <a href="https://helloclue.com/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div>
                <Text weight={500}>Clue</Text>
                <Text size="sm" style={{ marginTop: 5 }}>A period and fertility tracking app that helps users understand their menstrual cycle and reproductive health</Text>
                <Badge style={{ marginTop: 10 }}>Period and fertility tracker</Badge>
              </div>
            </a>
          </li>

        </ul>
      </Card>


{/* Interactive tools or quizzes that can help users assess their knowledge of sex education and health: */}
<Card shadow="sm" style={{ marginTop: '20px' }}>
  <Text weight={500} style={{ marginBottom: '10px' }}>Interactive Tools and Quizzes</Text>
  <ul style={{ paddingLeft: '20px' , listStyle: "none" }}>

  <li style={{ padding: '20px' }}>
      <a href="https://www.ashasexualhealth.org/hpv-and-men-take-the-quiz/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Image src="https://cdn.riddle.com/embeds/v2/images/q_80,c_fill,w_960,h_540/fa8/fa8ffcb228c3503a4bbcb5d8e40078fb.png" width={80} alt="ASHA Sexual Health Quiz" />
        <div>
          <Text weight={500}>ASHA - What do you know about HPV and men? Quiz</Text>
          <Text size="sm" style={{ marginTop: 5 }}></Text>
          <Badge style={{ marginTop: 10 }}>Test your knowledge of how HPV infection affects men</Badge>
        </div>
      </a> 
    </li>

    <li style={{ padding: '20px' }}>
      <a href="https://www.plannedparenthood.org/online-tools/am-i-pregnant" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Image src="https://cdn.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/28/b9/28b9e83b-4ab5-4cae-8cbf-9e39e1bc1a92/08_pp_website_quiz-5-660x400.jpg__1200x900_q75_subsampling-2.jpg" width={80} alt="Planned Parenthood Sexual and Reproductive Health Quiz" />
        <div>
          <Text weight={500}>Planned Parenthood - Am I Pregnant? Quiz</Text>
          <Text size="sm" style={{ marginTop: 5 }}></Text>
          <Badge style={{ marginTop: 10 }}>Test your knowledge of pregnancy and taking a pregnancy test</Badge>
        </div>
      </a> 
    </li>

    <li style={{ padding: '20px' }}>
      <a href="https://www.scarleteen.com/article/advice/yes_no_maybe_so_a_sexual_inventory_stocklist" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Image src="https://www.scarleteen.com/sites/files/scarleteen/styles/article_image/public/article_images/yesnomaybe_sm.png?itok=rOA_pUmd" width={80} alt="Scarleteen Sexual Readiness Checklist" />
        <div>
          <Text weight={500}>Yes, No, Maybe So: A Sexual Inventory Stocklist</Text>
          <Text size="sm" style={{ marginTop: 5 }}></Text>
          <Badge style={{ marginTop: 10 }}>An inventory tool to help you identify your sexual preferences and boundaries</Badge>
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