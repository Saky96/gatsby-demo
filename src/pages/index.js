import React from "react"
import Layout from "../components/Layout";
import { ExampleButton } from "../components/Button";
export default function Home() {
  return (
    <Layout>
      Hello people!
      <ExampleButton>Click me</ExampleButton>
    </Layout>
  )
}
