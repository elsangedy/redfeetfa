import { Container, Row } from 'styled-bootstrap-grid'

import Section from '../atoms/section'
import SectionTitle from '../atoms/section-title'
import SponsorItem from '../molecules/sponsor-item'

export default ({ items }) => (
  <Section>
    <Container>
      <SectionTitle>PATROCINADORES</SectionTitle>

      <Row>
        {items.map(item => (
          <SponsorItem key={item.id} {...item} />
        ))}
      </Row>
    </Container>
  </Section>
)
