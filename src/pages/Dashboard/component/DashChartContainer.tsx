import { Box, Card, Grid } from "@chakra-ui/react";
import BarChart from "../../../config/component/charts/BarChart";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import { useEffect } from "react";
import { makeChartResponse } from "./utils/common";
import LineGraph from "../../../config/component/charts/LineChart";
import StudentActivityChart from "../../../config/component/StudentActivityChart/StudentActivityChart";
import MyCoursesCard from "../../../config/component/MyCoursesCard/MyCoursesCard";
import UserActivityFeed from "../../../config/component/UserActivityFeed/UserActivityFeed";

const DashChartContainer = observer(() => {
  const {
    VideoStore: { getCategoryVideoCount, categoryVideosCount },
    notesStore: { getCategoryCoursesCount, categoryCoursesCount },
  } = store;

  const fetchData = (getDataFn: any) =>
    new Promise((resolve, reject) => {
      getDataFn().then(resolve).catch(reject);
    });

  useEffect(() => {
    Promise.all([
      fetchData(getCategoryCoursesCount),
      fetchData(getCategoryVideoCount),
    ])
      .then(() => {})
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [getCategoryVideoCount, getCategoryCoursesCount]);

  const videosChartData = makeChartResponse(
    categoryVideosCount.data,
    "Videos Data",
    "title",
    "count",
    ["#FF5733", "#33FF57", "#3366FF", "#FF33A1", "#FFD700"]
  );

  const coursesChartData = makeChartResponse(
    categoryCoursesCount.data,
    "Courses Data",
    "title",
    "total Category",
    ["#FF5733", "#33FF57", "#3366FF", "#FF33A1", "#FFD700"]
  );

  const coursesData = [
    {
      name: "Figma",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
      title: "Figma UI UX Design",
      academy: "Abcd Academy",
      completion: 64,
      timeLeft: "3 hr 20 min left",
    },
   
  ];

  return (
    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={5}>
      <Card w={"100%"} minH={150} p={{ base: 0, sm: 2 }}>
        <BarChart
          data={null}
          options={coursesChartData?.options}
          loading={categoryCoursesCount.loading}
        />
      </Card>
      <Grid gap={2}>
        <Box>
          {coursesData.map((course, index) => (
            <MyCoursesCard key={index} course={course} />
          ))}
        </Box>
        <UserActivityFeed />
      </Grid>

      <Card w={"100%"} minH={150} p={{ base: 0, sm: 2 }}>
        <LineGraph
          data={videosChartData?.data}
          options={videosChartData?.options}
          loading={categoryVideosCount.loading}
        />
      </Card>
      <StudentActivityChart />
    </Grid>
  );
});

export default DashChartContainer;
