import React from "react"
import Layout from "../components/Layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me</h1>
      <p>
        Check my{" "}
        <a
          href="https://github.com/Choups"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
