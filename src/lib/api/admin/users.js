import { mutation } from "../mutation"

const BaseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const countUsers = async (token) => {
    const res = await fetch(`${BaseUrl}/api/admin/users`,{
        headers: {
            authorization: `Bearer ${token}`,
            cache: 'no-store'
        }
    })
    return res.json()
}

export const countRecepies = async (token) => {
    const res = await fetch(`${BaseUrl}/api/admin/recipes`,{
        headers: {
            authorization: `Bearer ${token}`,
            cache: 'no-store'
        }
    })
    return res.json()
}

export const countPremium = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/premium`,{
        cache: 'no-store'
    })
    return res.json()
}

export const reportsListings = async () => {
    const res = await fetch(`${BaseUrl}/api/recipes/report/list`,{
        cache: 'no-store'
    })
    return res.json()
}

export const adminDeleteRecipeItem = async (id,token) => {
    const res = await fetch(`${BaseUrl}/api/admin/recipe/delete/${id}`,{
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })
    return res.json()
}

export const updatePremium = async (id,token) => {
    const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/users/block/${id}`,
            {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token?.token}`,
                    cache: 'no-store'
                }
            }
            );

        const data = await res.json();
        return data
}

export const addFeature = async (v,token) => {
    return mutation(v,`/api/admin/recipe/feature`, 'POST', token,{
        cache: 'no-store'
    })
}

export const getFeature = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/recipe/feature`,{
        cache: 'no-store'
    })
    return res.json()
}

export const deleteReportButton = async(id,token) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/report/list/delete/${id}`,{
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token?.token}`,
            cache: 'no-store'
        }
    })
    const data = await res.json()
    return data
}

export const deleteReportRecipeButton = async(id,token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/report/recipe/list/delete/${id}`,{
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token?.token}`,
            cache: 'no-store'
        }
    })
    const data = await res.json()
    return data
}