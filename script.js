const entries = document.getElementById("entries")
for (let i = 1; i <= 20; i++) {

  let dexNum = 0;
  if (i > 9 && i < 100)
  {dexNum = "0" + i}

  else if ( i > 0 && i < 10)
  {dexNum = "00" + i}

  else{dexNum = i};

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
    pokemonNumber.innerText = "#"+dexNum
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

