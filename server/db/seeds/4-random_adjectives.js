/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('random_adjectives').del()
  await knex('random_adjectives').insert([
    { randoms_name: ['Forceful','Interstellar', 'Galactic', 'Rebel'], randoms_cauldron_id: 1, randoms_image_url: ['https://wallpapercave.com/wp/k21tAfG.jpg', 'https://i.pinimg.com/originals/13/f3/5c/13f35c6719bd2d52a587cc0d568b0bbd.jpg', 'https://virtual-bg.com/wp-content/uploads/2020/06/star-wars-5-background-for-zoom-and-teams.jpg','https://vignette.wikia.nocookie.net/starwars/images/d/dd/ST-ewokvillage.jpg/revision/latest?cb=20070811234556'] },
    { randoms_name: ['Tactical', 'Strategic', 'Calculating', 'Grandmaster'], randoms_cauldron_id: 2, randoms_image_url: []},
    { randoms_name: ['Pouncing', 'Playful', 'Stretching', 'Sneaky'], randoms_cauldron_id: 3, randoms_image_url: ['http://placekitten.com/200/300','http://placekitten.com/300/300','http://placekitten.com/400/300','http://placekitten.com/400/500']},
    { randoms_name: ['Avartic', 'Harmonizing', 'Masterful', 'Balancing'], randoms_cauldron_id: 4, randoms_image_url: ['rowValue3']},
  ])
}
