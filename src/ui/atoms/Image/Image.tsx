import * as React from 'react'

import { type Props } from './Image.props'
import * as Styled from './Image.styled'

export const Image: React.FC<Props> = ({
  src,
  alt,
  thumbnail,
  lazyLoad,
  maxWidth,
  onImageClick,
  ...props
}) => {
  /*
      En resumen, "src" se usa para especificar la
      fuente de un recurso que se carga inmediatamente, mientras que
      "data-src" se puede utilizar como una referencia para cargar recursos
      de forma diferida o bajo demanda,
  */
  return (
    <Styled.Container onClick={onImageClick}>
      <Styled.Image
        src={src}
        alt={alt}
        thumbnail={thumbnail}
        maxWidth={maxWidth}
        loading={lazyLoad !== undefined ? 'lazy' : undefined}
        data-src={lazyLoad !== undefined ? src : null}
        {...props}
      />
    </Styled.Container>
  )
}
