// http://keith-baker.com/dm-stars/

// Last Known Occurence of Full Moons - first of Zarantyr, -2202YK (-3201)
// Next Known Occurrence of Full Moons - first of Lharvion, 5305 YK

const EberronData = {
  DAYS: ["Sul", "Mol", "Zol", "Wir", "Zor", "Far", "Sar"],
  FULL_LUNAR_CYCLE: 360360,
  MONTHS: [
    "Zarantyr",
    "Olarune",
    "Therendor",
    "Eyre",
    "Dravago",
    "Nymm",
    "Lharvion",
    "Barrakas",
    "Rhaan",
    "Sypheros",
    "Aryth",
    "Vult",
  ],
  MOONS: {
    Nymm: {
      lunar_cycle: 4, // weeks from full to full
      dragonmark: "Hospitality",
      color: "Pale yellow",
      plane: "Daanvi",
      diameter: 900,
      distance: 95000,
      description: `The golden disk of Nymm is most typically associated with royalty. Those born when Nymm is ascendant are said to be sociable and charismatic, gifted orators and con artists. The halflings of House Ghallanda frequently offer discounted rates at their hostelries on nights when "King Nymm" is in its full moon phase.`,
    },
    Sypheros: {
      lunar_cycle: 5,
      dragonmark: "Shadow",
      color: "Smoky gray",
      plane: "Mabar",
      diameter: 1200,
      distance: 193000,
      description: `Sypheros is a dim moon, and people often find it difficult to spot in the night sky. Recent observations using powerful spyglasses have confirmed that a jagged crack runs down the center of the moon, as if the moon is splitting in two. Many believe that children born in the month of Sypheros inherit a shifty, untrustworthy nature, and parents often seek to time pregnancies to avoid this month. However, the druids say that the children of Sypheros are not evil; rather, they are comfortable with the shadows and can face them without fear.`,
    },
    Therendor: {
      lunar_cycle: 6,
      dragonmark: "Healing",
      color: "Pale gray",
      plane: "Syrania",
      diameter: 1100,
      distance: 39000,
      description: `Therendor is the "brother moon" of Barrakas, sharing a similar but narrower orbit with the Lantern Moon. The Serens and druids maintain that natural medicines concocted when Therendor is full and Barrakas is new are more potent than normal. Those born in the month of Therendor are thought to be gentle and empathetic; priests, mediators, and healers often have Therendor as their ascendant moon.`,
    },
    Rhaan: {
      lunar_cycle: 7,
      dragonmark: "Scribing",
      color: "Pale blue",
      plane: "Thelanis",
      diameter: 800,
      distance: 168000,
      description: `The smallest of Eberron's moons, Rhaan looks more like a bright star. When viewed with a spyglass, one may see a series of ridges that vaguely resemble scribblings on a page. The druids say that Rhaan empowers creative thought, and they believe that dancers, musicians, poets, and artists of all stripes draw inspiration from the Book.`,
    },
    Olarune: {
      lunar_cycle: 8,
      dragonmark: "Sentinel",
      color: "Pale orange",
      plane: "Lamannia",
      diameter: 950,
      distance: 22500,
      description: `To the naked eye, the orange disk of Olarune seems to have a slight fringe that vaguely resembles the rim of a shield. The druids say that those born when Olarune is ascendant have a strong bond to community and to order, and a natural desire to protect others; superstition holds that more paladins are born in this month than any other. Scattered lycanthropes, especially weretigers, revere Olarune as a sort of demigoddess-protector.`,
    },
    Eyre: {
      lunar_cycle: 9,
      dragonmark: "Making",
      color: "Silver gray",
      plane: "Fernia",
      diameter: 1200,
      distance: 52000,
      description: `When Eyre is full, a keen-eyed observer can pick out on its surface a shadowy shape that vaguely resembles an anvil. According to druidic belief, those born under Eyre inherit a solid, practical nature and a gift for nature crafts. Some smiths will wait until Eyre is full to work on especially difficult projects, and House Cannith enclaves often hold celebrations when the Anvil is full in the sky.`,
    },
    Vult: {
      lunar_cycle: 10,
      dragonmark: "Warding",
      color: "Gray and pockmarked",
      plane: "Shavarath",
      diameter: 1800,
      distance: 252000,
      description: `Vult is the farthest moon from Eberron, and some legends say that it holds back forces that lurk out within the stars. The druids say that children of Vult are practical, careful folk who generally plan ahead and prepare for the worst; when disaster strikes, the children of Vult hold civilization together. In his study of the Serens, the sage Galeoin reported that the barbarians believe that Vult "devours" the spirits of deceased great wyrms that fail to attain godhood.`,
    },
    Zarantyr: {
      lunar_cycle: 11,
      dragonmark: "Storm",
      color: "Pearly white",
      plane: "Kythri",
      diameter: 1250,
      distance: 14300,
      description: `Zarantyr is the closest moon to Eberron, and it has the greatest effect on the planet's tides. Superstition holds that there is a far greater chance of being struck by lightning when Zarantyr is full, and that bolts can fall from a clear sky. According to the druids, those born in the month of Zarantyr have a wild and tempestuous nature. Sometimes this translates to aggression, but it can also manifest as pure, unbridled energy; barbarians, fighters, sorcerers, and evokers may all feel a bond with the Storm Moon.`,
    },
    Aryth: {
      lunar_cycle: 12,
      dragonmark: "Passage",
      color: "Orange red",
      plane: "Dolurrh",
      diameter: 1000,
      distance: 221000,
      description: `The black dragon Vvarrak told the first druids that Aryth has a similar effect on manifest zones as Zarantyr has on tides, and that particularly weak manifest zones appear only when Aryth is in its full moon phase. Some say that those born under this moon are restless folk, driven to travel and explore; Lhazaar, who led the first great migration from Sarlona to Khorvaire, is said to have been a child of Aryth.`,
    },
    Dravago: {
      lunar_cycle: 13,
      dragonmark: "Handling",
      color: "Pale lavender",
      plane: "Risia",
      diameter: 2000,
      distance: 77500,
      description: `Large and lavender, Dravago is a striking image in the sky. Its orbit typically keeps it at a distance from other moons, and old legends say that it is herding the rest and keeping them in motion. Children of Dravago are said to be more comfortable with animals and plants than with people -- gifted herders, handlers, and farmers, but often awkward in social situations. Some say that stones from Dravago occasionally fall to Eberron, and alchemists have long claimed that this "purple dust of Dravago" holds remarkable magical properties.`,
    },
    Lharvion: {
      lunar_cycle: 14,
      dragonmark: "Detection",
      color: "Dull white with black slit",
      plane: "Xoriat",
      diameter: 1350,
      distance: 125000,
      description: `This moon features a 750-mile-long black chasm, and, when viewed from Eberron, the full disk of Lharvion resembles a slitted eye. Many superstitions exist about the baleful influence of this moon, and strange occurrences and calamities seem to happen when the Eye of Lharvion is full in the sky. The druids believe that children of Lharvion possess unnatural insights, and gifted diviners and researchers are often born in this month.`,
    },
    Barrakas: {
      lunar_cycle: 15,
      dragonmark: "Finding",
      color: "Pale gray",
      plane: "Irian",
      diameter: 1500,
      distance: 144000,
      description: `Barrakas is the brightest of Eberron's moons, and hunters value its light when stalking prey at night. This "sister moon" of Therendor shares a similar (if wider) orbit and occasionally seems to hide behind her closer brother. On nights when Therendor eclipses Barrakas -- "when Barrakas is shy" -- sailors worry about getting lost at sea. Those born when Barrakas is ascendant are thought to be gifted hunters, but many also believe they have a knack for clarifying things that others find confusing. The son of Lharvion sees what others cannot see, while the daughter of Barrakas sheds light on that which is already in the open.`,
    },
  },
};

