
import Searchbar from "./components/Searchbar";
import { CardGrid } from "./components/Card";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between items-center px-4 py-2">
  <h1 className="text-4xl text-center">Foodie</h1>
  <nav>
    <ul className="flex space-x-4 text-lg">
      <li><a href="#" className="hover:underline">Login</a></li>
      <li><a href="#" className="hover:underline">Register</a></li>
    </ul>
  </nav>
</header>


      <div className="mb-4"><Searchbar /></div>

      <CardGrid />
    </main>
  );
}
