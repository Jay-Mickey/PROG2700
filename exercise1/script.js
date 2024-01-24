function selectCreature(name){
    //Get the selected creature from the dropdown
    let selectedCreature = document.getElementById("creatureSelector").value;
    
    // Use switch to determine costume based on user selection of guest animal
    let costumeInfo;

    switch (selectedCreature) {
        case "Wizard":
            //document.getElementById("costumeInfo").innerHTML = "Wizards should wear pointy hats and carry wands!";
            costumeInfo = "🪄 <br> Wizards should wear pointy hats and carry wands!";
            break;
        case "Dragon":
            costumeInfo = "🐲 <br> Dragons should wear fiery costumes and breathe imaginary fire!";
            break;
        case "Fairy":
            costumeInfo = "🧚 <br> Fairies should wear sparkly dresses and spread glitter magic!";
            break;
        case "Unicorn":
            costumeInfo = "🦄 <br> Unicorns should wear horned headbands and have rainbow-colored manes!";
            break;
        default:
            costumeInfo = "Hmm, I'm not sure what costume to give to this guest.";
      }

      //Display the costume info on the web page
      document.getElementById("costumeInfo").innerHTML = costumeInfo;

}

