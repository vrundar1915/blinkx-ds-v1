import type { Preview } from '@storybook/react-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'

import '../src/index.css'
import { mswHandlers } from './msw-handlers'

initialize({ onUnhandledRequest: 'bypass' })

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    options: {
      storySort: {
        order: [
          'Foundation',
          ['Color', ['Primitives', 'Semantics'], 'Typography', 'Spacing', 'Radius', 'Drop Shadow'],
          'Components',
          [
            'Buttons',
            ['Brand', ['Preview', 'Gallery'], 'Buy∕Sell', ['Preview', 'Gallery']],
            'Radio',
            ['Preview', 'Gallery'],
            'Checkbox',
            ['Preview', 'Gallery'],
            'Segment',
            ['Preview', 'Gallery'],
            'Toggle',
            ['Preview', 'Gallery'],
            'Tooltip',
            ['Preview', 'Gallery'],
            'Tab',
            ['Preview', 'Gallery'],
            'Chips',
            ['Preview', 'Gallery'],
            'Quick Action Bar',
            ['Preview', 'Gallery'],
            'Loader',
            ['Preview', 'Gallery'],
            'Toast Message',
            ['Preview', 'Gallery'],
          ],
        ],
      },
    },

    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    msw: {
      handlers: mswHandlers
    }
  },
};

export default preview;
