import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import {addTech} from '../../src/store/modules/techs/actions'

import TechListRedux from '../../src/components/TechListRedux'

//funções ficticias irao sobrescrever as funções do componente
jest.mock('react-redux')

describe('TechList component', () => {
  it('should render tech list', ()=>{
    //quando o componente chamar o useSelecto
    useSelector.mockImplemmentation(callback => callback({
      //será retornado isso aqui
      techs: ['Node.js', 'ReactJS']
    }))

    const {getByTestId, getByText, debug} = render(<TechListRedux/>)

    debug()

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'))
  })

  it('should be able to add new tech', ()=>{
    const { getByTestId, getByLabelText } = render(<TechListRedux/>);
    
    //mock da função 
    const dispatch = jest.fn();

    //quando o useDispatch for chamado no componente, será retornado o mock do jest (criado acima)
    useDispatch.mockReturnValue(dispatch)

    fireEvent.change(getByLabelText('Text'), { target: { value: 'Node.js'}})
    fireEvent.submit(getByTestId('tech-form'))

    //imprimir todas as chamadas que a funçao dispach aconteceu
    console.log(dispatch.mock.calls)

    // expect(dispatch).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'))
  })
})