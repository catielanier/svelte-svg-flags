<script lang="ts">
  import countryCodes from '../utils/countryCodes.ts'

  export let code: string;
  export let width: number | undefined;

  const countryObject = countryCodes.find((x) => {
    return x.alpha2 === code || x.alpha3 === code;
  })
</script>

{#if country.alpha2}
  <img src="../assets/countries/{countryObject.alpha2}.svg" width={width ?? 32} alt={countryObject.name} />
{/if}
