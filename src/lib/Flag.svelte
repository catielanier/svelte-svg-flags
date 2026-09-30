<script lang="ts">
  import countryCodes from './utils/countryCodes';
  import {
    usCodes,
    canadaCodes,
    ukCodes,
    australiaCodes
  } from './utils/stateCodes';

  interface Props {
    country: string;
    state?: string;
    width?: number;
  }

  let {
    country,
    state,
    width = 32
  }: Props = $props();

  const countryFlags = import.meta.glob<string>('./countries/*.svg', {
    eager: true,
    query: '?url',
    import: 'default'
  });

  const stateFlags = import.meta.glob<string>('./states/**/*.svg', {
    eager: true,
    query: '?url',
    import: 'default'
  });

  const countryObject = $derived(
    countryCodes.find(
      ({ alpha2, alpha3 }) =>
        alpha2.toLowerCase() === country.toLowerCase() ||
        alpha3.toLowerCase() === country.toLowerCase()
    )
  );

  const stateName = $derived.by(() => {
    if (!state || !countryObject) {
      return undefined;
    }

    const stateCode = state.toLowerCase();

    switch (countryObject.alpha2.toLowerCase()) {
      case 'us':
        return usCodes[stateCode];

      case 'ca':
        return canadaCodes[stateCode];

      case 'uk':
        return ukCodes[stateCode];

      case 'au':
        return australiaCodes[stateCode];

      default:
        return undefined;
    }
  });

  const flagUrl = $derived.by(() => {
    if (!countryObject) {
      return undefined;
    }

    const countryCode = countryObject.alpha2.toLowerCase();

    if (state) {
      return stateFlags[
        `./states/${countryCode}/${state.toLowerCase()}.svg`
      ];
    }

    return countryFlags[`./countries/${countryCode}.svg`];
  });
</script>

{#if countryObject && flagUrl}
  <img
    src={flagUrl}
    width={width}
    alt={state ? (stateName ?? state) : countryObject.name}
  />
{/if}