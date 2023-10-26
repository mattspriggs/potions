/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {
      ingredients_id: 1,
      ingredients_name: 'Angel Wings',
      ingredients_description: "Gossamer feathers plucked from celestial guardians, said to bring serenity and grace to any concoction.",
      ingredients_image_url: '../images/AngelWings.png',
    },
    {
      ingredients_id: 2,
      ingredients_name: 'Banshee Scream',
      ingredients_description: "The chilling echo of a banshee's wail, capable of unleashing unearthly powers when brewed under a full moon.",
      ingredients_image_url: '../images/BansheeScream.png',
    },
    {
      ingredients_id: 3,
      ingredients_name: 'Centaur Hoof',
      ingredients_description: "The majestic hoof of a centaur, grounding potions with strength and wisdom from the heart of the forest.",
      ingredients_image_url: '../images/CentaurHoof.png',
    },
    {
      ingredients_id: 4,
      ingredients_name: "Demon's Blood",
      ingredients_description: "The crimson essence of a demon's rage, a volatile ingredient that infuses elixirs with potent energy.",
      ingredients_image_url: '../images/DemonsBlood.png',
    },
    {
      ingredients_id: 5,
      ingredients_name: "Djinn Bangles",
      ingredients_description: "Enchanted bracelets that once adorned a djinn, carrying the essence of wishes and the power to grant them.",
      ingredients_image_url: '../images/DjinnBangles.png',
    },
    {
      ingredients_id: 7,
      ingredients_name: "Fairy Dust",
      ingredients_description: "Sparkling remnants of fairy wings, believed to bestow enchantment and shimmer to magical brews.",
      ingredients_image_url: '../images/FairyDust.png',
    },
    {
      ingredients_id: 8,
      ingredients_name: "Goblin Skin",
      ingredients_description: "The supple hide of a goblin, adding a mischievous and unpredictable element to concoctions.",
      ingredients_image_url: '../images/GoblinSkin.png',
    },
    {
      ingredients_id: 9,
      ingredients_name: "Gorgon Eyes",
      ingredients_description: "Petrified orbs from a Gorgon, capable of gazing into one's soul and unlocking hidden truths.",
      ingredients_image_url: '../images/GorgonEyes.png',
    },
    {
      ingredients_id: 10,
      ingredients_name: "Griffon Beak",
      ingredients_description: "The fearsome beak of a griffon, said to grant courage and the power of flight when ingested.",
      ingredients_image_url: '../images/GriffonBeak.png',
    },
    {
      ingredients_id: 11,
      ingredients_name: "Hydra Head",
      ingredients_description: "A preserved head of the mythical hydra, known for its ability to regenerate and bring vitality to elixirs.",
      ingredients_image_url: '../images/HydraHead.png',
    },
    {
      ingredients_id: 12,
      ingredients_name: "Imp Tails",
      ingredients_description: "The flickering tails of mischievous imps, a key ingredient for mischief-infused potions.",
      ingredients_image_url: '../images/ImpTails.png',
    },
    {
      ingredients_id: 13,
      ingredients_name: "Kraken Ink",
      ingredients_description: "The inky black substance secreted by the depths-dwelling kraken, believed to unlock the secrets of the ocean.",
      ingredients_image_url: '../images/KrakenInk.png',
    },
    {
      ingredients_id: 14,
      ingredients_name: "Mermaid Scales",
      ingredients_description: "Iridescent scales from mermaids, offering enchanting allure and water-based properties.",
      ingredients_image_url: '../images/MermaidScales.png',
    },
    {
      ingredients_id: 15,
      ingredients_name: "Minotaur Horn",
      ingredients_description: "The formidable horn of a minotaur, revered for its strength and protection.",
      ingredients_image_url: '../images/MinotaurHorn.png',
    },
    {
      ingredients_id: 16,
      ingredients_name: "Phoenix Feather",
      ingredients_description: "A single radiant feather from a phoenix, said to ignite rebirth and renewal when used.",
      ingredients_image_url: '../images/PhoenixFeather.png',
    },
    {
      ingredients_id: 17,
      ingredients_name: "Sasquatch Toes",
      ingredients_description: "The enormous toes of the elusive Sasquatch, known for grounding elixirs with the essence of the untamed wilderness.",
      ingredients_image_url: '../images/SasquatchToes.png',
    },
    {
      ingredients_id: 18,
      ingredients_name: "Troll Bogies",
      ingredients_description: "The peculiar and pungent bogies of trolls, adding an earthy and uncanny element to brews.",
      ingredients_image_url: '../images/TrollBogies.png',
    },
    {
      ingredients_id: 19,
      ingredients_name: "Unicorn Horn",
      ingredients_description: "The majestic horn of a unicorn, believed to bring purity, healing, and ethereal qualities to concoctions.",
      ingredients_image_url: '../images/UnicornHorn.png',
    },
    {
      ingredients_id: 20,
      ingredients_name: "Werewolf Fur",
      ingredients_description: "Thick fur shed by a lycanthrope, enhancing elixirs with attributes of transformation and primal strength.",
      ingredients_image_url: '../images/WerewolfFur.png',
    },
    {
      ingredients_id: 21,
      ingredients_name: "Wraith Essence",
      ingredients_description: "A ghostly and ethereal essence, offering a connection to the spirit realm and the power of shadows.",
      ingredients_image_url: '../images/WraithEssence.png',
    },
    
  ])
}
