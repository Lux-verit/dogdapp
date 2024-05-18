<script lang="ts">
  import Header from "@components/shared/Header.svelte";
  import HeroSection from "@components/home/HeroSection.svelte";
  import TokenInfo from "@src/components/home/TokenInfo.svelte";
  import CollectOrTrade from "@components/home/CollectOrTrade.svelte";
  import TokenAllocation from "@src/components/home/TokenAllocation.svelte";
</script>

<div class="background">
  <Header />
  <HeroSection />
</div>
<TokenInfo />
<TokenAllocation />
<CollectOrTrade />

<style lang="scss">
  .background {
    background-image: url("/assets/home-hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
