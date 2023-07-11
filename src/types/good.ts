export namespace GoodTypes {
  export interface Card {
    id: number
    name: string
    description: string
    price: number
    image_url: string
    abv: number
    attenuation_level: number
    volume: {
      unit: string
      value: number
    }
    food_pairing: string[]
    tagline: string
  }
}
