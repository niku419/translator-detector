import React,{ useState, useEffect } from 'react'
import { Container, Dropdown, Form, InputGroup } from 'react-bootstrap'
import {languages} from './languages' 
import { motion } from 'framer-motion'

export default function Translate() {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [langCode, setLangCode] = useState('')
  const [langName, setLangName] = useState('')
  const [convertLangCode, setConvertLangCode] = useState('')
  const [convertLangName, setConvertLangName] = useState('')
  const [language, setLanguage] = useState('')
  const [translatedLanguage, setTranslatedLanguage] = useState('')

  useEffect(() => {
    fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "b6cc997a59msh7a1cc7502c5d071p109b1cjsn997ec7228377",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com"
      },
      "body": {
        "q": language,
        "target": langCode,
        "source": convertLangCode
      }
    })
    .then(response => {
      console.log(response);
      setTranslatedLanguage(response.data.translations[0].translatedText)
    })
    .catch(err => {
      console.error(err);
    })
    
  }, [language, langCode, convertLangCode])

  function handleConvSelect(e) {
    setConvertLangCode(languages[e-1].code)
    setConvertLangName(languages[e-1].name)
    console.log(convertLangCode)
  }
  function handleSelect(e) {
    setLangCode(languages[e-1].code)
    setLangName(languages[e-1].name)
    console.log(langCode)
  }
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
  const CustomMenu2 = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          className={className}
          aria-labelledby={labeledBy}
          style={{overflowY: "scroll", maxBlockSize: "69vh"}}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Find your lang..."
            onChange={(e) => setValue2(e.target.value)}
            value={value2}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value2 || child.props.children.toLowerCase().startsWith(value2),
            )}
          </ul>
        </div>
      );
    },
  );
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div className="border rounded-top pl-4 pt-1">
      <a
        href="/"
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        style={{textDecoration: "none"}}
      >
        <div className="d-flex justify-content-between"><div>{children}</div><div className="pr-1">&#x25bc;</div></div>   
      </a>
    </div>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          className={className}
          aria-labelledby={labeledBy}
          style={{overflowY: "scroll", maxBlockSize: "69vh"}}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Find your lang..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="heading">Translate any Text</h1>
      <Container className="d-flex row ml-5 mt-5 justify-content-around">
        <Container className="col-md-12 col-lg-6 mb-5">
          <Container >
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                <>{langName || "Select Language"}</>
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomMenu}>
                {languages && languages.map((language, index) =>( 
                  <Dropdown.Item eventKey={index+1} key={index} onSelect={handleSelect}>{language.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
          <Container className="pt-2">
            <InputGroup sz="lg" style={{height: "40vh"}}>
              <Form.Control as="textarea" 
                aria-label="Large"
                className="area-for-text"
                value={language} 
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Enter Text here..."
                onChange={e => 
                  setLanguage(e.target.value)
                }
              />
            </InputGroup>
          </Container>
        </Container>
        <Container className="col-md-12 col-lg-6">
          <Container>
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {convertLangName || "Convert Language"}
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomMenu2}>
                {languages && languages.map((language, index) =>( 
                  <Dropdown.Item eventKey={index+1} key={index} onSelect={handleConvSelect}>{language.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
          <Container className="pt-2">
            <div sz="lg" className="border rounded area-for-text" style={{height: "40vh"}}>
              {translatedLanguage}
            </div>
          </Container>
        </Container>
      </Container>
      <div className="d-flex justify-content-between m-3" >
        <a className="btn primary m-2" href="/" role="button">Back to Home Page!!</a>
        <a className="btn primary m-2" href="/detect" role="button">Detect Lang</a>
			</div>
    </motion.div>
  )
}