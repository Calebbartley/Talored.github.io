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
                <Card.Title className="font-link">Welcome To Talor'd Tales.</Card.Title>
                <Card.Text className='card-text'>
                  <p>Your home for Custom Erotic Stories</p>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </h1>
          <div>
            <h2 className="font-link-footer">
             
            </h2>
          </div>
        </div>
      </div>
    );
}

export default Home
