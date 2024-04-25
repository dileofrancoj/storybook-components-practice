/*
user-event is a companion library for Testing Library that
simulates user interactions by dispatching the events that would happen if
the interaction took place in a browser.
    ¡Documentation!

    https://testing-library.com/docs/user-event/intro/
*/
// import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import React from 'react'

export function createRender<TProps>(Component: React.ComponentType<TProps>) {
    return (props: Partial<TProps> = {}) => ({
      // user: userEvent.setup(),
      // @ts-expect-error omit required props
      ...render(<Component {...props} />, {
        // wrapper : '' Acá puede ir el wrapper de un provider que se quiera aplicar al componente
      })
    })
  }
  