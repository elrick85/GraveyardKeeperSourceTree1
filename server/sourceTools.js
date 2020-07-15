const SOURCE_TOOLS = [
  {
    key: 'Hand Mixer',
    items: [
      {key: 'Acceleration Solution', items: [{key: 'Honey', count: 1}]},
      {key: 'Chaos Solution', items: [{key: 'Bat Wing', count: 1}]},
      {key: 'Chaos Solution', items: [{key: 'Moth', count: 1}]},
      {key: 'Death Solution', items: [{key: 'Dark Brain', count: 1}]},
      {key: 'Health Solution', items: [{key: 'Cabbage', count: 1}]},
      {key: 'Health Solution', items: [{key: 'Carrot', count: 1}]},
      {key: 'Life Solution', items: [{key: 'Brain', count: 1}]},
      {key: 'Life Solution', items: [{key: 'Maggot', count: 1}]},
      {key: 'Life Solution', items: [{key: 'yellow flower', count: 1}]},
      {key: 'Order Solution', items: [{key: 'Bee', count: 1}]},
      {key: 'Order Solution', items: [{key: 'Green Jelly', count: 1}]},
      {key: 'Order Solution', items: [{key: 'White flower', count: 1}]},
      {key: 'Slowing Solution', items: [{key: 'Beeswax', count: 1}]},
      {key: 'Slowing Solution', items: [{key: 'Fat', count: 1}]},
      {key: 'Slowing Solution', items: [{key: 'Hops', count: 1}]},
      {key: 'Toxic Solution', items: [{key: 'Red Mushrooms', count: 1}]},
    ]
  },
  {
    key: 'Alchemy Mill',
    items: [
      {key: 'Acceleration Powder', items: [{key: 'Hemp', count: 1}]},
      {key: 'Acceleration Powder', items: [{key: 'Honey', count: 1}]},
      {key: 'Chaos Powder', items: [{key: 'Bat wing', count: 1}]},
      {key: 'Chaos Powder', items: [{key: 'Butterfly', count: 1}]},
      {key: 'Death Powder', items: [{key: 'Dark Intestine', count: 1}]},
      {key: 'Electric Powder', items: [{key: 'Eel', count: 1}]},
      {key: 'Graphite Powder', items: [{key: 'Graphite', count: 1}]},
      {key: 'Gold Powder', items: [{key: 'Gold Nugget', count: 1}]},
      {key: 'Health Powder', items: [{key: 'Cabbage', count: 1}]},
      {key: 'Health Powder', items: [{key: 'Crop waste', count: 1}]},
      {key: 'Health Powder', items: [{key: 'Pumpkin', count: 1}]},
      {key: 'Life Powder', items: [{key: 'intestine', count: 1}]},
      {key: 'Order Powder', items: [{key: 'Bee', count: 1}]},
      {key: 'Slowing Powder', items: [{key: 'Spider Web', count: 1}]},
      {key: 'Slowing Powder', items: [{key: 'Hops', count: 1}]},
      {key: 'Silver Powder', items: [{key: 'Silver Nugget', count: 1}]},
      {key: 'Toxic Powder', items: [{key: 'Onion', count: 1}]},
      {key: 'Toxic Powder', items: [{key: 'Red flower', count: 1}]},
      {key: 'White Powder', items: [{key: 'Bone', count: 1}]},
      {key: 'White Powder', items: [{key: 'Limestone', count: 1}]},
    ]
  },
  {
    key: 'Distillation Cube',
    items: [
      {key: 'Acceleration Extract', items: [{key: 'Hemp', count: 1}]},
      {key: 'Acceleration Extract', items: [{key: 'Blue jelly', count: 1}]},
      {key: 'Chaos Extract', items: [{key: 'Moth', count: 1}]},
      {key: 'Chaos Extract', items: [{key: 'Butterfly', count: 1}]},
      {key: 'Death Extract', items: [{key: 'Dark Heart', count: 1}]},
      {key: 'Death Extract', items: [{key: 'Black jelly', count: 1}]},
      {key: 'Health Extract', items: [{key: 'Lentils', count: 1}]},
      {key: 'Health Extract', items: [{key: 'Pumpkin', count: 1}]},
      {key: 'Life Extract', items: [{key: 'Heart', count: 1}]},
      {key: 'Life Extract', items: [{key: 'Maggot', count: 1}]},
      {key: 'Life Extract', items: [{key: 'Yellow flower', count: 1}]},
      {key: 'Order Extract', items: [{key: 'Green jelly', count: 1}]},
      {key: 'Order Extract', items: [{key: 'White flower', count: 1}]},
      {key: 'Slowing Extract', items: [{key: 'Beeswax', count: 1}]},
      {key: 'Slowing Extract', items: [{key: 'Spider web', count: 1}]},
      {key: 'Toxic Extract', items: [{key: 'Orange jelly', count: 1}]},
      {key: 'Toxic Extract', items: [{key: 'Onion', count: 1}]},
    ]
  },
  {
    key: 'Alchemy workbench (tier I)',
    items: [
      {key: 'Black Paint', items: [{key: 'Graphite powder', count: 1}, {key: 'Water', count: 1}]},
      {key: 'Black Paint', items: [{key: 'Ash', count: 1}, {key: 'oil', count: 1}]},
      {key: 'Black Paint', items: [{key: 'Death Powder', count: 1}, {key: 'Water', count: 1}]},
      {key: 'Energy Elixir', items: [{key: 'Acceleration powder', count: 1}, {key: 'Slowing solution', count: 1}]},
      {key: 'Energy Elixir', items: [{key: 'Slowing powder', count: 1}, {key: 'Acceleration Solution', count: 1}]},
      {key: 'Dark Elixir', items: [{key: 'Death powder', count: 1}, {key: 'Blood', count: 1}]},
      {key: 'Energy potion', items: [{key: 'Acceleration powder', count: 1}, {key: 'Acceleration solution', count: 1}]},
      {key: 'Freshener', items: [{key: 'Seed oil', count: 1}, {key: 'Order solution', count: 1}]},
      {key: 'Growth Enhancer', items: [{key: 'Ash', count: 1}, {key: 'Life solution', count: 1}]},
      {key: 'Heal Potion', items: [{key: 'Health powder', count: 1}, {key: 'Chaos solution', count: 1}]},
      {key: 'Heal Potion', items: [{key: 'Life powder', count: 1}, {key: 'Health solution', count: 1}]},
      {key: 'Spices', items: [{key: 'Salt', count: 1}, {key: 'Health solution', count: 1}]},
      {key: 'White Paint', items: [{key: 'Alcohol', count: 1}, {key: 'Slowing solution', count: 1}]},
      {key: 'White Paint', items: [{key: 'Yellow electro powder', count: 1}, {key: 'Water', count: 1}]},
      {key: 'White Paint', items: [{key: 'White powder', count: 1}, {key: 'Seed oil', count: 1}]},
    ]
  },
  {
    key: 'Alchemy workbench (tier II)',
    items: [
      {
        key: 'Acid',
        items: [{key: 'Toxic powder', count: 1}, {key: 'Chaos solution', count: 1}, {key: 'Toxic extract', count: 1}]
      },
      {
        key: 'Alkali',
        items: [{key: 'Life powder', count: 1}, {key: 'Death solution', count: 1}, {key: 'Blood', count: 1}]
      },
      {
        key: 'Appetite Potion',
        items: [{key: 'Health powder', count: 1}, {key: 'Toxic solution', count: 1}, {
          key: 'Acceleration extract',
          count: 1
        }]
      },
      {
        key: 'Aromatizer',
        items: [{key: 'Acceleration powder', count: 1}, {key: 'Alcohol', count: 1}, {key: 'Life extract', count: 1}]
      },
      {
        key: 'Armor Potion',
        items: [{key: 'Order solution', count: 1}, {key: 'Slowing solution', count: 1}, {
          key: 'Slowing extract',
          count: 1
        }]
      },
      {
        key: 'Balsamic Solution',
        items: [{key: 'Chaos powder', count: 1}, {key: 'Water', count: 1}, {key: 'Death extract', count: 1}]
      },
      {
        key: 'Berserk potion',
        items: [{key: 'Toxic powder', count: 1}, {key: 'Death solution', count: 1}, {key: 'Death extract', count: 1}]
      },
      {
        key: 'Damage potion',
        items: [{key: 'Chaos powder', count: 1}, {key: 'Death solution', count: 1}, {key: 'Toxic extract', count: 1}]
      },
      {
        key: 'Digestion Potion',
        items: [{key: 'Health powder', count: 1}, {key: 'Toxic solution', count: 1}, {
          key: 'Acceleration extract',
          count: 1
        }]
      },
      {
        key: 'Flavor Enhancer',
        items: [{key: 'Ash', count: 1}, {key: 'Toxic solution', count: 1}, {key: 'Life extract', count: 1}]
      },
      {
        key: 'Glue',
        items: [{key: 'Health powder', count: 1}, {key: 'Life solution', count: 1}, {key: 'Chaos extract', count: 1}]
      },
      {
        key: 'Golden Elixir',
        items: [{key: 'Gold powder', count: 1}, {key: 'Toxic solution', count: 1}, {key: 'Chaos extract', count: 1}]
      },
      {
        key: 'Golden Elixir',
        items: [{key: 'Gold powder', count: 1}, {key: 'Order solution', count: 1}, {key: 'Health extract', count: 1}]
      },
      {
        key: 'Green Plus',
        items: [{key: 'Chaos powder', count: 1}, {key: 'Water', count: 1}, {key: 'Death extract', count: 1}]
      },
      {
        key: 'Long Heal Potion',
        items: [{key: 'Order solution', count: 1}, {key: 'Health solution', count: 1}, {key: 'Health extract', count: 1}]
      },
      {
        key: 'Preservative',
        items: [{key: 'Life powder', count: 1}, {key: 'Slowing solution', count: 1}, {key: 'Slowing extract', count: 1}]
      },
      {
        key: 'Preservative',
        items: [{key: 'Slowing powder', count: 1}, {key: 'Life solution', count: 1}, {key: 'Slowing extract', count: 1}]
      },
      {
        key: 'Protection Potion',
        items: [{key: 'Order powder', count: 1}, {key: 'Slowing solution', count: 1}, {
          key: 'Slowing extract',
          count: 1
        }]
      },
      {
        key: 'Rage Potion',
        items: [{key: 'Chaos Powder', count: 1}, {key: 'Death Solution', count: 1}, {key: 'Toxic Extract', count: 1}]
      },
      {
        key: 'Restoring Potion',
        items: [{key: 'Order powder', count: 1}, {key: 'Health solution', count: 1}, {key: 'Health extract', count: 1}]
      },
      {
        key: 'Silver Elixir',
        items: [{key: 'Silver powder', count: 1}, {key: 'Order solution', count: 1}, {key: 'Life extract', count: 1}]
      },
      {
        key: 'Silver Elixir',
        items: [{key: 'Silver powder', count: 1}, {key: 'Chaos solution', count: 1}, {key: 'Order extract', count: 1}]
      },
      {
        key: 'Speed Potion',
        items: [{key: 'Acceleration powder', count: 1}, {key: 'Chaos solution', count: 1}, {
          key: 'Acceleration extract',
          count: 1
        }]
      },
      {
        key: 'Tanning Agent',
        items: [{key: 'Slowing powder', count: 1}, {key: 'Death solution', count: 1}, {key: 'Order extract', count: 1}]
      },
    ]
  }
];

module.exports = {SOURCE_TOOLS};
