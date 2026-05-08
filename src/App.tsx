import { ReactElement } from "react";
import Recipe from "./components/Recipe";
import dog from "./assets/images/dog.jpg";
import Image from "./components/Image";

export default function App(): ReactElement {
  return (
    <>
      <Recipe name="Сырные палочки" />
      <Image src={dog} alt="Собака в шарфике"/>
    </>
  );
}
