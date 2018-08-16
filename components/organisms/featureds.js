import { Fragment } from 'react'
import { Row, Col } from 'styled-bootstrap-grid'

import Card from '../atoms/card'
import Featured from '../molecules/featured'

export default ({ featured1, featured2, featured3, featured4 }) => (
  <Fragment>
    <Row>
      <Col md="6">
        <Featured {...featured1} />
      </Col>
      <Col md="6">
        <Featured {...featured2} />
      </Col>
    </Row>

    <Row>
      <Col>
        <Featured {...featured3} direction="row" size="md" />
      </Col>
    </Row>

    <Row>
      <Col>
        <Card>
          <iframe
            title={featured4.title}
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${featured4.embed_url.substring(
              featured4.embed_url.indexOf('=') + 1
            )}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </Card>
      </Col>
    </Row>
  </Fragment>
)
