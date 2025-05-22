<script lang="ts">
  import countryCodes from '../utils/countryCodes.ts'

  export let code: string;
  export let width: number | undefined;

  const country = countryCodes.find((x) => {
    return x.alpha2 === code || x.alpha3 === code;
  })
</script>

{#if country.alpha2}
  <img src="../assets/countries/{country.alpha2}.svg" width={width ?? 32} alt={country.name} />
{/if}
