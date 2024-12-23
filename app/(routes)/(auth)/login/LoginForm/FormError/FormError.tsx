import { FormErrorProps } from "./FormError.types";
import { TriangleAlert } from "lucide-react";

export default function FormError(props: FormErrorProps) {

    const { message  } = props

    if(!message) return null
    return (
        <div>
            <TriangleAlert>
                <p> {message} </p>
            </TriangleAlert>

        </div>
    )
}
