//This script will grab my steam activity, then show what game im playing under my profile tab
async function test() {
    const apiUrl = 'https://corsproxy.io/?' + encodeURIComponent('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=51990F7C324539A6EA20059D74BA68EB&steamids=76561198324195037');
    const debug = document.getElementById('replaceme');
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`No. ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        const player = json.response.players[0];

        if(player.gameextrainfo) {
            console.log(player.gameextrainfo)
            debug.textContent = player.gameextrainfo

        
        } else {
            console.log("no game")
        }
        




    } catch (error) {
        console.error(error.message);
    }
    const obj = JSON.parse(apiUrl);

}
test()