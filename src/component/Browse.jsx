import { allRecipes } from '@/lib/api/customer/recipe';
import RecipeCards from './RecipeCards';
import Searching from './Serching';
import Pagination from './Pagination';

const Browse = async ({ search, category, page }) => {
  const data = await allRecipes(search, category, page);

  return (
    <div className="max-w-[80%] mx-auto">
      <h2 className="text-2xl font-bold my-5 w-fit bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Browse Page
      </h2>
      <Searching s={search} c={category} />
      <RecipeCards recipes={data.recipes} />
      <Pagination
        totalPages={data.totalPages}
        currentPage={data.currentPage}
        search={search}
        category={category}
      />
    </div>
  );
};

export default Browse;