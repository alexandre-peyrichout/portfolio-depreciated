import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>I'm 31 and living in Bordeaux</p>
      <Link to="/contact">Wanna reach out ?</Link>
    </Layout>
  )
}

export default AboutPage
