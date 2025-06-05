import { ReactNode } from "react"

const Wrapper = ({children}: {children: ReactNode}) => {
    return (
        <div className="w-3/4 mx-auto">
            {children}
        </div>
    )
}

export default Wrapper