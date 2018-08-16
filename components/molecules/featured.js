import Link from 'next/link'

import { RichText } from 'prismic-reactjs'

import Card, { CardBody, CardTag, CardImage, CardTitle, CardSubtitle } from '../atoms/card'

export default ({ slug, data: { title, image, resume }, direction = 'column', size = 'sm' }) => (
  <Link href={`/noticias/${slug}`}>
    <Card direction={direction}>
      <CardImage src={image.small.url} size={size} />

      <CardBody>
        {/* {tags.map(({ tag }) => (
          <Link key={tag.uid} href={`/tags/${tag.uid}`}>
            <CardTag color={tag.color}>{tag.name}</CardTag>
          </Link>
        ))} */}

        <CardTitle>{title[0].text}</CardTitle>

        {direction === 'row' && <CardSubtitle>{RichText.render(resume)}</CardSubtitle>}
      </CardBody>
    </Card>
  </Link>
)
