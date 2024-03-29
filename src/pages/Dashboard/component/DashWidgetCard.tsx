import { Grid, GridItem } from "@chakra-ui/react";
import WidgetCard from "../../../config/component/WigdetCard/WidgetCard";
import { dashboard } from "../../../config/constant/routes";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import { useEffect } from "react";

const DashWidgetCard = observer(() => {
  const {
    auth: { openNotification },
    tripStore: { getTripCounts, tripCount },
    Employe: { getEmployesCount, employesCounts },
  } = store;

  const fetchData = (getDataFn: any) =>
    new Promise((resolve, reject) => {
      getDataFn().then(resolve).catch(reject);
    });

  useEffect(() => {
    Promise.all([fetchData(getTripCounts), fetchData(getEmployesCount)])
      .then(() => {})
      .catch((error: any) => {
        openNotification({
          type: "error",
          message: error.message,
          title: "Failed to get dashboard data",
        });
      });
  }, [getTripCounts, getEmployesCount, openNotification]);

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={4}
      marginX="auto"
    >
      {[
        {
          count: employesCounts.data,
          title: "Users",
          link: dashboard.employes.index,
          loading: employesCounts.loading,
        },
        {
          count: tripCount.data,
          title: "Total Trips",
          link: dashboard.tripManagement.index,
          loading: tripCount.loading,
        },
        {
          count: 2000,
          title: "Calender",
          link: dashboard.calender,
          loading: tripCount.loading,
        },
        {
          count: 2000,
          title: "Videos",
          link: dashboard.videos,
          loading: tripCount.loading,
        },
      ].map((item, key) => (
        <GridItem key={key}>
          <WidgetCard
            totalCount={item.count}
            title={item.title}
            link={item.link}
            loading={item.loading}
          />
        </GridItem>
      ))}
    </Grid>
  );
});

export default DashWidgetCard;
