
export async function GetDatas(url) {
    let datas
    let error

    await axios.get(url)
        .then(res => datas = res.data)
        .catch(err => error = err);
    ;

    return {
        datas,
        error
    }
}





export async function GetPostDatas(url, newData) {
    let datas
    let error

    await axios.post(url, newData)
        .then(res => datas = res.data)
        .catch(err => error = err)

    return {
        datas,
        error
    }
}