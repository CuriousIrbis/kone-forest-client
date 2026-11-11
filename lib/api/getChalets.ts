async function getChalets() {
    const res = await fetch('http://localhost:7777/', {
        cache: 'no-cache',
    })

    if(!res.ok) throw new Error('Не удалось загрузить данные')

    return res.json()
}

export default getChalets