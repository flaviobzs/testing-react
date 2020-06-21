import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

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
})