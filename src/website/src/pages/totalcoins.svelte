<script>
  import { onMount } from "svelte";
  import { tokenActor } from "../utils/tokenActor";

  let tokenInfo = {
    name: "",
    ticker: "",
    fee: "",
    totalSupply: "",
  };

  const originalSupply = 420.69e12; // 420.69 trillion tokens

  // Function to convert BigInt to Number
  function bigIntToNumber(bigIntValue) {
    return Number(bigIntValue);
  }
  async function fetchTokenData() {
    try {
      tokenInfo.name = await tokenActor.icrc1_name();
      tokenInfo.ticker = await tokenActor.icrc1_symbol();
      tokenInfo.fee = bigIntToNumber(await tokenActor.icrc1_fee()) / 1e8;
      tokenInfo.totalSupply =
        bigIntToNumber(await tokenActor.icrc1_total_supply()) / 1e8;
    } catch (error) {
      console.error("Error fetching token data:", error);
    }
  }

  onMount(() => {
    fetchTokenData();
  });
  // Function to format numbers to a more readable format, e.g., adding commas
  function formatNumber(number) {
    return number.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }

  $: burnedAmount = originalSupply - bigIntToNumber(tokenInfo.totalSupply);
</script>

<pre>{tokenInfo.totalSupply}</pre>

<style>
  /* Add any required styling here */
</style>
