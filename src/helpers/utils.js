export const styleTypes = (type) => {
  if (type === "grass") {
    return "type-grass";
  }

  if (type === "poison") {
    return "type-poison";
  }

  if (type === "fire") {
    return "type-fire";
  }

  if (type === "flying") {
    return "type-flying";
  }

  if (type === "water") {
    return "type-water";
  }

  if (type === "bug") {
    return "type-bug";
  }

  if (type === "normal") {
    return "type-normal";
  }
};

export const styleStats = (name) => {
  if (name === "hp") {
    return "hp-stats";
  }

  if (name === "attack") {
    return "attack-stats";
  }

  if (name === "defense") {
    return "defense-stats";
  }

  if (name === "special-attack") {
    return "sa-stats";
  }

  if (name === "special-defense") {
    return "sd-stats";
  }

  if (name === "speed") {
    return "spd-stats";
  }
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const transformNameStat = (name) => {
  if (name === "hp") {
    return "HP";
  }

  if (name === "attack") {
    return "ATK";
  }

  if (name === "defense") {
    return "DEF";
  }

  if (name === "special-attack") {
    return "SA";
  }

  if (name === "special-defense") {
    return "SD";
  }

  if (name === "speed") {
    return "SPD";
  }

  return name;
};
