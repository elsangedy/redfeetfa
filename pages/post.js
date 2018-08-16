import Affix from '../components/affix'
import Main from '../components/atoms/main'
import Menu from '../components/organisms/menu'
import Layout from '../components/templates/layout'

export default () => (
  <Layout>
    <Affix>
      <Menu />
    </Affix>

    <Main>OPA</Main>
  </Layout>
)
