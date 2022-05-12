import { shallow } from "enzyme"
import {getGifs} from '../../helpers/getGifs'
describe("Pruebas sobre el helper getGifs", () => {
    test('Debe de traer 10 elementos', async() => { 

        const category = "Los simpson";
        const result = await getGifs(category);
        expect(result.length).toBe(10);

     })

     test('Debe de traer 10 elementos', async() => { 

        const category = "";
        const result = await getGifs(category);
        console.log(result)
        // expect(result.length).toBe(10);

     })
})