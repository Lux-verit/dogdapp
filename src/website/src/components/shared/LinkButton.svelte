<script>
  import { Link } from "svelte-routing";

  export let to;

  // Function to check if the URL is external
  const isExternalLink = (url) => {
    // A simple regex to test if the URL starts with 'http://' or 'https://'
    return /^(http:|https:)/.test(url);
  };
</script>

{#if isExternalLink(to)}
  <a style="width: 100%; display: flex; justify-content: center" href={to}>
    <slot />
  </a>
{:else}
  <Link style="width: 100%; display: flex; justify-content: center" {to}>
    <slot />
  </Link>
{/if}
