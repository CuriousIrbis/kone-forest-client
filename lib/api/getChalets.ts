async function getChalets() {
    const res = await fetch('https://kone-forest-server.onrender.com', {
        cache: 'no-cache',
    })

    if(!res.ok) throw new Error('Не удалось загрузить данные')

    return res.json()
}

export default getChalets