import * as utils from '../../../src/app/helper/utils'

test('getPokeName returns name of Pokemon corresponding to its ID', ()=> {
    expect(utils.getPokeName(1)).toBe('Bulbasaur')
    expect(utils.getPokeName(151)).toBe('Mew')
})
