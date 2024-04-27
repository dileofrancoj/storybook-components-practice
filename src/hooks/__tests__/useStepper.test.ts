import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useStepper } from '../useStepper'

describe('useStepper', () => {
  it('useStepper increments count correctly', () => {
    // Configura las props iniciales para tu hook
    const props = {
      defaultValue: 1,
      min: 1,
      withTrashIcon: true,
      max: 10,
      onStepperChange: vi.fn() // Puedes utilizar jest.fn() para simular una función
    }

    // Renderiza el hook en un contexto de prueba
    const { result } = renderHook(() => useStepper(props))

    // Accede a las funciones y valores devueltos por el hook
    const { increment, count } = result.current

    // Verifica que el contador comience con el valor predeterminado
    expect(count).toBe(1)

    // Incrementa el contador y verifica que el valor haya aumentado
    act(() => {
      increment()
    })

    expect(result.current.count).toBe(2)

    expect(props.onStepperChange).toHaveBeenCalled()
  })
})
