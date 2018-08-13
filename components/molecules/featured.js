import Link from 'next/link'

import Card, { CardBody, CardTag, CardImage, CardTitle, CardSubtitle } from '../card'

export default ({ id, image, title, description, tags, direction = 'column', size = 'sm' }) => (
  <Link href={`/noticias/${id}`}>
    <Card direction={direction}>
      <CardImage src={image} size={size} />

      <CardBody>
        {tags.map(tag => (
          <Link key={tag.id} href={`/noticias/tag/${tag.id}`}>
            <CardTag color={tag.color}>{tag.name}</CardTag>
          </Link>
        ))}

        <CardTitle>{title}</CardTitle>

        {direction === 'row' && <CardSubtitle dangerouslySetInnerHTML={{ __html: description }} />}
      </CardBody>
    </Card>
  </Link>
)
