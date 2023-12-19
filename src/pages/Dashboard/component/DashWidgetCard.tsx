import { Grid, GridItem } from '@chakra-ui/react'
import WidgetCard from '../../../config/component/WigdetCard/WidgetCard'
import { dashboard } from '../../../config/constant/routes'
import { observer } from 'mobx-react-lite'

const DashWidgetCard = observer(() => {
  return (
    <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}}
        gap={4}
        marginX="auto"
      >
        {[{count : 653, title : 'Total Quiz', link : dashboard.quiz}, {count : 2000, title : 'Total Videos', link : dashboard.videos},{count : 2000, title : 'Total Course', link : dashboard.course}].map((item, key) => (
          <GridItem key={key}>
            <WidgetCard totalCount={item.count} title={item.title} link={item.link}/>
          </GridItem>
        ))}
      </Grid>
  )
})

export default DashWidgetCard;