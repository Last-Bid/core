<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Deal of the Day"
                                type="gradient-green"
                                sub-title="Mixed Stripes"
                                icon="ni ni-bulb-61"
                                class="mb-4 mb-xl-0 pb-4"
                    >
                        <template slot="footer">
                            <img alt="Image placeholder" src="img/theme/team-2-800x800.jpg" width="100%" class="">
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Living It Up"
                                type="gradient-orange"
                                sub-title="Buy Confidence"
                                icon="ni ni-check-bold"
                                class="mb-4 mb-xl-0 pb-4"
                    >

                        <template slot="footer">
                            <img alt="Image placeholder" src="img/theme/team-1-800x800.jpg" width="100%" class="">
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="The Classy"
                                type="gradient-red"
                                sub-title="Cultured Look"
                                icon="ni ni-scissors"
                                class="mb-4 mb-xl-0 pb-4"
                    >

                        <template slot="footer">
                            <img alt="Image placeholder" src="img/theme/team-3-800x800.jpg" width="100%" class="">
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="What's New"
                                type="gradient-info"
                                sub-title="Stylish Black"
                                icon="ni ni-satisfied"
                                class="mb-4 mb-xl-0 pb-4"
                    >

                        <template slot="footer">
                            <img alt="Image placeholder" src="img/theme/team-4-800x800.jpg" width="100%" class="">
                        </template>
                    </stats-card>
                </div>
            </div>
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--7">

            <!--Tables-->
            <div class="row mt-5">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <page-visits-table></page-visits-table>
                </div>
                <div class="col-xl-4">
                    <social-traffic-table></social-traffic-table>
                </div>
            </div>
            <!--End tables-->
        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      PageVisitsTable,
      SocialTrafficTable,
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style></style>
