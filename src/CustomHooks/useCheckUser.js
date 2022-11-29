import { useEffect, useState } from "react"

const useCheckUser = email =>{
    const [isAdmin, setIsAdmin] = useState(false)
    const [isBuyer, setIsBuyer] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [isUserloader, setIsUserLoader] = useState(true);
    useEffect(() =>{
        if(email){
            fetch(`https://assignment-12-server-kappa.vercel.app/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                if(data?.isAdmin){
                    setIsAdmin(data?.isAdmin)
                    setIsUserLoader(false)
                }
                if(data?.isBuyer){
                    setIsBuyer(data?.isBuyer)
                    setIsUserLoader(false)
                }
                if(data?.isSeller){
                    setIsSeller(data?.isSeller)
                    setIsUserLoader(false)
                }           
            })
        }
    }, [email])
    return [isAdmin, isBuyer, isSeller, isUserloader]
}
export default useCheckUser;