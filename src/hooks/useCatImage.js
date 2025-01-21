import { useState, useEffect } from "react"

//3. Recuperar una imagen random a partir de las 3 primeras palabras del fact de la primera API
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({fact}) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ') //2. Recuperar las tres primeras palabras del fact random

      fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=blue&json=true`)
      .then(res => res.json())
      .then (response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }

}