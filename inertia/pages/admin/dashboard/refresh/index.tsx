import Refresh from "#dashboard/refresh/models/refresh"

interface Props {
    refreshes: Refresh[]
}
const Index = (props: Props) => {
    const { refreshes } = props
  return (
    <div>Refresh

        {JSON.stringify(refreshes)}
    </div>
  )
}

export default Index