class YKDate {
  constructor(dd, mm, yyyy) {
    this.mm = mm;
    this.yyyy = yyyy;
    this.setDate(dd);
  }

  #suffixMap = {
    1: "st",
    2: "nd",
    3: "rd",
  };

  toString() {
    const strDd = this.dd.toString();
    const potentialSuffix = this.#suffixMap[strDd[strDd.length - 1]];
    let suffix = "th";
    if (potentialSuffix && !{ 11: 1, 12: 1, 13: 1 }[this.dd]) {
      suffix = potentialSuffix;
    }
    return `${this.dd}${suffix} of ${EberronData.MONTHS[this.mm]}, ${
      this.yyyy
    } YK`;
  }

  getDay() {
    return (this.dd - 1) % 7;
  }
  setDate(newDD) {
    this.mm += ~~(newDD / 28);
    this.dd = newDD % 28;

    this.setMonth(this.mm);
    return this.dd;
  }
  setMonth(newMM) {
    if (newMM < 0) {
      newMM -= 12;
    }
    this.yyyy += ~~(newMM / 12);
    this.mm = newMM % 12;
    if (newMM < 0) {
      this.mm += 12;
    }
    return this.mm;
  }
  setYear(newYYYY) {
    this.yyyy = newYYYY;
    return this.yyyy;
  }
}

EberronData.FULL_MOON_CONVERGENCE = new YKDate(1, 0, -2202);
EberronData.NEXT_FULL_MOON_CONVERGENCE = new YKDate(1, 6, 5305);
EberronData.LUNAR_ORDER = Object.keys(EberronData.MOONS).sort((a, b) =>
  EberronData.MOONS[a].lunar_cycle < EberronData.MOONS[b].lunar_cycle ? -1 : 1
);

export { EberronData, YKDate };
