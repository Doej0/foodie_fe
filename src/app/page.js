
import Searchbar from "./components/Searchbar";
import {CardGrid} from "./components/Card";

export default function Home() {
  return (
    <main>
      <header><h1 className="text-4xl text-center mt-4 mb-4">Foodie</h1></header>
     
    
     <div className="container mb-4"><Searchbar/></div>
  
      <CardGrid/>
    </main>
  );
}
