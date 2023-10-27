/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('random_adjectives').del()
  await knex('random_adjectives').insert([
    { randoms_name: 'Forceful', randoms_cauldron_id: 1, randoms_image_url: 'https://wallpapercave.com/wp/k21tAfG.jpg'},
    { randoms_name: 'Interstellar', randoms_cauldron_id: 1, randoms_image_url: 'https://i.pinimg.com/originals/13/f3/5c/13f35c6719bd2d52a587cc0d568b0bbd.jpg'},
    { randoms_name: 'Galactic', randoms_cauldron_id: 1, randoms_image_url: 'https://virtual-bg.com/wp-content/uploads/2020/06/star-wars-5-background-for-zoom-and-teams.jpg'},
    { randoms_name: 'Rebel', randoms_cauldron_id: 1, randoms_image_url: 'https://vignette.wikia.nocookie.net/starwars/images/d/dd/ST-ewokvillage.jpg/revision/latest?cb=20070811234556' },

    { randoms_name: 'Tactical', randoms_cauldron_id: 2, randoms_image_url: '/'},
    { randoms_name: 'Strategic', randoms_cauldron_id: 2, randoms_image_url: '/'},
    { randoms_name: 'Calculating', randoms_cauldron_id: 2, randoms_image_url: '/'},
    { randoms_name: 'Grandmaster', randoms_cauldron_id: 2, randoms_image_url: '/'},

    { randoms_name: 'Pouncing', randoms_cauldron_id: 3, randoms_image_url: 'http://placekitten.com/200/300'},
    { randoms_name: 'Playful',  randoms_cauldron_id: 3, randoms_image_url: 'http://placekitten.com/300/300'},
    { randoms_name: 'Stretching', randoms_cauldron_id: 3, randoms_image_url: 'http://placekitten.com/400/300'},
    { randoms_name: 'Sneaky', randoms_cauldron_id: 3, randoms_image_url: 'http://placekitten.com/400/500'},
    
    { randoms_name: 'Avartic', randoms_cauldron_id: 4, randoms_image_url: '/'},
    { randoms_name: 'Harmonizing', randoms_cauldron_id: 4, randoms_image_url: '/'},
    { randoms_name: 'Masterful', randoms_cauldron_id: 4, randoms_image_url: '/'},
    { randoms_name: 'Balancing', randoms_cauldron_id: 4, randoms_image_url: '/'},
  ])
}
