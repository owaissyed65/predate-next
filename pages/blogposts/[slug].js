import { useRouter } from "next/router"

const slug = () => {
  const router = useRouter()
  const { slug } = router.query;
  return (
    <>

      <div className="container">
        blog:{slug}
      </div>
    </>
  )
}

export default slug
