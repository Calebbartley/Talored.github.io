import React from 'react'
import {Card} from 'react-bootstrap'
import './About.css'


function About() {
    return (
        <div className='About'>
        <div>
          <img class="card-img-top" src="images/image1.jpeg" alt="Card-cap"/>
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        
        <h1 className="Text">
          <Card className="about-card">
            <Card.ImgOverlay>
              <Card.Title className="font-link">About me</Card.Title>
              <Card.Body>
              <p>
                Spoken word artist , Talor’d Tales, was born in Saint Louis ,
                Missouri in 1994. She developed a passion for creative writing
                at an early age ; she loved the freedom of constructing a
                concept that expressed her imagination. Through her
                educational career, she excelled in English, winning writing
                and speech competitions, while also writing and editing papers
                for classmates. Though she excelled in school, she experienced
                various avenues of mental abuse through boys bullying and
                parental figures, leading her to attempt suicide in 2015. In
                this dark era, poetry found her. A notebook became her
                therapist while a pen became her voice allowing her to
                vocalize her depression. She later channeled her trauma from
                being body shamed to embracing her body and sexuality. An
                alchemist, she transmuted those painful encounters into her
                weapons of empowerment by writing and performing erotic
                poetry. After a failed relationship, she found herself lacking
                pleasure from her partner leading her to live through others’
                sexual desires, birthing Talor’d Tales, LLC. Both avenues
                became the foundation of shifting the patriarchy paradigm.
                Since a child, she has always challenged the traditional norm
                of conduct and conformity to gender roles. Talor’d gives a
                voice to those who are liberated and sexually expressive,
                slowly but surely erasing the stigma of sex as taboo.
                </p>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </h1>
      </div>
        </div>
    )
}

export default About
