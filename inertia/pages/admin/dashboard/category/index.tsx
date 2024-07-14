import Category from '#dashboard/category/models/category'

interface Props {
    categories: Category[]
}
const index = (props: Props) => {
    const { categories } = props

  return (
    <div>
         {JSON.stringify(categories)}
    </div>
  )
}

export default index