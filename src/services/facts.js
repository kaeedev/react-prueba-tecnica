const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

  //1. Recuperar un fact random de la API

  export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
  }
  