import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'

import TechList from '../../src/components/TechList'

describe('TechList component', () => {
  //limpar o localstorage antes de cada teste para um não influenciar o outro
  beforeEach(()=>{
    //nao é responsabilidade do app testar que essa funcionalidade externa está funcionando
    //criar mocks (funcionamentos ficticios)
    localStorage.clear()
  })

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

  it('should store techs in storage', ()=>{
    let { getByTestId, getByLabelText, getByText } = render(<TechList/>);
    
    fireEvent.change(getByLabelText('Text'), { target: { value: 'Node.js'}})
    fireEvent.submit(getByTestId('tech-form'))

    //dar um refresh na pagina e verificar se o dando continua salvo no localstorage

    //limpar o DOM
    cleanup()

    //renderizar novamento o componente e verificar se os dados continuam
    ({ getByTestId, getByLabelText, getByText } = render(<TechList/>))

    expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify('Node.js'))
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))

  })
})