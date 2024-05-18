<script>
  import { onMount } from "svelte";
  import { tokenActor } from "../../utils/tokenActor";

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

<section class="container" id="create">
  <h2>DOGMI - Canister Info</h2>
  <p class="small">
    Launched in September 2022, the OG DOGMI was under the EXT standard.
  </p>
  <p class="small">
    It has since evolved to the more advanced ICRC-1 standard.
  </p>
  <p class="small">Memetic. Deflationary. Secure.</p>

  <p class="small">#WoofWoof #DogsGMI</p>

  <div class="token-info">
    <h3>Token Information</h3>
    <table>
      <tr><td>Canister ID</td><td>7tx3o-zyaaa-aaaak-aes6q-cai</td></tr>
      <tr><td>Standard</td><td>ICRC-1</td></tr>
      <tr><td>Name</td><td>{tokenInfo.name}</td></tr>
      <tr><td>Ticker</td><td>{tokenInfo.ticker}</td></tr>
      <tr><td>Fee</td><td>{formatNumber(tokenInfo.fee)}</td></tr>
      <tr
        ><td>Total Supply</td><td>{formatNumber(tokenInfo.totalSupply)}</td></tr
      >
      <tr><td>Original Supply</td><td>{formatNumber(originalSupply)}</td></tr>
      <tr><td>Burned</td><td>{formatNumber(burnedAmount)}</td></tr>
    </table>
  </div>

  <a
    href="https://app.icpswap.com/swap?output=7tx3o-zyaaa-aaaak-aes6q-cai&input=ryjl3-tyaaa-aaaaa-aaaba-cai"
    class="button"
  >
    Buy DOGMI
  </a>
  <a
    href="https://info.icpswap.com/token/details/7tx3o-zyaaa-aaaak-aes6q-cai"
    class="button secondary"
  >
    ICPSWAP Info Page
  </a>
</section>

<style>
  section {
    max-width: 800px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .token-info {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 660px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  .button {
    max-width: 600px;
    margin-top: 20px;
  }
</style>
