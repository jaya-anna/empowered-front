import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function InfoPage() {
  return (
    <>
      <section className="info-section"></section>

      <container
        className="info-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          backgroundColor: "#f2ebe9",
        }}
      >
        <div className="info-card">
          <Image
            src="../../images/contraception-new.jpg"
            alt="condom demo"
            height={175}
          />
          <hr color="gray" style={{ opacity: 0.2 }} />
          <div className="info-container-text">
            <h4>contraception</h4>
            <p>
              It involves the use of different techniques to prevent
              fertilization or implantation, such as condoms, birth control
              pills, intrauterine devices, cervical caps, diaphragms, or
              contraceptive injections. Contraception can be used by both men
              and women and can be effective at different rates, depending on
              the type used and how it is used. It is important to choose the
              right method that suits individual needs and lifestyles, and to
              use it consistently and correctly to maximize its effectiveness.
              Contraception does not protect against sexually transmitted
              infections, so it is essential to use additional protection such
              as condoms when having sex with a new partner or multiple
              partners. Proper education and access to contraception can help
              prevent unintended pregnancy and enable individuals to make
              informed choices about their sexual health.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image
            src="../../images/gender-identity.jpg"
            alt="gender identity"
            height={180}
          />
          <div className="info-container-text">
            <h4>pronouns</h4>
            <p>
              Pronouns are words used to refer to people, objects, or concepts
              without using their names. They are essential because they help to
              promote inclusivity and respect for gender identity. Pronouns can
              be he/him, she/her, they/them, or other gender-neutral pronouns
              such as ze/hir. It is important to use the correct pronouns for
              individuals as a way of affirming their gender identity and
              creating a safe and supportive environment. Gender identity is a
              personal and complex experience that may not align with the sex
              assigned at birth, and pronouns are a way to honor and validate
              that identity. Misgendering or using incorrect pronouns can be
              hurtful and contribute to feelings of invalidation and
              discrimination. As such, it is crucial to ask for and use the
              preferred pronouns of individuals and to educate oneself about the
              diverse range of gender identities and pronouns.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image src="../../images/flag.jpg" alt="flag" height={180} />

          <div className="info-container-text">
            <h4>LGBTIQ </h4>
            <p>
              LGBTIQ stands for Lesbian, Gay, Bisexual, Transgender, Intersex,
              and Queer (or Questioning). It is an acronym used to represent the
              diversity of sexual orientations and gender identities. Lesbian
              refers to women who are attracted to other women, while gay refers
              to men who are attracted to other men. Bisexual refers to
              individuals who are attracted to people of more than one gender.
              Transgender is a term used to describe individuals whose gender
              identity does not align with their sex assigned at birth. Intersex
              refers to individuals whose physical sex characteristics do not
              fit traditional male or female classifications. Queer or
              Questioning is an umbrella term used to describe individuals who
              do not fit traditional sexual orientation or gender identity
              labels or who are still exploring their identities. The LGBTIQ
              community is diverse, and members may experience discrimination
              and marginalization based on their sexual orientation or gender
              identity.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image
            src="../../images/gender-spectrum.jpg"
            alt="gender"
            height={180}
          />

          <div className="info-container-text">
            <h4>gender spectrum</h4>
            <p>
              The gender spectrum is a model that acknowledges that gender
              identity is not binary (male or female), but exists on a continuum
              that includes a range of identities and expressions. It recognizes
              that gender is a complex and multifaceted experience that is
              shaped by biological, social, and cultural factors. The gender
              spectrum includes various identities such as transgender,
              genderqueer, non-binary, and gender-nonconforming, among others.
              Each identity may have different expressions of gender, and
              individuals may experience their gender identity in diverse ways.
              The gender spectrum emphasizes the importance of respecting and
              affirming diverse gender identities and expressions, recognizing
              that there is no one way to be male or female. It also challenges
              traditional gender norms and stereotypes, promoting freedom of
              expression and self-determination.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image
            src="../../images/mens-cup.jpg"
            alt="cup"
            height={180}
          />

          <div className="info-container-text">
            <h4>menstruation cup</h4>
            <p>
              A menstruation cup, also known as a menstrual cup, is a reusable,
              bell-shaped device used to collect menstrual blood during
              menstruation. It is made of medical-grade silicone, rubber, or
              latex and is inserted into the vagina, where it forms a seal to
              prevent leaks. Menstruation cups are eco-friendly and
              cost-effective alternatives to traditional disposable menstrual
              products such as pads and tampons. They can be worn for up to 12
              hours and are suitable for women of all ages and sizes.
              Menstruation cups may require a learning curve to use correctly,
              but with practice, they can offer a comfortable and convenient
              option for managing menstrual flow. It is essential to follow
              proper hygiene and cleaning practices when using menstruation cups
              to prevent infections and ensure their longevity. Overall,
              menstruation cups are a sustainable and practical choice for
              managing menstruation.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image src="../../images/toys.jpg" alt="toys" height={180} />

          <div className="info-container-text">
            <h4>sex toys</h4>
            <p>
              Sex toys are devices or objects used for sexual pleasure and
              stimulation. They come in a wide variety of shapes, sizes, and
              materials, and can be used alone or with a partner. Sex toys can
              enhance sexual pleasure and intimacy, help individuals explore
              their bodies and desires, and provide a safe and healthy outlet
              for sexual expression. Common types of sex toys include vibrators,
              dildos, anal plugs, penis rings, and erotic games. It is essential
              to use sex toys safely and to follow proper cleaning and
              maintenance practices to prevent infections and prolong their
              lifespan. It is also important to communicate openly and honestly
              with partners about the use of sex toys and to respect individual
              boundaries and preferences. Using sex toys can be a healthy and
              enjoyable way to explore sexuality, but it is ultimately a
              personal choice that should be made with care and consideration.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image src="../../images/period.jpg" alt="cycle" height={180} />

          <div className="info-container-text">
            <h4>menstruation cycle</h4>
            <p>
              The menstruation cycle, also known as the menstrual cycle, is a
              physiological process that occurs in the female reproductive
              system. It involves the regular shedding of the lining of the
              uterus, resulting in the release of blood and other materials from
              the vagina. The cycle typically lasts for 28 days, although it can
              vary among individuals and can range from 21 to 35 days. It is
              regulated by the hormones estrogen and progesterone, which control
              the growth and shedding of the uterine lining. Menstruation is a
              normal and healthy process that signals fertility, but it can also
              be accompanied by physical and emotional symptoms such as cramps,
              bloating, and mood changes.{" "}
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image
            src="../../images/clitoris.jpg"
            alt="clitoris"
            height={180}
          />

          <div className="info-container-text">
            <h4>vulva</h4>
            <p>
              The outer female genitalia, also known as the vulva, includes
              several parts, such as the mons pubis, labia majora, labia minora,
              clitoris, clitoral hood, and vaginal opening. The mons pubis is
              the tissue above the pubic bone, while the labia majora and labia
              minora are the folds of skin surrounding the vaginal opening. The
              clitoral hood is the fold of skin covering the clitoris. The
              clitoris is a highly sensitive organ located above the vaginal
              opening and is a primary source of sexual pleasure for many
              individuals. The vaginal opening is the entry point to the vagina,
              a muscular canal that connects the uterus to the external
              genitalia.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image
            src="../../images/safe-sex.jpg"
            alt="legs bed"
            height={180}
          />{" "}
          <div className="info-container-text">
            <h4>consent and safe sex</h4>
            <p>
              Consent and safe sex are two critical aspects of sexual activity
              that should always go hand in hand. Consent refers to the
              voluntary agreement between all parties involved in a sexual
              encounter, and it should be obtained before any sexual activity
              takes place. Both parties should communicate their boundaries and
              make sure they are respected throughout the entire encounter. It's
              important to note that a lack of explicit consent or any
              indication of reluctance or discomfort means that the sexual
              activity is not consensual. Safe sex practices, such as using
              barrier methods like condoms and dental dams, can reduce the risk
              of sexually transmitted infections (STIs) and unintended
              pregnancies. It is important to discuss safe sex practices and
              consent with sexual partners. So talk about it. And keep in mind:
              "no means no"!
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image
            src="../../images/education.jpg"
            alt="education"
            height={180}
          />

          <div className="info-container-text">
            <h4>sex education</h4>
            <p>
              Sex education is crucial in promoting healthy sexual behavior,
              preventing unwanted pregnancies, and reducing the spread of
              sexually transmitted infections. It equips individuals with the
              knowledge and skills needed to make informed decisions about their
              sexual health and relationships. Sex education covers a wide range
              of topics, including reproductive anatomy, contraception, STIs,
              consent, and healthy relationships. It also includes discussions
              on gender identity, sexual orientation, and diversity. By
              providing comprehensive sex education, individuals are empowered
              to make informed decisions about their bodies and relationships
              and to develop positive attitudes toward sexuality.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image
            src="../../images/body-choice.jpg"
            alt="body choice"
            height={180}
          />

          <div className="info-container-text">
            <h4>"my body, my choice"</h4>
            <p>
              The statement "my body, my choice" affirms an individual's right
              to make decisions about their own body, health, and well-being. It
              is used in the context of reproductive rights and access to
              healthcare, where individuals should have the autonomy to make
              decisions about their bodies without interference or judgment from
              others. It acknowledges the importance of bodily autonomy and
              consent, where individuals have the right to make choices about
              their own bodies, free from coercion or pressure. It is an
              important reminder that every person has the right to make
              decisions about their own lives, and those decisions should be
              respected and supported by society.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image src="../../images/uterus.jpg" alt="uterus" height={180} />

          <div className="info-container-text">
            <h4>inner female genitalia</h4>
            <p>
              The inner female genitalia includes reproductive organs. The
              vagina is a muscular canal that connects the cervix to the
              external genitalia. It is also the passageway for menstrual blood
              and childbirth. The cervix is the lower part of the uterus that
              protrudes into the vagina and plays a vital role in protecting the
              uterus from infection. The uterus is a pear-shaped organ that
              houses and nourishes a developing fetus during pregnancy. The
              fallopian tubes are two thin tubes that transport the egg from the
              ovary to the uterus and are the site of fertilization by the
              sperm. The ovaries are two almond-shaped organs that produce and
              release the eggs and secrete the hormones estrogen and
              progesterone. The menstrual cycle is regulated by the interaction
              between the ovaries and the pituitary gland in the brain.
              Menopause marks the end of reproductive function, and it is
              characterized by a cessation of menstruation and a decline in
              hormone production.
            </p>
          </div>
        </div>

        <div className="info-card">
          <Image
            src="../../images/drag-queens.jpg"
            alt="drag queens"
            height={180}
          />

          <div className="info-container-text">
            <h4>Drag queens and kings</h4>
            <p>
              Drag queens and kings are performers who use clothing, makeup, and
              other accessories to transform themselves into exaggerated
              versions of gender norms. They are often associated with the
              LGBTQ+ community and are popular performers in drag shows and
              other entertainment venues. Drag queens and kings may identify as
              cisgender or transgender and may use drag as a form of
              self-expression or artistic expression. Drag performances often
              challenge traditional gender roles and stereotypes and can provide
              a platform for social and political commentary. Drag culture has a
              long history and has been celebrated in various communities
              worldwide. Drag performers continue to push boundaries and
              challenge societal norms around gender and sexuality. Regenerate
              response
            </p>
          </div>
        </div>
        <div className="info-card">
          <Image
            src="../../images/transgender.jpg"
            alt="transgender"
            height={180}
          />

          <div className="info-container-text">
            <h4>transgender</h4>
            <p>
              Transgender refers to a person whose gender identity does not
              align with the sex they were assigned at birth. It is an umbrella
              term that encompasses a wide range of gender identities and
              expressions that differ from traditional male and female
              categories. Transgender individuals may identify as non-binary,
              genderqueer, or another gender identity. Many transgender
              individuals may experience gender dysphoria, a feeling of distress
              or discomfort associated with the incongruence between their
              gender identity and their sex assigned at birth. Transgender
              individuals may undergo medical or social transitions, such as
              hormone therapy or gender-affirming surgery, to align their
              physical appearance with their gender identity.
            </p>
          </div>
        </div>
        <div className="info-card">
          <Image
            src="../../images/love-your-body.jpg"
            alt="love your body"
            height={180}
          />

          <div className="info-container-text">
            <h4>body acceptance</h4>
            <p>
              Body acceptance and self-love are essential components of mental
              and physical well-being. It is a vital aspect of promoting body
              acceptance and positive body image. Self-love involves accepting
              oneself for who they are, embracing one's uniqueness, and
              cultivating a positive relationship with oneself. A lack of body
              acceptance and self-love can lead to negative body image, low
              self-esteem, and mental health issues such as anxiety and
              depression. Promoting body acceptance and self-love involves
              encouraging positive self-talk, practicing self-care regularly,
              and challenging societal beauty standards. It is essential to
              understand that every individual's body is unique, and there is no
              one-size-fits-all standard for beauty or physical appearance.
              Regenerate respon
            </p>
          </div>
        </div>
      </container>
    </>
  );
}

export default InfoPage;
