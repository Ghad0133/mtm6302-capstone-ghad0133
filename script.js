const entries = document.getElementById("entries")
for (let i = 1; i <= 20; i++) {
    
    let contain = document.createElement("div");
    let toggleDiv = document.createElement("div");
    let toggleSwitch = document.createElement("label");
    let toggleBox = document.createElement("input");
    let toggleSlide = document.createElement("span");
    let infoDiv = document.createElement("div");
    let pokemonNumber = document.createElement("p");
    let pokemonPic = document.createElement("div");
    let pokemonName = document.createElement("p");
    
    contain.className = "entry-box";
    toggleDiv.className = "toggle-div";
    toggleSwitch.className = "switch";
    toggleBox.className = "checkbox";
    toggleSlide.className = "slider";
    infoDiv.className = "info";
    pokemonNumber.className = "pkmnNum";
    pokemonPic.className = "sprits";
    pokemonName.className = "pkmnName";
    pokemonNumber.innerText = "#"+i
    infoDiv.appendChild(pokemonNumber)
    infoDiv.appendChild(pokemonPic)
    infoDiv.appendChild(pokemonName)

    toggleSwitch.appendChild(toggleBox)
    toggleSwitch.appendChild(toggleSlide)

    toggleDiv.appendChild(toggleSwitch)

    contain.appendChild(toggleDiv)
    contain.appendChild(infoDiv)


    entries.appendChild(contain)
  }