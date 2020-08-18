<template>
  <div class="users">
    <h1>Users</h1>
    <table>
      <thead>
      <tr>
        <th>
          ID
        </th>
        <th>
          First Name
        </th>
        <th>
          Last Name
        </th>
        <th>
          SSN
        </th>
        <th>
          Address
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.ssn}}</td>
        <td>{{user.address}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {Component, Inject} from "vue-property-decorator";
import { SampleData, APIService } from "@/services/api-service";
import Vue from "vue";

@Component({
  name: 'users-view'
})
export default class UsersView extends Vue {
  users: SampleData[] = [];
  @Inject('APIService')
  private APIService!: APIService;

  async created() {
    this.users = await this.APIService.query();
  }
}

</script>

<style lang="scss" scoped>
</style>

