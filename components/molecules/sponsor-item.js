import Sponsor from '../atoms/sponsor'
import SponsorCol from '../atoms/sponsor-col'

export default item => (
  <SponsorCol md="6" lg="4">
    <Sponsor src={item.image.url} alt={item.name.text} />
  </SponsorCol>
)
