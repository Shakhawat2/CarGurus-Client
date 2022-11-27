import { useEffect, useState } from "react"

const useCheckUser = email =>{
    const [isAdmin, setIsAdmin] = useState(false)
    const [isBuyer, setIsBuyer] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    useEffect(() =>{
        if(email){
            fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data?.isAdmin){
                    setIsAdmin(data?.isAdmin)
                }
                if(data?.isBuyer){
                    setIsBuyer(data?.isBuyer)
                }
                if(data?.isSeller){
                    setIsSeller(data?.isSeller)
                }           
            })
        }
    }, [email])
    return [isAdmin, isBuyer, isSeller]
}
export default useCheckUser;