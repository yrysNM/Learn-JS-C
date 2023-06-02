const data = {
  StatisticsModelBranches: [
    {
      createdDate: "2023-06-01T10:52:51.666+00:00",
      updatedDate: "2023-06-01T03:56:40.012+00:00",
      consolidationAmountGavenToBranch: 9,
      consolidationWeightAmountGavenToBranch: 174.618004322052,
      amountOfGavenOrdersToBranch: 187679,
      amountOfTakenOrdersFromBranch: 25544,
      amountOfClientsTakenOrderFromBranch: 4261,
      averageWeightPerClientInBranch: 2.4997125105675044,
    },
    {
      createdDate: "2023-05-31T13:52:51.666+00:00",
      updatedDate: "2023-05-31T12:15:44.226+00:00",
      consolidationAmountGavenToBranch: 9,
      consolidationWeightAmountGavenToBranch: 174.618004322052,
      amountOfGavenOrdersToBranch: 187679,
      amountOfTakenOrdersFromBranch: 27342,
      amountOfClientsTakenOrderFromBranch: 4455,
      averageWeightPerClientInBranch: 2.561415714527612,
    },
  ],
  StatisticsModelLogisticsOfChina: [
    {
      createdDate: "2023-06-01T10:52:51.666+00:00",
      updatedDate: "2023-06-01T03:56:40.012+00:00",
      amountOfTakenConsolidationsByLogisticsOfChina: 0,
      amountOfOnRoadToHorgosConsolidationsByLogisticsOfChina: 0,
      amountOfExportedConsolidationsByLogisticsChina: 0,
    },
    {
      createdDate: "2023-05-31T13:52:51.666+00:00",
      updatedDate: "2023-05-31T12:15:44.226+00:00",
      amountOfTakenConsolidationsByLogisticsOfChina: 4455,
      amountOfOnRoadToHorgosConsolidationsByLogisticsOfChina: 4455,
      amountOfExportedConsolidationsByLogisticsChina: 4455,
    },
  ],
  StatisticsModelAlmatyStorage: [
    {
      createdDate: "2023-06-01T10:52:51.666+00:00",
      updatedDate: "2023-06-01T03:56:40.012+00:00",
      amountOfOrdersArrivedToAlmatyStorage: 0,
      amountOfOrderWeightsArrivedToAlmatyStorage: 0.0,
      averageAmountOfAssumedOrderInHourInAlmatyStorage: 0.0,
      amountOfPreparedConsolidationInAlmatyStorage: 0,
      proportionOfPDDInArrivedOrdersInAlmatyStorage: 0.0,
      proportionOfOthersInArrivedOrdersInAlmatyStorage: 0.0,
      amountOfPreparedOrdersArrivedByPDDInAlmatyStorage: 0,
      amountOfPreparedOrdersArrivedByOthersInAlmatyStorage: 0,
      amountOfOrdersInSortingLineInAlmatyStorage: 0,
    },
    {
      createdDate: "2023-05-31T13:52:51.666+00:00",
      updatedDate: "2023-05-31T12:15:44.226+00:00",
      amountOfOrdersArrivedToAlmatyStorage: 4455,
      amountOfOrderWeightsArrivedToAlmatyStorage: 4455.0,
      averageAmountOfAssumedOrderInHourInAlmatyStorage: 4455.0,
      amountOfPreparedConsolidationInAlmatyStorage: 4455,
      proportionOfPDDInArrivedOrdersInAlmatyStorage: 4455.0,
      proportionOfOthersInArrivedOrdersInAlmatyStorage: 4455.0,
      amountOfPreparedOrdersArrivedByPDDInAlmatyStorage: 4455,
      amountOfPreparedOrdersArrivedByOthersInAlmatyStorage: 4455,
      amountOfOrdersInSortingLineInAlmatyStorage: 4455,
    },
  ],
};

const {
  StatisticsModelBranches,
  StatisticsModelAlmatyStorage,
  StatisticsModelLogisticsOfChina,
} = data;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * @this.$dayjs.isoWeekday() // gets the current ISO day of the week index 1 -> Monday
 */
const dateLabels = StatisticsModelBranches.map(
  (data) => days[new Date(data.createdDate).getDay()]
);

const dataForChart = StatisticsModelBranches.map(
  (item) => item.amountOfClientsTakenOrderFromBranch
);

console.log({
  labels: dateLabels,

  label: "Stattics model fo branches",
  data: dataForChart,
});
