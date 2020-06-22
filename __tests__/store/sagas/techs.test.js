//resposnsavel por executar um saga
import {runSaga} from 'redux-saga'

import {getTechsSuccess} from '../../../src/store/modules/techs/actions'
import {getTechs} from '../../../src/store/modules/techs/sagas'

describe('Techs sagas', ()=> {
  it('should be able to fetch techs', async () => {
    
    const dispatch = jest.fn();

    // monitorar o saga e toda vez que for chamado uma função, será sobrescrita pela dispacth do jest 
    //simular o efeito de put do saga
    await runSaga({dispatch}, getTechs).toPromise();
       
    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['Node.js']))
  })
})