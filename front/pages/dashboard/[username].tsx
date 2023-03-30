import { useRouter } from "next/router"



const DashboardId = () => {

    const router = useRouter()
    const {username} = router.query
    const {query} = router.query

    return(
        <>
            <h1>{username}</h1>
            <h2>{query}</h2>
        </>
    )
}

export default DashboardId