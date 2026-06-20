import { getdata, mutation } from "../mutation"

export const myRecipes = async(id) => {
    return getdata(`/api/recipes/${id}`)
}

export const myRecipesCount = async(id) => {
    return getdata(`/api/recipes/like/${id}`)
}

// export const allRecipes = async(search,category) => {
//     if(search && category){
//         return getdata(`/api/recipes?search=${search}&category=${category}`)
//     }
//     else if(category){
//         return getdata(`/api/recipes?category=${category}`)
//     }
//     else if(search){
//         return getdata(`/api/recipes?search=${search}`)
//     }
//     else{
//         return getdata(`/api/recipes`)
//     }
// }

export const allRecipes = async (search,category,page = 1) => {
  const params = new URLSearchParams();

  if(search){
    params.append("search", search);
  }
  if(category){
    params.append("category", category);
  }

  params.append("page", page);
  params.append("limit", 8);

  return getdata(`/api/recipes?${params.toString()}`);
};

export const singleRecipes = async(id) => {
    return getdata(`/api/recipes/single/${id}`)
}

export const singleSavedRecipes = async(id) => {
    return getdata(`/api/recipes/save/data/${id}`)
}

export const singleCountRecipes = async(v,id) => {
    return mutation(v,`/api/recipes/like/count/${id}`,'PATCH')
}

export const reportRecipe = async(v) => {
  return mutation(v, '/api/recipes/report', 'POST')
}

export const addRecipes = async(v) => {
    return mutation(v,`/api/recipes`,`POST`)
}

export const updateRecipe = async(v,id) => {
    return mutation(v,`/api/recipes/edit/${id}`,'PATCH')
}

export const saveRecipeData = async(v) => {
    return mutation(v,`/api/recipes/save`,'POST')
}

export const deleteRecipeButton = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/delete/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    return data
}

export const deleteSaveButton = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/save/delete/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    return data
}

export const getReportStatus = async (recipeId, userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/report/status/${recipeId}/${userId}`
  );
  return res.json();
};