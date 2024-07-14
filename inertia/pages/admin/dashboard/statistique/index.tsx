import Statistique from '#dashboard/statistique/models/statistique'

interface Props {
    statistiques: Statistique[]
}
const Index = (props: Props) => {
    const { statistiques } = props
   
  return (
    <div>Statistiques: {JSON.stringify(statistiques)}
    </div>
  )
}

export default Index