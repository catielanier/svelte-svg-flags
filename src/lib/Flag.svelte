
<script lang="ts">
  import countryCodes from '../utils/countryCodes.ts'
  import {usCodes, canadaCodes, ukCodes, australiaCodes} from '../utils/stateCodes.ts'

  export let country: string;
  export let state: string | undefined;
  export let width: number | undefined;

  const countryObject = countryCodes.find((x) => {
    return x.alpha2.toLowerCase() === country.toLowerCase() || x.alpha3.toLowerCase() === country.toLowerCase();
  })

  const getStateName = (): string => {
    switch (countryObject.alpha2.toLowerCase()) {
      case 'us':
        return usCodes[state.toLowerCase()]
      case 'ca':
        return canadaCodes[state.toLowerCase()]
      case 'uk':
        return ukCodes[state.toLowerCase()]
      case 'au':
        return australiaCodes[state.toLowerCase()]
      default:
        break;
    }
  }

  const stateName: string | undefined = state ? getStateName() : undefined;
</script>

{#if country.alpha2}
  <img src={state ? `$lib/states/${country.alpha2}/${state.toLowerCase()}.svg` : `$lib/countries/${country.alpha2.toLowerCase()}.svg`} width={width ?? 32} alt={state ? stateName : country.name} />
{/if}

