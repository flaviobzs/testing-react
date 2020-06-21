import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import TechList from '../../src/components/TechList'

describe('TechList component', () => {
  it('should be able to add new tech', () => {
    //criar um arquivo e renderizar um HTML/DOM fake para realizar as verificações
    //retorna metodos para selecionar elementos dentro do component indicado
    
    // <button>Adicionar</button> ==> getByText('Adicionar') selecionar elemento que tenha o texto indicado
    
    // <button data-testid="xxxx"></button> ==> getByTextId('xxxx') selecionar elemento que tenha a propriedade data-testid indicada
    
    // getByLabelText - selecionar o input relacionado a propriedade htmlFor da label 
      // <label htmlFor="tech">Tech</label>
      // <input id='tech'>
    const { getByText, getByTestId, debug, getByLabelText } = render(<TechList/>);

    //console.log da estrutura do html gerada para visualizar como está sendo renderizado com as ações no component
    // debug()
    // simular ações/eventos que um usuario irá realizar
    // fireEvent.click(getByText('Adicionar'));
    // debug()
    // expect(getByText('Node.js')).toBeTruthy()
    // expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))

    fireEvent.change(getByLabelText('Text'), { target: { value: 'Node.js'}})
    fireEvent.submit(getByTestId('tech-form'))
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
    expect(getByLabelText('Tech')).toHaveValue('')
    
  })
})