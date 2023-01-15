import { buildConfig } from '../../scripts/getRollupConfig';
import { dirname } from 'path';
import { RollupOptions } from 'rollup';
import { fileURLToPath } from 'url';

export const input = ['src/menu/Menu.tsx', 'src/index.ts'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function rollup(): RollupOptions[] {
  return buildConfig({
    input,
    packageDir: __dirname,
  });
}
