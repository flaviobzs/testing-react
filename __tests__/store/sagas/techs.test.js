//resposnsavel por executar um saga
import {runSaga} from 'redux-saga'
import MockAdapter from 'axios-mock-adapter'
import api from '../../../src/services/api'

import {getTechsSuccess, getTechsFailure} from '../../../src/store/modules/techs/actions'
import {getTechs} from '../../../src/store/modules/techs/sagas'

const apiMock = new MockAdapter(api)

describe('Techs sagas', ()=> {
  it('should be able to fetch techs', async () => {
    
    const dispatch = jest.fn();
    
    //interceptar as chamadas a api no saga
    apiMock.onGet('techs').reply(200, ['Node.js'])

    // monitorar o saga e toda vez que for chamado uma função, será sobrescrita pela dispacth do jest 
    //simular o efeito de put do saga
    await runSaga({dispatch}, getTechs).toPromise();
       
    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['Node.js']))
  })

  it('should fail when api returns error', async () => {
    
    const dispatch = jest.fn();
    
    apiMock.onGet('techs').reply(500)

    await runSaga({dispatch}, getTechs).toPromise();
       
    expect(dispatch).toHaveBeenCalledWith(getTechsFailure())
  })
  
})