import BlogList from "../Components/index/BlogList";
import Categorys from "../Components/index/Categorys";
import Feature from "../Components/index/Feature";
import Header from "../Components/index/Header";
import ProductList from "../Components/index/ProductList";

export default function Home() {
  return (
    <>
      <Header />
      <Feature />
      <div className="container mx-auto">
        <Categorys />
      </div>
    </>
  );
}
