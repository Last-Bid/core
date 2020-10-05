<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Recent Purchases</h3>
        </div>
        <div class="col text-right">
          <a href="#!" class="btn btn-sm btn-primary">See all</a>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Bought</th>
          <th>Seen By</th>
          <th>Time Left</th>
          <th>Price</th>
          <th>Original</th>
          <th>Saved</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.page}}
          </th>
          <td>
            {{row.seen_by}}
          </td>
          <td>
            {{row.time_left}}
          </td>
          <td>
            {{row.price}}
          </td>
          <td>
            <del>{{row.original_price}}</del>
          </td>
          <td>
            <i class="fas fa-arrow-up text-success mr-3"
               :class="row.bounceRateDirection === 'up' ? 'text-success': 'text-danger'">
            </i>
            {{row.bounceRate}}
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'page-visits-table',
    data() {
      return {
        tableData: [
          {
            page: 'Black Mesh Cap',
            seen_by: '4,591',
            time_left: '11 sec',
            bounceRate: '$25',
            price: "$10",
            original_price: "$35",
            bounceRateDirection: 'up'
          },
          {
            page: 'Mixed Stripe Top',
            seen_by: '3,985',
            time_left: '30 sec',
            bounceRate: '$36',
            price: "$24",
            original_price: "$60",
            bounceRateDirection: 'up'
          },
          {
            page: 'Traditional Qipao',
            seen_by: '3,513',
            time_left: '1 min',
            bounceRate: '$388',
            price: "$22",
            original_price: "$410",
            bounceRateDirection: 'up'
          },
          {
            page: 'Classic Shades',
            seen_by: '2,050',
            time_left: '2 hr',
            bounceRate: '$68',
            price: "$12",
            original_price: "$80",
            bounceRateDirection: 'up'
          },
          {
            page: 'Classy Large Shades',
            seen_by: '1,795',
            time_left: '10 sec',
            bounceRate: '$76',
            price: "$24",
            original_price: "$100",
            bounceRateDirection: 'up'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
