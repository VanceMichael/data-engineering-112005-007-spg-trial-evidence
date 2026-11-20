import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('演练资料关联设备配置、试验、更正、遥测及审批', async () => {
  const data = JSON.parse(await readFile(new URL('../fixtures/observations.json', import.meta.url), 'utf8'));
  assert.equal(data.fixture_kind, 'synthetic');
  for (const type of ['configuration', 'trial', 'trial-correction', 'reading', 'approval']) {
    assert.ok(data.records.some((record) => record.type === type), type);
  }
});
