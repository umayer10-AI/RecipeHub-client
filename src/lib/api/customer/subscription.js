export const subscription = async(v) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/subscription`,{
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    return data
}

export const payments = async(v) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/payments`,{
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    return data
}