import Sponsor from '../atoms/sponsor'
import SponsorCol from '../atoms/sponsor-col'

export default ({ url, name }) => (
  <SponsorCol md="6" lg="4">
    <Sponsor src={require(`../../static/patrocinadores/${url}`)} alt={name} />
  </SponsorCol>
)
