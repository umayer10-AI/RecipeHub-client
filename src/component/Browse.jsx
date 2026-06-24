import { allRecipes } from "@/lib/api/customer/recipe";
import RecipeCards from "./RecipeCards";
import Searching from "./Serching";
import Pagination from "./Pagination";
import Reveal from "./Reveal";

const Browse = async ({ search, category, page }) => {
  const data = await allRecipes(search, category, page);

  return (
    <div className="max-w-[80%] mx-auto">
      <Reveal>
        <h2 className="my-5 w-fit bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
          Browse Page
        </h2>
      </Reveal>

      <Reveal>
        <Searching s={search} c={category} />
      </Reveal>

      <Reveal>
        <RecipeCards recipes={data.recipes} />
      </Reveal>

      <Reveal>
        <Pagination
          totalPages={data.totalPages}
          currentPage={data.currentPage}
          search={search}
          category={category}
        />
      </Reveal>
    </div>
  );
};

export default Browse;