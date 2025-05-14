
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Marcsfic98/portfolioDioJson/refs/heads/main/main.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
