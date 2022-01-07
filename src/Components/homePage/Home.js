import React from 'react'
import './Home.css'
import { Card  } from 'react-bootstrap'

function Home() {
    return (
      <div className='home'>
        <header className="font-link">
        </header>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1 className="Text">
            <Card className="bg-dark text-white">
              <Card.ImgOverlay>
                <Card.Title className="font-link">Welcome To Talor'd Tales.<p> Your home for Custom Erotic Stories</p></Card.Title>
                <Card.Text>

                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </h1>
        </div>
      </div>
    );
}

export default Home
