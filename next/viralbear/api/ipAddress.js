const getClientIP = async () => {
    const data = await fetch('https://api.ipify.org?format=json');
    return data.json();
}

export default getClientIP;