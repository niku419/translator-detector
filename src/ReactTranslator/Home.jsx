import React from 'react'
import Translate from './Translate.jsx'
import Detect from './Detect.jsx'
import Main from './Main.jsx'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter >
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
        <Route exact path="/translate" component={Translate} />
        <Route exact path="/detect" component={Detect} />
      </Switch>
    </AnimatePresence>
  )
}
