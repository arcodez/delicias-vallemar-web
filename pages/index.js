import React from "react"
import { about } from "../components/config"
import { empresa } from "../components/miconfig"
import { Container, Button, Box } from "react-bulma-components"
import Layout from "../components/Layout/Layout"

function index() {
  return (
    <Layout>
      <Container>
        <h1>Este es un titulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati
          quaerat, officia delectus quia excepturi ex temporibus corporis
          consequuntur sequi impedit vitae dolore ipsa eos provident. Voluptatem
          ab nihil culpa aliquam quaerat blanditiis amet explicabo sequi
          deleniti unde ipsa eius laudantium impedit, porro, repudiandae aliquid
          earum non ad corrupti consequuntur.
        </p>
        <center>
          <Button color="secondary">Este es un boton</Button>
        </center>
      </Container>
    </Layout>
  )
}

export default index
