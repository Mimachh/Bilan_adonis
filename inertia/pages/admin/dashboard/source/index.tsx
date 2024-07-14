import Source from "#dashboard/source/models/source"

interface Props {
    sources: Source[]
}
const Index = (props: Props) => {
    const { sources } = props
  return (
    <div>{JSON.stringify(sources)}</div>
  )
}

export default Index