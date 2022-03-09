import { getGifs } from'../helpers/getGifs'

describe('Pruebas con getGifts Fetch', () => {
 
  test('Debe traer 10 elementos', async () => {
    const gifs = await getGifs('vegeta');
    expect(gifs.length).toBe(10)
  });

  test('Debe traer 0 elementos si no se envia argumento', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0)
  });

});