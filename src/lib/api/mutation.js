const BaseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getdata = async (path) => {
    const res = await fetch(`${BaseUrl}${path}`)
    return res.json()
}

export const mutation = async (v,path, method='POST') => {
    // console.log(BaseUrl,path, method)
    const res = await fetch(`${BaseUrl}${path}`,{
        method: method,
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    return data
}