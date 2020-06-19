import React from 'react'

import {render, waitFor, fireEvent } from '@testing-library/react'

import Todo from './index'

describe('Tests for Todo component', () => {
  it('Should add new task when from has been submitted', async ()=>{
    //renderizar o componente
    const {getByTestId, getByText} = render(<Todo/>)

    //buscar o input
    const fieldNode = await waitFor(
      ()=> getByTestId('form-field')
    )
    
    //digitar no input
    const newTask = 'testing'
    fireEvent.change(
      fieldNode,
      { target: {value: newTask}}
    )

    expect(fieldNode.value).toEqual(newTask)

    //buscar o botao
    const btnNode = await waitFor(
      ()=> getByTestId('form-btn')
    )

    //clicar no botao
    fireEvent.click(btnNode)

    //buscar a tabela
    // const tableNode = await waitForElement(
    //   ()=> getByTestId('form-btn')
    // )

    //verificar se a tarefa foi adicionada na tabela
    const tdNode = await waitFor(
      ()=> getByText(newTask)
    )
    expect(tdNode).toBeDefined()
  })
})