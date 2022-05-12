import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas sobre GifGridItem", () => {
  const title = "Titulo de prueba";
  const url = "https:localhost/Prueba.jpg";
  console.log(title);
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("Mostrar componente GifGridItem", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un párrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener card animate__animated animate__fadeIn', () =>{

    const div = wrapper.find('div');
    const value = div.prop('className');

    expect(value.endsWith('animate__fadeIn')).toBe(true)

  })
});
