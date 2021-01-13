import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from "@testing-library/react-hooks";


describe('Pruebas en hook <useFetchGifs/>', () => {

    test('debe de retornar el estado inicial ', () => {

         const { result } =renderHook( () => useFetchGifs( 'One Punch') );
         const { data, loading } = result.current;

         console.log( data, loading);


       //const { data , loading} = useFetchGifs( 'One Punch');
       
        
    })
    
    
})
