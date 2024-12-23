"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"


export default function Terms() {

  const [showExtraTerms, setShowExtraTerms] = useState(false)



  return (
    <div className="text-xs mt-4 mb-10 text-gray-600 max-w-72">
      <div className="mb-5">
        <span>
          Esta página utiliza Google reCAPTCHA para garantizar que no eres un robot. 
        </span>

        <Button className="opacity-1  text-[#0071eb] hover:bg-transparent p-0 ml-1 h-fit" variant="ghost" onClick={() => setShowExtraTerms(!showExtraTerms)} >
          Más información
        </Button>
      </div>

      <div className="h-28">
        { showExtraTerms && 
          <p>reCAPTCHA está sujeta a la Política de privacidad y a los Términos de servicio de Google, y se utiliza para proporcionar, mantener y mejorar el servicio de reCAPTCHA, así como para fines de seguridad en general (no se utiliza para la publicidad personalizada por parte de Google</p>
        }

      </div>
    </div>
  )
}
