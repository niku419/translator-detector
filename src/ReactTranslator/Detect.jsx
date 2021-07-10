import React, { useState, useEffect} from 'react'
import {languages} from './languages'
import { Container, InputGroup, Form, Badge} from 'react-bootstrap'
import { motion } from 'framer-motion';

export default function Detect() {
  const [detectLanguage, setDetectLanguage] = useState("")
  const [detectedLang, setDetectedLang] = useState("")
  const variants = {
    hidden :{
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 1 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' }
    }
  }
  useEffect(() => {
    fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/detect", {
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "b6cc997a59msh7a1cc7502c5d071p109b1cjsn997ec7228377",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com"
      },
      "body": {
        "q": detectLanguage
      }
    })
    .then(response => {
      const some =  languages.find(value => value.code === response.data.detections[0][0].language)
      setDetectedLang(some.name)
    })
    .catch(err => {
      console.error("error occured");
    });
    }, [detectLanguage])

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="heading">Detect Language</h1>
      <Container className="d-flex flex-row mt-5">
        <Container className="pt-2">
          <InputGroup sz="lg" style={{height: "40vh"}}>
            <Form.Control 
              as="textarea" 
              aria-label="Large"
              className="area-for-text"
              value={detectLanguage} 
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Enter Text here..."
              onChange={e => 
                setDetectLanguage(e.target.value)
              }
            />
          </InputGroup>
          </Container>
        <Container style={{display: "grid", placeItems: "center"}}>
          <h1><Badge variant="primary">{detectedLang || "Detected Lang"}</Badge></h1>
        </Container>
      </Container>
      <div className="d-flex justify-content-between m-5" >
        <a className="btn primary" href="/" role="button">Back to Home Page!!</a>
        <a className="btn primary" href="/translate" role="button">Translate text</a>
			</div>
    </motion.div>
  )
}