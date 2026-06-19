const BaseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const countUsers = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/users`)
    return res.json()
}

export const countRecepies = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/recipes`)
    return res.json()
}

export const countPremium = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/premium`)
    return res.json()
}

export const updatePremium = async (id) => {
    const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/users/block/${id}`,
            {
                method: "PATCH",
            }
            );

        const data = await res.json();
        return data
}