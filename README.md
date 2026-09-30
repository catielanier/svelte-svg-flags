# svelte-svg-flags

A lightweight SVG flag component library for Svelte 5.

`svelte-svg-flags` provides a simple `<Flag>` component for displaying country flags using ISO 3166-1 alpha-2 or alpha-3 country codes, with additional support for subdivision flags for supported countries.

## Installation

Install the package using your preferred package manager:

```bash
npm install svelte-svg-flags
```

```bash
pnpm add svelte-svg-flags
```

```bash
yarn add svelte-svg-flags
```

## Usage

Import the `Flag` component:

```svelte
<script lang="ts">
  import { Flag } from 'svelte-svg-flags';
</script>

<Flag country="CA" />
```

Country codes are case-insensitive and may be supplied as either ISO 3166-1 alpha-2 or alpha-3 codes:

```svelte
<Flag country="CA" />
<Flag country="CAN" />

<Flag country="US" />
<Flag country="USA" />

<Flag country="JP" />
<Flag country="JPN" />
```

## Subdivision flags

Subdivision flags are available for supported countries using the `state` prop.

```svelte
<Flag country="US" state="NY" />
<Flag country="CA" state="ON" />
```

Currently, subdivision lookup support is included for:

- Australia
- Canada
- United Kingdom
- United States

Both country and subdivision codes are case-insensitive.

## Sizing

Flags have a default width of `32` pixels.

Use the `width` prop to specify a different width:

```svelte
<Flag country="CA" width={64} />
```

## Props

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `country` | `string` | Yes | — | ISO 3166-1 alpha-2 or alpha-3 country code |
| `state` | `string` | No | — | Subdivision code for a supported country |
| `width` | `number` | No | `32` | Width of the rendered flag in pixels |

## Examples

### Country flag

```svelte
<script lang="ts">
  import { Flag } from 'svelte-svg-flags';
</script>

<Flag country="DE" />
```

### Alpha-3 country code

```svelte
<Flag country="DEU" />
```

### Canadian province

```svelte
<Flag country="CA" state="ON" />
```

### US state

```svelte
<Flag country="US" state="IL" />
```

### Custom width

```svelte
<Flag country="GB" width={48} />
```

## Invalid codes

If the supplied `country` code cannot be found, the component does not render a flag.

```svelte
<Flag country="NOT-A-COUNTRY" />
```

If a subdivision name cannot be resolved, the supplied subdivision code is used as the image's alternative text.

## Svelte compatibility

`svelte-svg-flags` is built for Svelte 5.

Your project should have Svelte 5 installed:

```json
{
  "dependencies": {
    "svelte": "^5.0.0"
  }
}
```

The component can be used in SvelteKit applications as well as Svelte applications using other compatible build setups.

## Development

Clone the repository and install its dependencies:

```bash
git clone https://github.com/catielanier/svelte-svg-flags.git
cd svelte-svg-flags
npm install
```

Start the development server:

```bash
npm run dev
```

Run Svelte and TypeScript checks:

```bash
npm run check
```

Build the package:

```bash
npm run build
```

### Testing the package locally

The package can be tested as an actual dependency without publishing it to npm.

First, create the package tarball:

```bash
npm pack
```

This produces a file similar to:

```text
svelte-svg-flags-0.0.1.tgz
```

Install that tarball from another Svelte project:

```bash
npm install /path/to/svelte-svg-flags/svelte-svg-flags-0.0.1.tgz
```

The consuming project can then import the library normally:

```svelte
<script lang="ts">
  import { Flag } from 'svelte-svg-flags';
</script>

<Flag country="CA" />
```

This is useful for verifying the packaged library before publishing a release.

## Contributing

Bug reports and pull requests are welcome.

If you encounter an incorrect flag, missing subdivision, rendering issue, or package compatibility problem, please open an issue with enough information to reproduce the problem.

## License

Copyright © Catie Lanier

The source code for `svelte-svg-flags` is licensed under the GNU General Public License v3.0 only (`GPL-3.0-only`).

See [`LICENSE`](./LICENSE) for the full license text.

### Flag artwork

National and subdivision flags may be subject to their own copyright, public-domain, trademark, or governmental-use rules depending on their source and jurisdiction.

The GPL license for the `svelte-svg-flags` source code should not be interpreted as asserting copyright ownership over flag designs that are not original works of the project.