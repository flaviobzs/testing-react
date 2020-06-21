import {render, fireEvent} from '@testing-library/react'

import TechList from '../../src/components/TechList'

describe('TechList component', () => {
  it('should be able to add new tech', () => {
    //criar um arquivo e renderizar um HTML/DOM fake para realizar as verificações
    //retorna metodos para selecionar elementos dentro do component indicado
    const { getByText } = render(<TechList/>);

    fireEvent.click(getByText('Adicionar'));

    expect(getByText('Node.js')).toBe()
  })
})