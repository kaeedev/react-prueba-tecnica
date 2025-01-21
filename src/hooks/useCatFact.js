import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

// Funcion para el boton de recargar fact
export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // para recuperar la cita al cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
