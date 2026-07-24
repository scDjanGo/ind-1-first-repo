













function setSettings(settings) {

    const currentSettings = JSON.parse(localStorage.getItem("settings"))

    for(let key in currentSettings) {
        if(key in settings) {
            currentSettings[key] = settings[key]
        }
    }


    localStorage.setItem("settings", JSON.stringify(currentSettings))

    console.log("Настройки были сохранены")

}

setSettings({
    theme: "light",
    currency: "RUB"
})