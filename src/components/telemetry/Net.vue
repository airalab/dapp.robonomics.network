<template>
  <RCard>
    <RCardTitle>{{ $t("lighthouse_title") }}</RCardTitle>
    <table class="container-full table-hover">
      <thead>
        <tr>
          <th>ipns</th>
          <th>address eth</th>
          <th>{{ $t("lighthouse_h") }}</th>
          <th>{{ $t("provider") }}</th>
          <th>{{ $t("peers") }}</th>
          <th>{{ $t("date") }}</th>
          <th>{{ $t("network") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="Object.values(nodes).length === 0">
          <td colspan="7">{{ $t("no_data") }}</td>
        </tr>
        <tr v-else v-for="item in Object.values(nodes)" :key="item.id">
          <td>
            <a>
              <a :href="item.id | urlIpfsExplorer('ipns')" target="_blank">
                {{ item.id }}
              </a>
            </a>
          </td>
          <td>
            <a
              v-if="item.address"
              :href="item.address | urlChainExplorer"
              target="_blank"
              >{{ item.address }}</a
            >
            <span v-else>-</span>
          </td>
          <td>
            <span v-if="item.lighthouse">{{ item.lighthouse }}</span>
            <span v-else>-</span>
          </td>
          <td>
            <span v-if="item.provider">+</span>
            <span v-else>-</span>
          </td>
          <td>
            <span v-if="item.peers">{{ item.peers.length }}</span>
            <span v-else>-</span>
          </td>
          <td>
            <span v-if="item.date">{{ item.date }}</span>
            <span v-else>-</span>
          </td>
          <td>
            <span v-if="item.network">{{ item.network }}</span>
            <span v-else>-</span>
          </td>
        </tr>
      </tbody>
    </table>
  </RCard>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    nodes: (state) => state.net.nodes
  })
};
</script>

<style>
.v-datatable__progress th {
  padding: 0;
}
</style>
