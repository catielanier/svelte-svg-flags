<script lang="ts">
  import countryCodes from '../utils/countryCodes.ts'
  import {usCodes, canadaCodes, ukCodes, australiaCodes} from '../utils/stateCodes.ts'

  export let country: string;
  export let state: string;
  export let width: number | undefined;

  const countryObject = countryCodes.find((x) => {
    return x.alpha2 === code || x.alpha3 === code;
  })

  const getStateName = (): string => {
    switch (countryObject.alpha2) {
      case 'us':
        return usCodes[state]
      case 'ca':
        return canadaCodes[state]
      case 'uk':
        return ukCodes[state]
      case 'au':
        return australiaCodes[state]
      default:
        break;
    }
  }

  const stateName: string = getStateName();
</script>

{#if country.alpha2}
  <img src="../assets/states/{country.alpha2}/{state}.svg" width={width ?? 32} alt={stateName} />
{/if}
