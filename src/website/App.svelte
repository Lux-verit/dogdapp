<script>
  import { Router, Route } from "svelte-routing";
  import Home from "@src/pages/Home.svelte";
  import TotalSupply from "@src/pages/totalcoins.svelte";
  import CircSupply from "@src/pages/circulating.svelte";
</script>

<Router>
  <Route path="/"><Home /></Route>
  <Route path="api/supply_info/total"><TotalSupply /></Route>
  <Route path="api/supply_info/circulating"><CircSupply /></Route>
</Router>
