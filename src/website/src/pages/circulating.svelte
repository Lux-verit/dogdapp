<script>
  import { onMount } from "svelte";
  import { tokenActor } from "../utils/tokenActor";

  let totalSupply = "";

  // Function to convert BigInt to Number
  function bigIntToNumber(bigIntValue) {
    return Number(bigIntValue);
  }

  async function fetchTokenData() {
    try {
      const supply =
        bigIntToNumber(await tokenActor.icrc1_total_supply()) / 1e8;
      totalSupply = supply.toString();
    } catch (error) {
      console.error("Error fetching token data:", error);
      totalSupply = "Error";
    }
  }

  onMount(() => {
    fetchTokenData();
  });
</script>

<!-- Display only the total supply in plain text format -->
<pre>{totalSupply}</pre>
