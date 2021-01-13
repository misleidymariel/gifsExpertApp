import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from "@testing-library/react-hooks";


describe('Pruebas en hook <useFetchGifs/>', () => {

    test('debe de retornar el estado inicial ', async () => {

         const { result, waitForNextUpdate } =renderHook( () => useFetchGifs( 'One Punch') );
         const { data, loading } = result.current;

         await waitForNextUpdate();
         //console.log( data, loading);
         expect( data).toEqual([]);
         expect( loading).toBe( true);
           //const { data , loading} = useFetchGifs( 'One Punch');  
        
    })
    
    test('debe de retornar un arreglo de imgs y el loading en false ', async() => {
      //waitForNextUpdate funsion que retorna una promesa no retorna nada

      const { result, waitForNextUpdate} = renderHook( () => useFetchGifs('One punch'));
      await waitForNextUpdate();

      const { data, loading } = result.current;

      expect( data.length).toBe( 10);
      expect( loading).toBe( false);
    })
    


})
