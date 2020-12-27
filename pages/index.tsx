import Layout from '../components/Layout'
import config from '../config/app-config';

const IndexPage = () => (
  <Layout>
    <h1 className="title">{ config.title }</h1>
    <p> Software Developer @ SSENSE </p>
    <p> Technical Coach @ Journey Education </p>
    <br />
    <a href="mailto:me@quinnlangille.com" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>email</a>
  </Layout>
)

export default IndexPage
